import { useForm } from "react-hook-form";
import InputField from "../fields/InputField";
import MyModal from "./MyModal";
import ImageField from "../fields/ImageField";
import MessageField from "../fields/MessageField";
import MyButton from "../buttons/MyButton";
import { CategoryInterface, SubCategoryInterface } from "../../interfaces/categoryInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { subCategorySchema } from "../../configs/validations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { editSubCategoryRedux, getCategoriesRedux } from "../../redux/features/category";
import { useEffect, useMemo } from "react";
import SelectField, { OptionInterface } from "../fields/SelectField";

const EditSubCategory = ({
    isOpen = false,
    data = null,
    setIsOpen,
}: {
    isOpen: boolean,
    data?: SubCategoryInterface | null,
    setIsOpen: (value: boolean) => void,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.category.categories);

    useEffect(() => {
        if (isOpen) {
            dispatch(getCategoriesRedux());
        }
    }, [isOpen]);

    const allCategories = useMemo<OptionInterface[]>(() => {
        return categories.map((item) => ({ label: item.name, value: item._id }));
    }, [categories]);


    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
        setValue,
    } = useForm<SubCategoryInterface>({
        resolver: yupResolver<SubCategoryInterface>(subCategorySchema),
        defaultValues: {
            name: '',
            image: null,
            description: '',
            category: '',
            _id: '',
        }
    });

    useEffect(() => {
        if (data) {
            setValue('name', data.name as string);
            setValue('description', data.description as string);
            if (data.category && typeof data.category === 'object' && '_id' in data.category) {
                setValue('category', (data.category as CategoryInterface)?._id as string);
            } else {
                setValue('category', data.category ?? ''); // Use nullish coalescing to handle undefined
            }
            setValue('image', data.image);
            setValue('_id', data._id);
        }
    }, [data]);

    const onSubmit = (event: SubCategoryInterface) => {
        // console.log(event);
        const formData = new FormData();
        formData.append('name', event.name as string);
        formData.append('image', event.image as File);
        formData.append('category', event.category as string);
        formData.append('description', event.description as string);
        formData.append('_id', event._id as string);
        dispatch(editSubCategoryRedux(formData, () => {
            reset();
            setIsOpen(false);
        }));
    }

    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Edit SubCategory"
            size="md"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-6 py-4 flex flex-col justify-start items-start gap-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-6">
                    <InputField
                        control={control}
                        errors={errors}
                        name="name"
                        label="Sub Category Name"
                    />

                    <SelectField
                        control={control}
                        name="category"
                        errors={errors}
                        options={[{ label: 'Select an category', value: '' }, ...allCategories]}
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

export default EditSubCategory;