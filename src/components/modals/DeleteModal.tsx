import { MdDelete } from "react-icons/md";
import MyModal from "./MyModal";
import MyButton from "../buttons/MyButton";

interface DeleteModalInterface {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    onDelete: (value: boolean) => void,
}

const DeleteModal = ({
    isOpen = false,
    setIsOpen,
    onDelete,
}: DeleteModalInterface) => {
    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Delete Product"
        >
            <div className="w-full flex flex-col justify-center px-8 py-4 items-center gap-y-6">
                <MdDelete size={80} />
                <p className="text-center text-black font-medium">Are you sure you want to delete this product? This action cannot be undone.</p>

                <div className="flex justify-end w-full items-center gap-x-2">
                    <MyButton
                        className="bg-gray-500"
                        onClick={() => setIsOpen(false)}
                    >Cancel</MyButton>
                    <MyButton
                        className="bg-red-700 text-white"
                        onClick={() => onDelete(true)}
                    >Delete</MyButton>
                </div>
            </div>
        </MyModal>
    </>
}

export default DeleteModal;