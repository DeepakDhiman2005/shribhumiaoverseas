import React, { useEffect } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    MenuHandler,
    MenuList,
    Menu,
    MenuItem,
} from "@material-tailwind/react";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaListUl, FaRegDotCircle } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";

import { useDispatch, useSelector } from 'react-redux';
// import { setAction } from '@/redux/features/action';
import { setSidebar } from '../../redux/features/action';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import navLinkConfig from '../../configs/navLinkConfig';
import { RootState } from '../../redux/store';
// import Categories from '../../configs/categories';
import categories from '../../configs/myCategories';
import NavSearch from '../navbar/NavSearch';
import MyButton from '../../components/buttons/MyButton';

const Sidebar = () => {
    const sidebar = useSelector((state: RootState) => state.action.sidebar);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [search] = useSearchParams();
    const navigate = useNavigate()
    const [open, setOpen] = React.useState<number>(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    const closeSidebar = () => dispatch(setSidebar(false));

    useEffect(() => {
        closeSidebar();
    }, [pathname, search]);

    return (
        <Card className={`h-screen rounded-none p-4 shadow-xl shadow-blue-gray-900/5 fixed top-0 left-0 z-50 transition-all duration-500 overflow-hidden ${sidebar ? "w-full px-auto" : "w-0 px-0"}`}>
            <div className="mb-2 p-2 w-full flex justify-between items-center">
                <Typography variant="h5" color="blue-gray">
                    Shri Bhumia
                </Typography>
                <button onClick={closeSidebar}>
                    <RxCross2 size={22} />
                </button>
            </div>
            <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2 justify-center items-center w-full'>
                <div className='flex justify-center flex-col gap-y-4 sm:flex-row items-center gap-x-2'>
                    <NavSearch />
                </div>
                <Link to={"/contact"}>
                    <MyButton className='bg-green-700'>
                        Get a Quote
                    </MyButton>
                </Link>
            </div>
            <List>
                {
                    navLinkConfig.map((item, index) => (
                        <div key={index}>
                            {
                                item.menuShow ? <>
                                    <Accordion
                                        open={open === 2}
                                        icon={
                                            <IoIosArrowDown
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                            />
                                        }
                                    >
                                        <ListItem className="p-0" selected={open === 2}>
                                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                                <div className="mr-auto font-normal flex justify-start items-center">
                                                    <ListItemPrefix>
                                                        <AiOutlineProduct className="h-5 w-5" />
                                                    </ListItemPrefix>
                                                    <span className="mr-auto font-normal text-[17px]">{item.name}</span> {/* ✅ Use <span> instead of <Typography> */}
                                                </div>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 h-[160px] overflow-y-scroll">
                                            <List className="p-0">
                                                {item.menu ? categories.map((it, index) => (
                                                    <ListItem key={index} className="capitalize p-0">
                                                        <div className='flex justify-start w-full h-full items-center px-4 gap-x-2'>
                                                            <FaRegDotCircle size={12} />
                                                            {
                                                                it.subCategories && it.subCategories.length > 0 ?
                                                                    <Menu allowHover placement='bottom-start'>
                                                                        <MenuHandler>
                                                                            <span className='w-full block py-2'>{it.category}</span>
                                                                        </MenuHandler>
                                                                        <MenuList className='max-h-[300px]'>
                                                                            {it.subCategories.map((itl, i) => (
                                                                                <MenuItem key={i} className='p-0 w-full rounded-md my-0.5 group'>
                                                                                    <Link to={`/products?category=${it.category.toLowerCase().split(' ').join('-')}&subcategory=${itl.toLowerCase().split(' ').join("-")}`} className='w-full py-1.5 group-hover:text-green-700 transition-all duration-300 px-2 block'>{itl}</Link>
                                                                                </MenuItem>
                                                                            ))
                                                                            }
                                                                        </MenuList>
                                                                    </Menu> : <Link to={`/products?category=${it.category.toLowerCase().split(' ').join('-')}`} className='block w-full py-2'>
                                                                        <span>{it.category}</span>
                                                                    </Link>
                                                            }
                                                        </div>
                                                    </ListItem>
                                                )) : null}
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                </> : <>
                                    <ListItem onClick={() => navigate(item.link as string)}>
                                        <ListItemPrefix>
                                            {
                                                item.name === 'Home' ?
                                                    <GoHomeFill className="h-5 w-5" /> :
                                                    item.name === 'About Us' ?
                                                        <FaListUl className="h-5 w-5" /> :
                                                        item.name === 'Blogs' ?
                                                            <FaBlog className="h-5 w-5" /> :
                                                            item.name === 'Gallery' ?
                                                                <GrGallery className="h-5 w-5" /> :
                                                                item.name === 'Contact Us' ?
                                                                    <IoCallOutline className="h-5 w-5" /> :
                                                                    null
                                            }
                                        </ListItemPrefix>
                                        <span className="mr-auto font-normal">{item.name}</span> {/* ✅ Use <span> instead of <Typography> */}
                                    </ListItem>
                                </>
                            }
                        </div>
                    ))
                }
            </List>
        </Card>
    );
}

export default Sidebar;
