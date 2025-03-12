import { useForm } from 'react-hook-form';
import DashboardProvider from "../../providers/DashboardProvider";
import ImageField from "../../components/fields/ImageField";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../configs/validations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { uploadProductRedux } from "../../redux/features/products";
import SelectField from "../../components/fields/SelectField";
// import Categories from "../../configs/categories";
import { AddProductInterface } from "./productInterface";
import InputField from '../../components/fields/InputField';
import { useEffect, useMemo } from 'react';
import { getCategoriesRedux, getSubCategoriesRedux } from '../../redux/features/category';

const AddProduct = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.category.categories);
    const subCategories = useSelector((state: RootState) => state.category.subCategories);

    const allCategories = useMemo(() => {
        return categories.map((item) => ({ label: item.name, value: item._id }));
    }, [categories]);

    const allSubCategories = useMemo(() => {
        return subCategories.map((item) => ({ label: item.name, value: item._id }));
    }, [subCategories]);

    useEffect(() => {
        dispatch(getCategoriesRedux());
        dispatch(getSubCategoriesRedux())
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AddProductInterface>({
        resolver: yupResolver<AddProductInterface>(productSchema),
        defaultValues: {
            name: '',
            category: '',
            subCategory: '',
            image: undefined,
            width: 0,
            height: 0,
            gusset: 0,
        }
    });

    const onSubmit = (e: AddProductInterface) => {
        console.log(e);
        const formData = new FormData();
        formData.append("name", e?.name || "");
        formData.append("category", e?.category || "");
        formData.append('subCategory', e?.subCategory || '');

        if (e?.image) {
            formData.append("image", e.image);
        }

        formData.append("width", String(e?.width || 0));
        formData.append("height", String(e?.height || 0));
        formData.append("gusset", String(e?.gusset || 0));

        dispatch(uploadProductRedux(formData, () => window.history.back()));
    };

    return (
        <DashboardProvider title="Add Product" backShow={true}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full gap-y-4">
                    <InputField
                        errors={errors}
                        control={control}
                        label="Product Name"
                        name='name'
                    />

                    <ImageField control={control} name="image" errors={errors} />

                    <SelectField
                        control={control}
                        name="category"
                        options={[{ label: 'Select a Category', value: '' }, ...allCategories]}
                        errors={errors}
                    />
                    <SelectField
                        control={control}
                        name="subCategory"
                        options={[{ label: 'Select a Category', value: '' }, ...allSubCategories]}
                        errors={errors}
                    />

                    <InputField
                        errors={errors}
                        control={control}
                        label="Width"
                        name='width'
                        type='number'
                    />

                    <InputField
                        errors={errors}
                        control={control}
                        label="Height"
                        name='height'
                        type='number'
                    />
                    <InputField
                        errors={errors}
                        control={control}
                        label="Gusset"
                        name='gusset'
                        type='number'
                    />
                </div>

                <div className="flex justify-start my-4 items-center">
                    <MyButton type="submit" className="bg-green-600 flex justify-start items-center gap-x-2">
                        <FaPlus size={14} />
                        <span>Add Product</span>
                    </MyButton>
                </div>
            </form>
        </DashboardProvider>
    );
};

export default AddProduct;
