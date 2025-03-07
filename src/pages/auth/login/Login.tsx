import { useForm } from "react-hook-form";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import MyButton from "../../../components/buttons/MyButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../configs/validations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { authLoginRedux } from "../../../redux/features/user";
import { useNavigate } from "react-router-dom";

interface loginInterface {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<loginInterface>({
        resolver: yupResolver<loginInterface>(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (e: loginInterface) => {
        // console.log(e)
        dispatch(authLoginRedux(e, () => {
            navigate('/admin/dashboard');
        }));
    }

    return <>
        <main className="w-full py-16 flex flex-col justify-center items-center">
            <div className="w-[95%] sm:w-[60%] md:w-[45%] lg:w-[40%] rounded-xl flex flex-col justify-start items-start gap-y-10 py-8 px-10 shadow-[0px_0px_2px_2px_#dbdbdb]">
                <h2 className="font-semibold text-[35px] text-[#111111]">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full justify-start items-start gap-y-6">
                    <EmailField
                        label="Email"
                        control={control}
                        name="email"
                        errors={errors}
                    />
                    <PasswordField
                        label="Password"
                        control={control}
                        name="password"
                        errors={errors}
                    />
                    <p className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:underline cursor-pointer">forget password</p>
                    <div className="flex justify-start items-center">
                        <MyButton type="submit" className="rounded-full py-2 px-8 text-[16px] bg-green-800">Log in</MyButton>
                    </div>
                </form>
            </div>
        </main>
    </>
}

export default Login;