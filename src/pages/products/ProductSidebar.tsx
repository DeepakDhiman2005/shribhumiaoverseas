// import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import categories from "../../configs/myCategories";
// import { IoIosArrowForward } from "react-icons/io";
// import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { Link, useSearchParams } from "react-router-dom";
// import Categories from "../../configs/categories";

const ProductSidebar = () => {
    // const { search } = useLocation();
    const [query] = useSearchParams();
    const category = useMemo(() => (query.get('category')), [query]);
    const subCategory = useMemo(() => (query.get('subcategory')), [query]);

    return <>
        <aside className="w-[20%] hidden sticky top-[100px] left-0 md:block">
            <h2 className="font-medium text-[22px] bg-green-700 text-white text-center py-2">Categories</h2>
            <div className="border border-solid border-gray-700 px-2 py-2 h-[450px] overflow-y-scroll flex flex-col justify-start items-start gap-y-2">
                {/* {
                    Categories.map((item, index) => (
                        <Link key={index} to={`/products?category=${item.category as string}`}>
                            <li className="cursor-pointer group"><span className={`${search.includes(item.category as string) ? "text-green-600" : "group-hover:text-green-500"} transition-all duration-300`}>{item.name}</span></li>
                        </Link>
                    ))
                } */}
                {
                    categories.filter(item => item.category.split(' ').join('-').toLowerCase() === category).map((item, index) => (
                        <div key={index} className="cursor-pointer hover:text-green-700 transition-all duration-300 w-full">
                            {
                                item?.subCategories && item?.subCategories?.length > 0 ?
                                    // <Menu allowHover placement="right-end">
                                    //     <MenuHandler>
                                    //         <div className="flex w-full justify-between items-center">
                                    //             <h2>{item.category}</h2>
                                    //             <IoIosArrowForward size={16} />
                                    //         </div>
                                    //     </MenuHandler>
                                    //     <MenuList className="max-h-[350px] w-[20%] p-1">
                                    //         {
                                    //             item.subCategories?.map((it, i) => (
                                    //                 <Link key={i} to={`/products?category=${item.category.toLowerCase().split(' ').join('-')}&subcategory=${it.toLowerCase().split(' ').join("-")}`} className="outline-none">
                                    //                     <h2 className="hover:bg-gray-300 outline-none w-full rounded-md py-1 px-2 cursor-pointer text-gray-900">{it}</h2>
                                    //                 </Link>
                                    //             ))
                                    //         }
                                    //     </MenuList>
                                    // </Menu>
                                    item.subCategories?.map((it, i) => (
                                        <Link key={i} to={`/products?category=${item.category.toLowerCase().split(' ').join('-')}&subcategory=${it.toLowerCase().split(' ').join("-")}`} className="outline-none">
                                            <h2 className={`${it.toLowerCase().split(' ').join("-") === subCategory ? "bg-green-600 text-white": "hover:bg-gray-300"} outline-none w-full rounded-md py-1 px-2 cursor-pointer text-gray-900`}>{it}</h2>
                                        </Link>
                                    ))
                                    :
                                    <Link to={`/products?category=${item.category.toLowerCase().split(' ').join('-')}`} className={`outline-none`}>
                                        <h2 className={`px-2 py-1 rounded-md ${item.category.toLowerCase().split(' ').join('-') === category ? "bg-green-600 text-white": ""}`}>{item.category}</h2>
                                    </Link>
                            }
                        </div>
                    ))
                }
            </div>
        </aside>
    </>
}

export default ProductSidebar;