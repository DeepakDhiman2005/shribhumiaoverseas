import MyButton from "../buttons/MyButton";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface BlogCardInterface {
    title?: string,
    date?: string,
    description?: string,
    image?: string,
    id?: string,
    limit?: number,
    titleLimit?: number,
}

const BlogCard = ({
    title = "",
    date = "",
    description = "",
    image = "",
    limit = 100,
    titleLimit = 25,
    id = "",
}: BlogCardInterface) => {
    return <>
        <div className="w-full flex flex-col justify-start items-start rounded-md overflow-hidden bg-white border border-solid border-gray-300 shadow-[0px_0px_3px_1px_#dbdbdb]">
            <div className="w-full h-[180px]">
                <img
                    // src={"/product-images/IMG-20250224-WA0001.jpg"}
                    src={image}
                    alt="image"
                    className="w-full h-full object-fill"
                />
            </div>
            <div className="flex flex-col px-3 py-2 justify-start items-start gap-y-2">
                <div className="flex flex-col justify-start w-full items-start">
                    <h2 className="font-semibold text-[22px] w-full">
                        {title.length > titleLimit ? title.substring(0, titleLimit) + "..." : title}
                    </h2>
                    <div className="text-[14px] flex justify-start items-center gap-x-2">
                        <FaRegCalendarAlt size={13} />
                        {/* Wednesday, June 14 */}
                        {date}
                    </div>
                </div>
                <div className="w-[10%] h-[2px] bg-green-500"></div>
                <p>
                    {description.length > limit ? description.substring(0, limit) + "..." : description}
                </p>
                <Link to={`/blog-details?blog=${id}`}>
                    <MyButton className="flex justify-center items-center gap-x-1 py-1 text-[14px] bg-green-800 px-4">
                        <span>View Blog</span>
                        <GoArrowUpRight size={18} />
                    </MyButton>
                </Link>
            </div>
        </div>
    </>
}

export default BlogCard;