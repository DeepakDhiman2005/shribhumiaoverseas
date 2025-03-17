// import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

export interface TestimonialCardInterface {
    title?: string,
    content?: string,
    timing?: string,
    color?: string,
}

const TestimonialCard = ({
    title = '',
    content = "",
    timing = "",
    color = "",
}: TestimonialCardInterface) => {
    // const [isHover, setIsHover] = useState<boolean>(false);
    // const limit: number = 100;
    const Shape = () => {
        return (
            <svg
                viewBox="0 0 19 13"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-4 text-gray-900"
                fill="currentColor"
            >
                <path d="M0.965704 0.000125914H10.3736L19 5.15272e-05C19 5.15272e-05 16.2331 5.15665 10.3736 8.99489C6.68171 11.4132 3.12703 12.3741 1.00222 12.7541C0.488597 12.8459 0.227225 12.1436 0.617463 11.7973C2.03909 10.5355 3.88298 8.3072 3.88294 5.23718C3.88287 9.44134e-05 0.965704 0.000125914 0.965704 0.000125914Z"></path>
            </svg>
        );
    };

    return (
        <div className="w-full flex flex-col justify-start items-start gap-y-5 h-full"
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
        >
            <div className="bg-gray-900 rounded-md py-5 px-6 flex flex-col justify-start items-start gap-y-2 relative text-white">
                {/* <p className="text-[16px] italic">"{content.length > limit ? isHover ? content: content.substring(0, limit) + "..." : content}"</p> */}
                <p className="text-[16px] italic">"{content}"</p>

                <div className="flex justify-start items-center gap-x-1">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <TiStarFullOutline key={index} size={20} className="text-yellow-600" />
                        ))}
                </div>

                <div className="absolute -bottom-3 left-[10%]">
                    <Shape />
                </div>
            </div>
            <div className="flex justify-start items-start w-full gap-x-3">
                <div
                    className={`w-10 h-10 uppercase font-semibold text-white rounded-full text-[18px] text-center flex justify-center items-center ${color}`}
                >{title.charAt(0)}</div>
                <div className="flex flex-col justify-start items-start">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="font-[12px]">{timing}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
