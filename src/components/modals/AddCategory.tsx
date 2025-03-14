import { useForm } from "react-hook-form";
import InputField from "../fields/InputField";
import MyModal from "./MyModal";
import ImageField from "../fields/ImageField";
import MessageField from "../fields/MessageField";
import MyButton from "../buttons/MyButton";
import { CategoryInterface } from "../../interfaces/categoryInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../configs/validations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addCategoryRedux } from "../../redux/features/category";

const AddCategory = ({
    isOpen = false,
    setIsOpen,
}:{
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm<CategoryInterface>({
        resolver: yupResolver<CategoryInterface>(categorySchema),
        defaultValues: {
            name: '',
            image: null,
            description: '',
        }
    });

    const onSubmit = (event: CategoryInterface) => {
        console.log(event);
        const formData = new FormData();
        formData.append('name', event.name as string);
        formData.append('image', event.image as File);
        formData.append('description', event.description as string);
        dispatch(addCategoryRedux(formData, () => {
            reset();
            setIsOpen(false);
        }));
    }

    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add Category"
            size="lg"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6 py-4 flex flex-col justify-start items-start gap-y-6">
                <div className="grid grid-cols-2 w-full gap-x-4 gap-y-6">
                    <InputField
                        control={control}
                        errors={errors}
                        name="name"
                        label="Category Name"
                    />

                    <ImageField
                        control={control}
                        name="image"
                        errors={errors}
                    />
                </div>
                <MessageField
                    control={control}
                    name="description"
                    errors={errors}
                    label="Description"
                />
                <div className="flex w-full justify-end items-center gap-x-2">
                    <MyButton
                        type="submit"
                    >Submit</MyButton>
                </div>
            </form>
        </MyModal>
    </>
}

export default AddCategory;