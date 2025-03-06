import React from "react";
import { Outlet } from "react-router-dom";
import MiddlewareProvider from "../middleware/MiddlewareProvider";

// react lazy
const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const Products = React.lazy(() => import("../pages/products/Products"));

// auth
const Login = React.lazy(() => import("../pages/auth/login/Login"));

// Blogs
const Blogs = React.lazy(() => import("../pages/blogs/Blogs"));
const BlogDetails = React.lazy(() => import("../pages/blogs/BlogDetails"));

// gallery
const Gallery = React.lazy(() => import("../pages/gallery/Gallery"));

// terms
const PrivacyPolicy = React.lazy(() => import("../pages/privacy-policy/PrivacyPolicy"));
const TermsAndCondition = React.lazy(() => import("../pages/terms-and-condition/TermsAndCondition"));

// dashboard
const Dashboard = React.lazy(() => import("../admin/dashboard/Dashboard"));
const DashboardProducts = React.lazy(() => import("../admin/products/DashboardProducts"));
const AddProduct = React.lazy(() => import("../admin/products/AddProduct"));
const EditProduct = React.lazy(() => import("../admin/products/EditProduct"));

export interface pagesInterface {
    path?: string,
    element?: React.ReactNode,
    meta: {
        title?: string,
        description?: string,
    },
}

export interface pagesChildrenInterface {
    path?: string,
    element?: React.ReactNode,
    meta: {
        title?: string,
        description?: string,
    },
    children?: Array<pagesInterface>,
}

const pages: Array<pagesChildrenInterface> = [
    {
        path: '/',
        element: <Home />,
        meta: {
            title: 'Shri Bhumia Overseas',
            description: 'SHRI BHUMIA OVERSEAS'
        }
    },
    {
        path: '/about',
        element: <About />,
        meta: {
            title: 'About Us',
            description: 'Shri Bhumia Overseas - About Us'
        }
    },
    {
        path: '/contact',
        element: <Contact />,
        meta: {
            title: 'Contact Us',
            description: 'Shri Bhumia Overseas - Contact Us'
        }
    },
    {
        path: '/blogs',
        element: <Blogs />,
        meta: {
            title: 'Our Blogs',
            description: 'Shri Bhumia Overseas - Blogs'
        }
    },
    {
        path: '/blog-details',
        element: <BlogDetails />,
        meta: {
            title: 'Blog Details',
            description: 'Shri Bhumia Overseas - Blog Details'
        }
    },
    {
        path: '/products',
        element: <Products />,
        meta: {
            title: 'Products',
            description: 'Shri Bhumia Overseas - Products'
        }
    },
    {
        path: "/gallery",
        element: <Gallery />,
        meta: {
            title: 'Gallery',
            description: 'Gallery - Shri Bhumia Overseas',
        }
    },
    // auth
    {
        path: '/auth',
        element: <Outlet />,
        children: [
            {
                path: 'login',
                element: <Login />,
                meta: {
                    title: 'LogIn'
                }
            }
        ],
        meta: {
            title: ''
        }
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
        meta: {
            title: 'Privacy Policy'
        }
    },
    {
        path: '/terms-and-condition',
        element: <TermsAndCondition />,
        meta: {
            title: 'Privacy Police'
        }
    },
    // admin
    {
        path: '/admin',
        element: <MiddlewareProvider back="/auth/login" />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                meta: {
                    title: 'Dashboard - Shri bhumia'
                }
            },
            {
                path: 'products',
                element: <DashboardProducts />,
                meta: {
                    title: 'Products - Dashboard',
                }
            },
            {
                path: 'add-product',
                element: <AddProduct />,
                meta: {
                    title: 'Add Product',
                }
            },
            {
                path: 'edit-product',
                element: <EditProduct />,
                meta: {
                    title: 'Edit Product',
                }
            },
        ],
        meta: {
            title: 'Dashboard - Shri bhumia'
        }
    }
]

export default pages;