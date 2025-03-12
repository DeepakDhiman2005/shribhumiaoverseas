import { Editor } from "@tinymce/tinymce-react";
import { Control, Controller, FieldErrors } from "react-hook-form";

export interface EditorFieldProps {
    name: string;
    control: Control<any>;
    errors?: FieldErrors;
}

const EditorField = ({ control, name, errors }: EditorFieldProps) => {
    const VITE_TINY_EDITOR_KEY = import.meta.env.VITE_TINY_EDITOR_KEY;
    const errorMessage = errors?.[name]?.message as string | undefined;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <div className="w-full">
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Editor
                            apiKey={VITE_TINY_EDITOR_KEY}
                            value={field.value || ""} // Bind value from form
                            onEditorChange={(content: string) => field.onChange(content)} // Sync with form state
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "advlist", "autolink", "link", "image", "lists", "charmap",
                                    "hr", "anchor", "searchreplace", "wordcount", "code",
                                    "fullscreen", "insertdatetime", "media", "nonbreaking",
                                    "table", "template", "help", "textcolor"
                                ],
                                toolbar:
                                    "undo redo | formatselect | fontsizeselect | " +
                                    "bold italic forecolor backcolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "link anchor image media | code fullscreen | help",
                                fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt 48pt",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                        />
                    )}
                />
            </div>

            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default EditorField;
