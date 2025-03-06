import { useForm } from 'react-hook-form';
import DashboardProvider from "../../providers/DashboardProvider";
import ImageField from "../../components/fields/ImageField";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../configs/validations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { uploadProductRedux } from "../../redux/features/products";
import SelectField from "../../components/fields/SelectField";
import Categories from "../../configs/categories";
import { AddProductInterface } from "./productInterface";
import InputField from '../../components/fields/InputField';

const AddProduct = () => {
    const dispatch: AppDispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
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

    const onSubmit = (e: AddProductInterface) => {
        console.log(e);
        const formData = new FormData();
        formData.append("name", e?.name || "");
        formData.append("category", e?.category || "");

        if (e?.image) {
            formData.append("image", e.image);
        }

        formData.append("width", String(e?.width || 0));
        formData.append("height", String(e?.height || 0));
        formData.append("gusset", String(e?.gusset || 0));

        dispatch(uploadProductRedux(formData, () => window.history.back()));
    };

    return (
        <DashboardProvider title="Add Product">
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
                        options={[{ label: 'Select a Category', value: '' }, ...Categories.map(({ name, category }) => ({ label: name as string, value: category as string }))]}
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
