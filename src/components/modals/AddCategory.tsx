import { useForm } from "react-hook-form";
import InputField from "../fields/InputField";
import MyModal from "./MyModal";
import ImageField from "../fields/ImageField";

const AddCategory = () => {
    const {
        control,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            name: '',
            image: null,
        }
    });
    return <>
        <MyModal
            isOpen={true}
            setIsOpen={() => { }}
            title="Add Category"
            size="lg"
        >
            <div className="w-full px-6 py-4 grid grid-cols-2 gap-x-4 gap-y-6">
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
        </MyModal>
    </>
}

export default AddCategory;