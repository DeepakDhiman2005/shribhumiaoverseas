// import { MdDelete } from "react-icons/md";
import MyButton from "../buttons/MyButton";
import { Dialog } from "@material-tailwind/react";

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
    const handleClose = () => setIsOpen(false);
    return <>
        <Dialog
            open={isOpen}
            handler={handleClose}
            size="xs"
        >
            <div className="w-full flex flex-col justify-center px-8 py-4 items-center gap-y-6">
                <p className="text-[#000000] font-medium text-[18px] text-center w-3/4">
                    Are you sure item will be deleted?
                </p>
                <div className="flex justify-center w-full items-center gap-x-2">
                    <MyButton
                        className="bg-blue-700 rounded-sm"
                        onClick={() => setIsOpen(false)}
                    >Cancel</MyButton>
                    <MyButton
                        className="bg-red-700 text-white rounded-sm"
                        onClick={() => onDelete(true)}
                    >Yes, delete it!</MyButton>
                </div>
            </div>
        </Dialog>
    </>
}

export default DeleteModal;