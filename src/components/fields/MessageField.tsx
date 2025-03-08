import { Textarea } from "@material-tailwind/react";
import { Control, Controller, FieldErrors } from "react-hook-form";


export interface InputFieldProps {
    name: string;
    control: Control<any>;
    errors?: FieldErrors;
    label?: string;
}

const MessageField = ({ control, name, errors, label }: InputFieldProps) => {
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Textarea
                        color="black"
                        className="placeholder-shown:!border-t-black focus:!border-t-transparent !border-t-transparent"
                        labelProps={{ className: 'peer-placeholder-shown:before:!border-t-transparent peer-placeholder-shown:after:!border-t-transparent' }}
                        label={label}
                        value={field.value || ""} // ✅ Ensures default empty string to prevent uncontrolled input
                        onChange={(e) => field.onChange(e.target.value)} // ✅ Explicitly update field value
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default MessageField;
