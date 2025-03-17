// import { FaStar } from "react-icons/fa";
import { ClientInterface } from "../../configs/clients";
import { IoTriangleSharp } from "react-icons/io5";

const ClientCard = ({
    name = "",
    description = "",
    image,
}: ClientInterface) => {
    return <>
        <div className="w-full flex flex-col justify-start items-start gap-y-3">
            <div className="h-max-[400px] h-[270px] sm:h-[250px] xl:h-[200px] px-4 sm:px-6 lg:px-8 py-4 rounded-lg bg-green-300 my-2 text-black flex flex-col justify-evenly items-center gap-y-2 w-full relative">
                <p className="font-medium text-center w-full">"{description}"</p>
                {/* <div>
                <div className="flex justify-center items-center gap-x-1">
                    {
                        Array(4).fill(0).map((_, index) => (
                            <FaStar key={index} size={16} className="text-yellow-600" />
                        ))
                    }
                </div>

                <div className="flex justify-center items-start text-center font-semibold">
                    <span>— {name}</span>
                </div>
            </div> */}
                <IoTriangleSharp size={30} className="text-green-300 rotate-180 absolute -bottom-[20px] left-[10%]" />
            </div>
            <div className="w-full flex justify-start px-4 items-center gap-x-4">
                <img src={image} alt="image" className="w-14 h-14 rounded-full" />
                <span className="font-medium text-[15px]">
                    {name}
                </span>
            </div>
        </div>
    </>
}

export default ClientCard;