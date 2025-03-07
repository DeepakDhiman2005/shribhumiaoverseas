import { FaStar } from "react-icons/fa";
import { ClientInterface } from "../../configs/clients";

const ClientCard = ({
    name = "",
    description = "",
}: ClientInterface) => {
    return <>
        <div className="h-max-[400px] h-[350px] sm:h-auto lg:h-[380px] px-6 lg:px-8 py-4 rounded-lg bg-green-100 my-2 text-black flex flex-col justify-evenly items-center gap-y-2 w-full">
            <p className="italic font-medium text-center w-full">"{description}"</p>
            <div>
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
            </div>
        </div>
    </>
}

export default ClientCard;