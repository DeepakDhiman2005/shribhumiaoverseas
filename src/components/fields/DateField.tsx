import { Controller, Control, FieldErrors } from "react-hook-form";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "../../styles/custom-form-field.scss";

export interface DateFieldProps {
    name: string;
    control: Control<any>;
    errors?: FieldErrors;
    label?: string;
}

const DateField = ({ control, name, errors, label }: DateFieldProps) => {
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            {label && <label className="text-gray-700 text-sm font-medium">{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <DatePicker
                        {...field}
                        showTime
                        className="w-full custom-date-field"
                        value={field.value ? dayjs(field.value) : null}
                        onChange={(_, dateString) => field.onChange(dateString)}
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default DateField;
