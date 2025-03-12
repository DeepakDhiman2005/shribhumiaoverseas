import DashboardProvider from "../../providers/DashboardProvider";
import MainCategoryTable from "./MainCategoryTable";
import SubCategoryTable from "./SubCategoryTable";

const Category = () => {
    return <>
        <DashboardProvider title="Category">
            <div className="flex flex-col justify-start items-start gap-y-6 mb-10">
                <MainCategoryTable />
                <SubCategoryTable />
            </div>
        </DashboardProvider>
    </>
}

export default Category;