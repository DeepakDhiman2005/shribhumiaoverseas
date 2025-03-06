import { Link, useLocation } from "react-router-dom";
import Categories from "../../configs/categories";

const ProductSidebar = () => {
    const { search } = useLocation();

    return <>
        <aside className="w-[20%] space-y-3 hidden sticky top-[50px] left-0 md:block">
            <h2 className="font-semibold text-[24px]">Products</h2>
            <div className="border border-solid border-gray-700 px-4 py-6 flex flex-col justify-start items-start gap-y-2">
                {
                    Categories.map((item, index) => (
                        <Link key={index} to={`/products?category=${item.category as string}`}>
                            <li className="cursor-pointer group"><span className={`${search.includes(item.category as string) ? "text-green-600" : "group-hover:text-green-500"} transition-all duration-300`}>{item.name}</span></li>
                        </Link>
                    ))
                }
            </div>
        </aside>
    </>
}

export default ProductSidebar;