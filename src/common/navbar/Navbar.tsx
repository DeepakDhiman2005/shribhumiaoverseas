"use client";
import { IoIosCall } from 'react-icons/io';
// import { MdOutlineEmail } from "react-icons/md";
import NavSearch from './NavSearch';
import NavLink from './NavLink';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { RxHamburgerMenu } from "react-icons/rx";
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
import Categories from '../../configs/categories';

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

    return (
        <nav
            ref={navRef}
            className={`w-full flex flex-col justify-center shadow-sm items-center transition-all overflow-hidden duration-500 ease-in-out ${!isShow ? 'fixed top-0 left-0 z-50 bg-white/45 backdrop-blur-sm' : 'sticky top-0 left-0 z-50 translate-y-0 opacity-100 bg-white'}`}
        >
            {/* Top Contact Section */}
            <section className={`border-b border-solid border-b-gray-300 transition-all duration-500 ease-in-out ${!isShow ? 'opacity-0 h-0 overflow-hidden' : 'flex opacity-100 h-auto py-[1px]'} flex-col md:flex-row justify-center px-4 items-center w-full bg-green-700 text-white`} id='nav-top-section'>
                <div className="flex justify-center md:justify-start flex-col sm:flex-row items-center py-2 text-[14px] w-full md:w-3/4 gap-x-2" id='nav-contact-details'>
                    <div className="flex justify-center items-center gap-x-1">
                        <IoIosCall size={16} />
                        {/* <h2>+91 9891396603</h2> */}
                        <h2>+91-9891396603,</h2>
                        <h2>+91-7678698790</h2>
                    </div>
                    {/* <div className='h-[16px] w-[1px] hidden sm:block bg-gray-200'></div>
                    <div className='flex justify-center items-center gap-x-1'>
                        <MdOutlineEmail size={16} />
                        <h2>support@gmail.com</h2>
                    </div> */}
                </div>
                <div className='flex justify-center flex-col gap-y-4 sm:flex-row items-center gap-x-2'>
                    <NavSearch />
                    {/* <Link to={"/admin/dashboard"}>
                        <MyButton className='w-[150px] flex justify-center items-center gap-x-2 bg-green-900 rounded-full hover:scale-95 transition-all duration-300 active:scale-90'>
                            <GrUserAdmin size={16} />
                            <span>Admin Login</span>
                        </MyButton>
                    </Link> */}
                </div>
            </section>

            {/* Main Navbar */}
            <section className={`flex flex-col justify-center items-center ${!isShow ? "" : "border-b border-solid border-b-gray-300"} w-full gap-y-4`}>
                {/* <div className={`justify-end ${!isShow ? 'opacity-0 h-0 overflow-hidden' : 'flex opacity-100 h-auto'} transition-all duration-500 ease-in-out items-center w-3/4`}>
                    <NavSearch />
                </div> */}
                <div className='flex justify-around w-full items-center'>
                    <div className='w-[45px] mix-blend-multiply'>
                        <img src="/logo.png" alt="logo" className='w-full h-full rounded-full' />
                    </div>
                    <div className='block md:hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:text-green-500' onClick={openSidebar}>
                        <RxHamburgerMenu size={24} />
                    </div>
                    <div className='hidden md:flex justify-end items-center gap-x-12'>
                        <div className='flex justify-center items-center gap-x-6' id='nav-links'>
                            {
                                navLinkConfig.map((item, index) => (
                                    <div key={index}>
                                        {
                                            item.menuShow ? <>
                                                <Menu allowHover>
                                                    <MenuHandler>
                                                        <div>
                                                            <NavLink text={item.name} link={null} />
                                                        </div>
                                                    </MenuHandler>
                                                    <MenuList className='p-2 max-h-60 overflow-y-auto'>
                                                        {
                                                            Categories ? Categories.map(({
                                                                name,
                                                                category
                                                            }, index) => (
                                                                <MenuItem key={index} className='p-0'>
                                                                    <Link to={`/products?category=${category}`} className='outline-none py-2 w-full block px-2 capitalize'>
                                                                        {name}
                                                                    </Link>
                                                                </MenuItem>
                                                            )): null
                                                        }
                                                    </MenuList>
                                                </Menu>
                                            </> : <>
                                                <Link to={item.link as string}>
                                                    <NavLink text={item.name} link={item.link} />
                                                </Link>
                                            </>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
