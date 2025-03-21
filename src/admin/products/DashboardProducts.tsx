import DashboardProvider from "../../providers/DashboardProvider";
import DataTable from "react-data-table-component";
import columns from "./columns";
import { Input } from "@material-tailwind/react";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductRedux, getAllProductsRedux, ProductsInterface } from "../../redux/features/products";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import DeleteModal from "../../components/modals/DeleteModal";
import AddCategory from "../../components/modals/AddCategory";
import AddSubCategory from "../../components/modals/AddSubCategory";

const DashboardProducts: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const products: ProductsInterface = useSelector((state: RootState) => state.products.products);
    const [isSelected, setIsSelected] = useState<string>('');
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
    const [isSubCategoryOpen, setIsSubCategoryOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const filterProducts = useMemo(() => {
        if (!search) return products.products;
        let mySearch = search.toLowerCase();
        return products.products.filter(
            (item) => item.name?.toLowerCase()?.includes(mySearch) || item.category?.name?.toLowerCase()?.includes(mySearch) || item.subCategory?.name?.toLowerCase()?.includes(mySearch)
        );
    }, [search, products.products]);

    const handleCategoryOpen = () => setIsCategoryOpen(true);
    const handleSubCategoryOpen = () => setIsSubCategoryOpen(true);

    const callApi = () => {
        setLoading(true);
        dispatch(getAllProductsRedux(() => {
            setLoading(false);
        }));
    }

    useEffect(() => {
        callApi();
    }, []);

    const onDelete = (_id: string) => {
        dispatch(deleteProductRedux(_id, () => callApi()));
    }

    return <>
        <DeleteModal
            isOpen={isDelete}
            setIsOpen={setIsDelete}
            onDelete={() => {
                setIsDelete(false);
                onDelete(isSelected);
                setIsSelected('');
            }}
        />
        <AddCategory
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
        />
        <AddSubCategory
            isOpen={isSubCategoryOpen}
            setIsOpen={setIsSubCategoryOpen}
        />
        <DashboardProvider title="Products" className="space-y-2">
            <div className="w-full py-2 flex flex-col gap-y-2 md:flex-row justify-between items-start md:items-center">
                <div>
                    <Input
                        crossOrigin={"anonymous"}
                        className="!text-black"
                        label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex justify-center flex-col gap-y-2 sm:flex-row items-start sm:items-center gap-x-2">
                    <MyButton className="flex justify-center items-center bg-[#000000] gap-x-2" onClick={handleCategoryOpen}>
                        <FaPlus size={16} />
                        <span>Add Category</span>
                    </MyButton>
                    <MyButton className="flex justify-center items-center bg-[#000000] gap-x-2" onClick={handleSubCategoryOpen}>
                        <FaPlus size={16} />
                        <span>Add SubCategory</span>
                    </MyButton>
                    <Link to={"/admin/add-product"} className="w-auto h-auto">
                        <MyButton className="flex justify-center items-center bg-blue-700 gap-x-2">
                            <FaPlus size={16} />
                            <span>Add Product</span>
                        </MyButton>
                    </Link>
                </div>
            </div>
            <div className="w-full">
                <DataTable
                    // data={products.products || []}
                    data={filterProducts || []}
                    progressPending={loading}
                    progressComponent={<TableSkeleton />}
                    columns={columns({
                        onDelete: (_id: string) => {
                            setIsSelected(_id);
                            setIsDelete(true);
                        },
                    })}
                    customStyles={{
                        headRow: {
                            style: {
                                backgroundColor: "#000",
                                color: "#fff",
                                borderRadius: "10px",
                            },
                        },
                        headCells: {
                            style: {
                                fontSize: '14px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }
                        },
                        cells: {
                            style: {
                                fontWeight: '500'
                            }
                        }
                    }}
                    pagination
                    highlightOnHover
                />
            </div>
        </DashboardProvider>
    </>
};

export default DashboardProducts;
