import { useDispatch } from "react-redux";
import DashboardProvider from "../../providers/DashboardProvider";
import DesktopBanners from "./DesktopBanners";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getAllBannersRedux } from "../../redux/features/banners";

const DashboardSettings = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllBannersRedux());
    }, []);

    return <>
        <DashboardProvider title="Settings">
            <DesktopBanners />
        </DashboardProvider>
    </>
}

export default DashboardSettings;