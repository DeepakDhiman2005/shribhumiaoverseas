// import { useForm } from "react-hook-form";
import DashboardProvider from "../../providers/DashboardProvider";

const AddBlog = () => {
    // const {
    //     control,
    //     formState: {
    //         errors,
    //     }
    // } = useForm({
    //     defaultValues: {

    //     }
    // });
    return <>
        <DashboardProvider title="Add Blog">
            <form className="w-full">

            </form>
        </DashboardProvider>
    </>
}

export default AddBlog;