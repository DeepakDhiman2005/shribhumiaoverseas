import { Select } from "antd";
import { Control, Controller, FieldErrors } from "react-hook-form";
import "../../styles/custom-form-field.scss";

export interface OptionInterface {
    value: string | undefined;
    label: string;
}

export interface SelectFieldProps {
    name: string;
    control: Control<any>;
    options: OptionInterface[];
    errors?: FieldErrors; // ✅ Accepts the entire errors object
}

const SelectField: React.FC<SelectFieldProps> = ({ name, control, options = [], errors }) => {
    const errorMessage = errors?.[name]?.message as string | undefined; // ✅ Dynamically extract the error

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full  h-full">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        showSearch
                        placeholder="Select an Option"
                        onChange={(value) => field.onChange(value)}
                        options={options}
                        filterOption={(input, option) =>
                            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                        }
                        style={{ width: "100%" }}
                        dropdownStyle={{
                            zIndex: 10000,
                        }}
                        className={`custom-select-field ${errorMessage ? "border-red-600" : ""}`} // ✅ Add red border if error exists
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>} {/* ✅ Display error dynamically */}
        </div>
    );
};

export default SelectField;
