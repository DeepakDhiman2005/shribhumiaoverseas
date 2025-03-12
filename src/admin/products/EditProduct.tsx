import { useForm } from 'react-hook-form';
import DashboardProvider from "../../providers/DashboardProvider";
import ImageField from "../../components/fields/ImageField";
import MyButton from "../../components/buttons/MyButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../configs/validations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductDetails, updateProductRedux } from "../../redux/features/products";
import SelectField from "../../components/fields/SelectField";
import { AddProductInterface } from "./productInterface";
import InputField from '../../components/fields/InputField';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiEdit3 } from "react-icons/fi";

const EditProduct = () => {
    const [searchParams] = useSearchParams();
    let search = searchParams.get("id");

    const dispatch: AppDispatch = useDispatch();
    const details = useSelector<RootState>(state => state.products.product) as AddProductInterface;
    // console.log(details);

    const categories = useSelector((state: RootState) => state.category.categories);
    const subCategories = useSelector((state: RootState) => state.category.subCategories);

    const allCategories = useMemo(() => {
        return categories.map((item) => ({ label: item.name, value: item._id }));
    }, [categories]);

    const allSubCategories = useMemo(() => {
        return subCategories.map((item) => ({ label: item.name, value: item._id }));
    }, [subCategories]);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<AddProductInterface>({
        resolver: yupResolver<AddProductInterface>(productSchema),
        defaultValues: {
            name: '',
            category: '',
            image: undefined,
            width: 0,
            height: 0,
            gusset: 0,
        }
    });

    useEffect(() => {
        setValue('name', details?.name || '');
        setValue('category', details?.category || '');
        setValue('height', details?.height || 0);
        setValue('width', details?.width || 0);
        setValue('gusset', details?.gusset || 0);
        setValue('image', details?.image || '');
        setValue('subCategory', details?.subCategory || '');
    }, [details]);

    useEffect(() => {
        if (search && search !== "") {
            dispatch(getProductDetails(search));
        }
    }, [searchParams]);

    const onSubmit = (e: AddProductInterface) => {
        console.log(e);
        const formData = new FormData();
        formData.append("name", e?.name || "");
        formData.append("category", e?.category || "");
        formData.append("subCategory", e?.subCategory || "");

        if (e?.image) {
            formData.append("image", e.image);
        }

        formData.append("width", String(e?.width || 0));
        formData.append("height", String(e?.height || 0));
        formData.append("gusset", String(e?.gusset || 0));
        formData.append('id', search as string);

        dispatch(updateProductRedux(formData, () => window.history.back()));
    };

    return (
        <DashboardProvider backShow={true} title="Edit Product">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full gap-y-4">
                    <InputField
                        errors={errors}
                        control={control}
                        label="Product Name"
                        name='name'
                    />

                    <ImageField control={control} name="image" errors={errors} />
                    <div className='w-full h-full'>
                        <SelectField
                            control={control}
                            name="category"
                            options={[{ label: 'Select a Category', value: '' }, ...allCategories]}
                            errors={errors}
                        />
                    </div>
                    
                    <div className='w-full h-full'>
                        <SelectField
                            control={control}
                            name="subCategory"
                            options={[{ label: 'Select a SubCategory', value: '' }, ...allSubCategories]}
                            errors={errors}
                        />
                    </div>

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
                        <FiEdit3 size={14} />
                        <span>Edit Product</span>
                    </MyButton>
                </div>
            </form>
        </DashboardProvider>
    );
};

export default EditProduct;
