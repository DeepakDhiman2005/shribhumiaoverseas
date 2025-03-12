import DashboardProvider from "../../providers/DashboardProvider";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Input } from "@material-tailwind/react";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import DeleteModal from "../../components/modals/DeleteModal";
import { blogInterface } from "../../interfaces/blogInterface";
import { deleteBlogRedux, getAllBlogsRedux } from "../../redux/features/blog";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import LoadImageRow from "./LoadImageRow";

interface StateInterface {
    loading?: boolean,
    isSelected?: blogInterface | null,
    isDeleted?: boolean,
}

const DashboardBlogs: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const blogs: Array<blogInterface> = useSelector((state: RootState) => state.blogs.blogs);
    const [state, setState] = useState<StateInterface>({
        loading: false,
        isSelected: null,
        isDeleted: false,
    });
    const manageState = (value: StateInterface) => setState({ ...state, ...value });

    const callApi = () => {
        manageState({ loading: true });
        dispatch(getAllBlogsRedux(() => {
            manageState({ loading: false });
        }));
    }

    useEffect(() => {
        callApi();
    }, []);

    const onDelete = (_id: string) => {
        dispatch(deleteBlogRedux(_id));
    }

    const columns: TableColumn<blogInterface>[] = [
        {
            name: 'Title',
            selector: row => row?.title || '-',
        },
        {
            name: 'Image',
            // selector: row => row?.image as string || '-',
            cell: (row) => (<LoadImageRow id={row?._id as string} />),
        },
        {
            name: 'Date',
            selector: row => row?.date as string || '-',
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="w-full flex justify-start items-center gap-x-2">
                    <Link to={`/admin/edit-blog?id=${row?._id as string}`}>
                        <Button className="rounded-md text-white py-2 px-3 bg-green-600">
                            <AiFillEdit size={18} />
                        </Button>
                    </Link>
                    <Button className="rounded-md text-white py-2 px-3 bg-red-700" onClick={() => manageState({ isDeleted: true, isSelected: row })}>
                        <MdDeleteOutline size={18} />
                    </Button>
                </div>
            )
        }
    ]

    return <>
        <DeleteModal
            isOpen={state.isDeleted as boolean}
            setIsOpen={() => manageState({ isDeleted: false })}
            onDelete={() => {
                manageState({ isDeleted: false });
                onDelete(state.isSelected?._id as string);
            }}
        />
        <DashboardProvider title="Blogs" className="space-y-2">
            <div className="w-full py-2 flex justify-between items-center">
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
                    data={blogs || []}
                    progressPending={state.loading as boolean}
                    progressComponent={<TableSkeleton />}
                    columns={columns}
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
