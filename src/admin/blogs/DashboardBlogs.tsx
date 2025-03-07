import DashboardProvider from "../../providers/DashboardProvider";
import DataTable from "react-data-table-component";
import columns from "./columns";
import { Input } from "@material-tailwind/react";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductRedux, getAllProductsRedux, ProductsInterface } from "../../redux/features/products";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import DeleteModal from "../../components/modals/DeleteModal";

const DashboardBlogs: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const products: ProductsInterface = useSelector((state: RootState) => state.products.products);
    const [isSelected, setIsSelected] = useState<string>('');
    const [isDelete, setIsDelete] = useState<boolean>(false);

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
        <DashboardProvider title="Blogs" className="space-y-2">
            <div className="w-full py-2 px-3 flex justify-between items-center">
                <div>
                    <Input
                        crossOrigin={"anonymous"}
                        label="Search"
                    />
                </div>
                <Link to={"/admin/add-blog"} className="w-auto h-auto">
                    <MyButton className="flex justify-center items-center bg-blue-700 gap-x-2">
                        <FaPlus size={16} />
                        <span>Add Blog</span>
                    </MyButton>
                </Link>
            </div>
            <div className="w-full">
                <DataTable
                    data={products.products || []}
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
                                fontSize: '15px',
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

export default DashboardBlogs;
