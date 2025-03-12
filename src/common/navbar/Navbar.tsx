"use client";
// import { IoIosCall } from 'react-icons/io';
// import { MdOutlineEmail } from "react-icons/md";
import NavSearch from './NavSearch';
import NavLink from './NavLink';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSidebar } from '../../redux/features/action';
import "./navbar.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import navLinkConfig from '../../configs/navLinkConfig';
// import MyButton from '../../components/buttons/MyButton';
// import { GrUserAdmin } from "react-icons/gr";
import { Link } from 'react-router-dom';
// import Categories from '../../configs/categories';
import MyButton from '../../components/buttons/MyButton';
import { Tooltip } from 'antd';
// import ProductMenu from './ProductMenu';
import { IoIosArrowDown } from 'react-icons/io';
import categories from '../../configs/myCategories';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);
    const [isShow, setIsShow] = useState(true);
    const dispatch = useDispatch();

    const onScrollHandleNavbar = () => {
        if (window.scrollY > 50) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    };

    const openSidebar = () => {
        dispatch(setSidebar(true));
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandleNavbar);
        return () => window.removeEventListener('scroll', onScrollHandleNavbar);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const navContactDetails = document.querySelector('#nav-contact-details');
            const searchBar = document.querySelector('#search-bar');
            const links = document.querySelectorAll('#nav-links > div');
            // console.log(navTopSectionDivs);
            const tl = gsap.timeline();
            tl.fromTo(navContactDetails, {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: "power2.inOut",
            });
            tl.fromTo(searchBar, {
                x: 200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: "power2.inOut",
            });
            links.forEach((link) => {
                tl.fromTo(link, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.2,
                    ease: "power1.inOut"
                });
            })
        }, navRef);
        return () => ctx.revert();
    }, []);

    // const products = [
    //     { name: 'shopping bags', category: 'shopping-bags' },
    //     { name: 'tote bags', category: 'tote-bags' },
    //     { name: 'promotional bags', category: 'promotional-bags' },
    //     { name: 'wine bottle bags', category: 'wine-bottle-bags' },
    // ]

    const LinksReturn = () => {
        return <>
            {
                navLinkConfig.map((item, index) => (
                    !item.menuShow ?<div key={index}>
                        {
                            item.menuShow ? <>
                                {/* <Menu allowHover placement='bottom'>
                                    <MenuHandler>
                                        <div>
                                            <NavLink text={item.name} link={null} className={!isShow ? "!text-gray-900" : ''} />
                                        </div>
                                    </MenuHandler>
                                    <MenuList className='p-2 h-max w-[90%] overflow-y-auto'>
                                        <ProductMenu />
                                    </MenuList>
                                </Menu> */}
                            </> : <>
                                <Link to={item.link as string}>
                                    <NavLink text={item.name} link={item.link} className={`font-medium ${!isShow ? "!text-gray-900" : ''}`} />
                                </Link>
                            </>
                        }
                    </div>: null
                ))
            }
        </>
    }

    return (
        <nav
            ref={navRef}
            className={`w-full flex flex-col justify-center shadow-sm items-center transition-all overflow-hidden duration-500 ease-in-out ${!isShow ? 'fixed top-0 left-0 z-50 bg-white/45 backdrop-blur-sm' : 'sticky top-0 left-0 z-50 translate-y-0 opacity-100 bg-white'}`}
        >
            {/* Top Contact Section */}
            <section className={`border-b border-solid border-b-gray-300 transition-all duration-500 ease-in-out ${!isShow ? 'opacity-0 h-0 overflow-hidden' : 'hidden md:flex opacity-100 h-auto py-1.5'} flex-col md:flex-row justify-end px-12 items-center w-full bg-green-700 text-white`} id='nav-top-section'>
                <div className='block md:hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:text-green-500' onClick={openSidebar}>
                    <RxHamburgerMenu size={24} />
                </div>
                <div className='hidden md:flex justify-end items-center gap-x-12'>
                    <div className='flex justify-center items-center gap-x-6' id='nav-links'>
                        <LinksReturn />
                    </div>
                </div>
            </section>

            {/* Main Navbar */}
            <section className={`flex flex-col justify-center items-center ${!isShow ? "" : "border-b border-solid border-b-gray-300"} w-full gap-y-4`}>
                {/* <div className={`justify-end ${!isShow ? 'opacity-0 h-0 overflow-hidden' : 'flex opacity-100 h-auto'} transition-all duration-500 ease-in-out items-center w-3/4`}>
                    <NavSearch />
                </div> */}
                <div className='flex justify-around flex-row w-full items-center'>
                    <div className='flex justify-center items-center gap-x-1 sm:gap-x-2'>
                        <div className='w-[60px] mix-blend-multiply'>
                            <img src="/logo.png" alt="logo" className='w-full h-full rounded-full' />
                        </div>
                        <h2 className='font-semibold text-green-600 block py-2 text-[18px]'>Shri Bhumia Overseas</h2>
                    </div>
                    {
                        !isShow ? <>
                            <section className={`!text-gray-900`} id='nav-top-section'>
                                <div className='md:hidden flex justify-center items-center gap-x-4'>
                                    <div className='cursor-pointer transition-all duration-300 hover:scale-105 hover:text-green-500' onClick={openSidebar}>
                                        <RxHamburgerMenu size={24} />
                                    </div>
                                    <Tooltip title="Open Admin Panel" placement='bottom' className="-mb-1.5">
                                        <Link to={"/admin/dashboard"}>
                                            <button className='cursor-pointer'>
                                                <RxAvatar size={30} />
                                            </button>
                                        </Link>
                                    </Tooltip>
                                </div>
                                <div className='hidden md:flex justify-end items-center gap-x-12'>
                                    <div className='flex justify-center items-center gap-x-6' id='nav-links'>
                                        <LinksReturn />
                                    </div>
                                </div>
                            </section>
                        </> : <>
                            <div className='hidden md:flex justify-center flex-col gap-y-4 sm:flex-row items-center gap-x-2'>
                                <NavSearch />
                            </div>
                            <div className='flex justify-center items-center gap-x-4'>
                                <Link to={"/contact"}>
                                    <MyButton className='bg-green-700 hidden md:block animate-rotateLR hover:animate-none'>
                                        Get a Quote
                                    </MyButton>
                                </Link>
                                <div className='block md:hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:text-green-500' onClick={openSidebar}>
                                    <RxHamburgerMenu size={24} />
                                </div>
                                <Tooltip title="Open Admin Panel" placement='bottom' className="-mb-1.5">
                                    <Link to={"/admin/dashboard"}>
                                        <button className='cursor-pointer'>
                                            <RxAvatar size={30} />
                                        </button>
                                    </Link>
                                </Tooltip>
                            </div>
                        </>
                    }
                </div>
            </section>

            <section className={`w-full hidden md:flex justify-center items-center gap-x-10 ${!isShow ? "pb-2 -mt-2" : "py-1.5"} border-b border-solid border-b-gray-300`}>
                {
                    categories.map((item, index) => (
                        <div key={index}>
                            {
                                item?.subCategories && item?.subCategories?.length > 0 ? <>
                                    <Menu
                                        allowHover
                                        placement='bottom'
                                        animate={{
                                            mount: { opacity: 1, transform: "translateY(0px) ", transition: "all 300ms ease-in-out" },
                                            unmount: { opacity: 0, transform: "translateY(30px)", transition: "all 300ms ease-in-out" },
                                        }}
                                    >
                                        <MenuHandler>
                                            <h2 className='cursor-pointer hover:text-green-700 transition-all duration-300 font-medium flex justify-center items-center gap-x-2'>
                                                {item.category}
                                                <IoIosArrowDown size={15} />
                                            </h2>
                                        </MenuHandler>
                                        <MenuList className='p-2 max-h-[300px] w-[20%] overflow-y-scroll'>
                                            {
                                                item.subCategories.map((it, i) => (
                                                    <MenuItem key={i} className='p-0 rounded-md my-0.5 group'>
                                                        <Link to={`/products?category=${item.category.toLowerCase().split(' ').join('-')}&subcategory=${it.toLowerCase().split(' ').join("-")}`} className='w-full py-1.5 group-hover:text-green-700 transition-all duration-300 px-2 block'>{it}</Link>
                                                    </MenuItem>
                                                ))
                                            }
                                        </MenuList>
                                    </Menu>
                                </> : <>
                                    <Link to={`/products?category=${item.category.toLowerCase().split(' ').join('-')}`} >
                                        <h2 className='cursor-pointer hover:text-green-700 transition-all duration-300 font-medium flex justify-center items-center gap-x-2'>
                                            {item.category}
                                        </h2>
                                    </Link>
                                </>
                            }
                        </div>
                    ))
                }
            </section>
        </nav>
    );
};

export default Navbar;
