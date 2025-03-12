import * as yup from 'yup';

// admin
export const loginSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
})
export const productSchema = yup.object().shape({
    name: yup.string().required("Product name is required"),
    category: yup.string().required("Category is required"),
    // subCategory: yup.string().required("Sub Category is required"),
    subCategory: yup.string(),
    image: yup.mixed<File>().nullable().required("Image is required"),
    width: yup.number().typeError("Width must be a number").positive("Width must be positive").required("Width is required"),
    height: yup.number().typeError("Height must be a number").positive("Height must be positive").required("Height is required"),
    gusset: yup.number().typeError("Gusset must be a number").positive("Gusset must be positive").required("Gusset is required"),
});

export const categorySchema = yup.object().shape({
    name: yup.string().required('Category name is required'),
    image: yup.mixed<File>().nullable().required("Image is required"),
    description: yup.string(),
    _id: yup.string(),
})

export const subCategorySchema = yup.object().shape({
    name: yup.string().required('Sub Category name is required'),
    category: yup.string().required('Category name is required'),
    image: yup.mixed<File>().nullable().required("Image is required"),
    description: yup.string(),
    _id: yup.string(),
});

export const blogSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    image: yup.mixed<File>().nullable().required('Image is required'),
    date: yup.string(),
    _id: yup.string(),
})