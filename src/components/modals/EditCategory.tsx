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
import { editCategoryRedux } from "../../redux/features/category";
import { useEffect } from "react";
import { RiEditLine } from "react-icons/ri";

const EditCategory = ({
    isOpen = false,
    data = null,
    setIsOpen,
}: {
    isOpen: boolean,
    data?: CategoryInterface | null,
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
        setValue,
    } = useForm<CategoryInterface>({
        resolver: yupResolver<CategoryInterface>(categorySchema),
        defaultValues: {
            name: data?.name || '',
            image: data?.image || null,
            description: data?.description || '',
            _id: data?._id || '',
        }
    });

    useEffect(() => {
        if (data) {
            setValue('name', data?.name as string);
            setValue('description', data?.description as string);
            setValue('image', data?.image);
            setValue('_id', data?._id as string);
        }
    }, [data]);

    const onSubmit = (event: CategoryInterface) => {
        console.log(event);
        const formData = new FormData();
        formData.append('name', event.name as string);
        formData.append('image', event.image as File);
        formData.append('description', event.description as string);
        formData.append('_id', event?._id as string);
        dispatch(editCategoryRedux(formData, () => {
            reset();
            setIsOpen(false);
        }));
    }

    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            // title="Edit Category"
            title={<div className="flex justify-center items-center gap-x-2">
                <RiEditLine size={18} />
                <span>Edit Category</span>
            </div>}
            size="md"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6 py-4 flex flex-col justify-start items-start gap-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-6">
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

export default EditCategory;