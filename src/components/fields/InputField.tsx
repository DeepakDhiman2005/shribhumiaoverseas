import { Input } from "@material-tailwind/react";
import { Control, Controller, FieldErrors } from "react-hook-form";

export type InputTypeOptions = "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time";

export interface InputFieldProps {
    name: string;
    control: Control<any>;
    errors?: FieldErrors;
    label?: string;
    type?: InputTypeOptions;
}

const InputField = ({ control, name, errors, label, type = "text" }: InputFieldProps) => {
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field} // ✅ Ensures controlled value binding
                        crossOrigin="anonymous"
                        label={label}
                        type={type}
                        color="black"
                        className="!text-black placeholder-shown:!border-black focus:!border-t-transparent"
                        value={field.value || ""} // ✅ Ensures default empty string to prevent uncontrolled input
                        onChange={(e) => field.onChange(e.target.value)} // ✅ Explicitly update field value
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default InputField;
