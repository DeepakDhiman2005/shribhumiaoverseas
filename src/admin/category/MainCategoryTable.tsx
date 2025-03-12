import DataTable, { TableColumn } from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { getCategoriesRedux } from "../../redux/features/category";
import { CategoryInterface } from "../../interfaces/categoryInterface";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { Tooltip } from "antd";
import AddCategory from "../../components/modals/AddCategory";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import { MdOutlineEdit } from "react-icons/md";
// import DeleteModal from "../../components/modals/DeleteModal";
import EditCategory from "../../components/modals/EditCategory";
import { GrRefresh } from "react-icons/gr";
import LoadImage from "./LoadImage";
import CategoryViewModal from "../../components/modals/CategoryViewModal";

interface stateInterface {
    loading?: boolean,
    isOpen?: boolean | undefined,
    isEdit?: boolean,
    isSelected?: CategoryInterface | null,
    isDelete?: boolean,
    isView?: boolean,
}

const MainCategoryTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.category.categories);

    // state
    const [myState, setMyState] = useState<stateInterface>({
        isOpen: false,
        isEdit: false,
        isSelected: null,
        loading: false,
        isDelete: false,
        isView: false,
    });
    const manageState = (data: stateInterface) => {
        setMyState({ ...myState, ...data });
    }

    // effect
    useEffect(() => { if (myState.loading && categories.length > 0) { manageState({ loading: false }) } }, [categories]);

    const refresh = () => {
        manageState({ loading: true });
        dispatch(getCategoriesRedux());
    }

    useEffect(() => {
        refresh();
    }, []);

    // function

    const columns: TableColumn<CategoryInterface>[] = [
        {
            name: 'Name',
            selector: row => row?.name || '-',
        },
        {
            name: "Banner Image",
            cell: (row) => (
                <LoadImage id={row?._id as string} />
            )
        },
        {
            name: 'Description',
            selector: row => row?.description ? row?.description?.length > 100 ? row?.description.substring(0, 100) + "..." : row?.description : '-',
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="flex justify-center items-center gap-x-2">
                    <MyButton
                        className="bg-green-700 text-white rounded-lg p-2"
                        title={"Edit"}
                        onClick={() => manageState({ isEdit: true, isSelected: row })}
                    >
                        <MdOutlineEdit size={16} />
                    </MyButton>
                    <MyButton
                        className="bg-blue-700 text-white rounded-lg p-2"
                        title="View"
                        onClick={() => manageState({ isView: true, isSelected: row })}
                    >
                        <FaRegEye size={16} />
                    </MyButton>
                    {/* <MyButton
                        className="bg-red-700 text-white rounded-lg p-2"
                        onClick={() => manageState({ isDelete: true, isSelected: row })}
                    >
                        <MdDelete size={16} />
                    </MyButton> */}
                </div>
            )
        }
    ]

    return <>
        <AddCategory
            isOpen={myState.isOpen as boolean}
            setIsOpen={() => manageState({ isOpen: false })}
        />
        <CategoryViewModal
            isOpen={myState.isView as boolean}
            data={myState.isSelected}
            setIsOpen={() => manageState({ isView: false })}
        />
        {/* <DeleteModal
            title={`Delete Category: ${myState.isSelected?.name || ''}`}
            isOpen={myState.isDelete as boolean}
            setIsOpen={() => manageState({ isDelete: false, isSelected: null })}
            onDelete={() => {
                let selected = myState.isSelected;
                // console.log(selected);
                dispatch(deleteCategoryRedux(selected?._id as string, () => manageState({ isDelete: false, isSelected: null })));
            }}
        /> */}
        <EditCategory
            isOpen={myState.isEdit as boolean}
            data={myState.isSelected}
            setIsOpen={() => manageState({ isEdit: false, isSelected: null })}
        />
        <div className="w-full border flex flex-col justify-start items-start gap-y-3 border-solid border-gray-400 rounded-md bg-white py-3 px-4 shadow-[0px_0px_1px_2px_#dbdbdb]">
            <div className="w-full flex justify-between items-center">
                <h2 className="font-semibold text-[18px]">Categories</h2>
                <div className="flex justify-center items-center gap-x-3">
                    <Tooltip title="Refresh" placement="topRight">
                        <div className="w-auto h-auto">
                            <MyButton
                                className="bg-gray-300 text-[#000000] w-8 h-8 rounded-full flex justify-center items-center p-0"
                                onClick={refresh}
                            >
                                <GrRefresh size={14} />
                            </MyButton>
                        </div>
                    </Tooltip>
                    <Tooltip title="Add Category" placement="topRight">
                        <div className="w-auto h-auto">
                            <MyButton
                                className="bg-gray-300 text-[#000000] w-8 h-8 rounded-full flex justify-center items-center p-0"
                                onClick={() => manageState({ isOpen: true })}
                            >
                                <FaPlus size={14} />
                            </MyButton>
                        </div>
                    </Tooltip>
                </div>
            </div>
            <div className="w-full">
                <DataTable
                    data={categories || []}
                    columns={columns}
                    progressPending={myState.loading as boolean}
                    progressComponent={<TableSkeleton />}
                    pagination
                    customStyles={{
                        table: {
                            style: {
                                borderRadius: '6px',
                                overflow: 'hidden'
                            }
                        },
                        headCells: {
                            style: {
                                backgroundColor: '#bdbdbd',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }
                        }
                    }}
                />
            </div>
        </div>
    </>
}

export default MainCategoryTable;