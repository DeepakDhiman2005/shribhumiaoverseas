import { useForm } from "react-hook-form";
import DashboardProvider from "../../providers/DashboardProvider";
import InputField from "../../components/fields/InputField";
import ImageField from "../../components/fields/ImageField";
import EditorField from "../../components/fields/EditorField";
import MyButton from "../../components/buttons/MyButton";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getBlogDetailsRedux, updateBlogRedux } from "../../redux/features/blog";
import { yupResolver } from "@hookform/resolvers/yup";
import { blogSchema } from "../../configs/validations";
import { blogInterface } from "../../interfaces/blogInterface";
import { useSearchParams } from "react-router-dom";
import DateField from "../../components/fields/DateField";


const EditBlog: React.FC = () => {
    const [uploading, setUploading] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const blogDetails = useSelector((state: RootState) => state.blogs.blogDetails);
    const [query] = useSearchParams();

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
    } = useForm<blogInterface>({
        resolver: yupResolver<blogInterface>(blogSchema),
        defaultValues: {
            title: "",
            description: "",
            image: null,
            date: '',
            _id: '',
        },
    });

    useEffect(() => {
        let id = query.get('id');
        if (id && id !== '') {
            dispatch(getBlogDetailsRedux(id));
        }
    }, [query]);

    useEffect(() => {
        if (blogDetails) {
            setValue('title', blogDetails?.title as string);
            setValue('description', blogDetails.description as string);
            setValue('date', blogDetails.date as string);
            setValue('_id', blogDetails._id as string);
            setValue('image', blogDetails.image as string);
        }
    }, [blogDetails]);

    const onSubmit = (e: blogInterface) => {
        const formData = new FormData();
        formData.append('title', e.title as string);
        formData.append('description', e.description as string);
        formData.append('date', e.date as string);
        formData.append('_id', e._id as string);
        formData.append('image', e.image as File);

        setUploading(true);
        dispatch(updateBlogRedux(formData, () => {
            setUploading(false);
            window.history.back();
        }));
    }

    return (
        <DashboardProvider title="Edit Blog" backShow={true}>
            <div className="w-full flex flex-col justify-start mb-3 items-start gap-y-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 items-center justify-center gap-y-2">
                    <InputField
                        control={control}
                        name="title"
                        label="Title"
                        errors={errors}
                    />
                    <ImageField
                        control={control}
                        name="image"
                        errors={errors}
                    />
                    <DateField
                        name="date"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div className="w-full">
                    <EditorField
                        control={control}
                        name="description"
                        errors={errors}
                    />
                </div>
                <div className="w-full flex justify-end gap-x-2 items-center">
                    <MyButton className="bg-gray-800 uppercase" onClick={() => reset()}>Reset</MyButton>
                    <MyButton className="bg-green-700 flex justify-center items-center gap-x-2 uppercase" onClick={handleSubmit(onSubmit)}>
                        {
                            uploading ? <Spinner className="w-4 h-4" /> : null
                        }
                        <span>Update</span>
                    </MyButton>
                </div>
            </div>
        </DashboardProvider>
    );
};

export default EditBlog;
