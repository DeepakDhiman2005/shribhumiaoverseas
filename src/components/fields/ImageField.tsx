import React, { useRef, useState } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export interface ImageFieldProps {
    name: string; // Ensures only valid form keys are allowed
    control: Control<any>;
    errors?: FieldErrors;
    defaultValue?: string; // Default image URL
}

const ImageField = ({ name, control, errors, defaultValue }: ImageFieldProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [_, setFileName] = useState<string | null>(defaultValue ? "Existing Image" : null);
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <Controller
                name={name as string}
                control={control}
                render={({ field: { onChange, value } }) => {
                    const uploadImage = () => inputRef.current?.click();

                    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                        const file = event.target.files?.[0];
                        if (file) {
                            setFileName(file.name);
                            onChange(file); // Send File to form
                        }
                    };

                    const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        setFileName(null);
                        onChange(null); // Clear form value
                        if (inputRef.current) {
                            inputRef.current.value = "";
                        }
                    };

                    return (
                        <div
                            className="border border-solid border-black rounded-md w-full relative flex justify-start items-center gap-x-2 py-2 px-4 cursor-pointer"
                            onClick={uploadImage}
                        >
                            <FiUpload size={16} className="text-black" />
                            <h2 className="font-medium text-[14px] text-black">
                                {value instanceof File ? value.name : value || "Upload Image"}
                            </h2>
                            {value && (
                                <button
                                    className="rounded-full bg-gray-700 p-1 cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={removeImage}
                                >
                                    <RxCross2 size={12} className="text-white" />
                                </button>
                            )}
                            <input
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    );
                }}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};


export default ImageField;
