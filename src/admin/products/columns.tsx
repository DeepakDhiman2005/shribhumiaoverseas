import { Button } from "@material-tailwind/react";
import { TableColumn } from "react-data-table-component";

// icons
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
// import Categories from "../../configs/categories";
import { Link } from "react-router-dom";
import { CategoryInterface, SubCategoryInterface } from "../../interfaces/categoryInterface";

// Define TypeScript interface for product data
export interface ProductRow {
    name?: string,
    category?: CategoryInterface,
    subCategory?: SubCategoryInterface,
    width?: string,
    height?: string,
    gusset?: string,
    _id?: string,
    image?: string,
}

// const findCategoryName = (category: string | null) => {
//     if (category || category !== "") {
//         return Categories.filter(item => item.category === category)[0]?.name;
//     }
//     return null;
// }

// Define columns with proper TypeScript typing
const columns = ({
    onDelete,
}: {
    onDelete: (_id: string) => void,
}): TableColumn<ProductRow>[] => [
        {
            name: "Name",
            selector: (row) => row.name || "-",
            wrap: true,
            sortable: true,
        },
        {
            name: "Category",
            // selector: (row) => findCategoryName(row.category as string) || "-",
            selector: row => row?.category?.name as string || '-',
            sortable: true,
            wrap: true,
        },
        {
            name: "Sub Category",
            selector: row => row?.subCategory?.name as string || '-',
            sortable: true,
            wrap: true,
        },
        {
            name: "Width",
            selector: (row) => row.width || "-",
            sortable: true,
            wrap: true,
        },
        {
            name: "Height",
            selector: (row) => row.height || "-",
            sortable: true,
            wrap: true,
        },
        {
            name: "Gusset",
            selector: (row) => row.gusset || "-",
            wrap: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="w-full flex justify-start items-center gap-x-2">
                    <Link to={`/admin/edit-product?id=${row?._id as string}`}>
                        <Button className="rounded-md text-white py-2 px-3 bg-green-600">
                            <AiFillEdit size={18} />
                        </Button>
                    </Link>
                    <Button className="rounded-md text-white py-2 px-3 bg-red-700" onClick={() => onDelete(row?._id as string)}>
                        <MdDeleteOutline size={18} />
                    </Button>
                </div>
            )
        }
    ];

export default columns;