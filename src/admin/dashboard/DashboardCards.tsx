const DashboardCards = () => {
    const Card = ({
        title,
        number,
    }: {
        title?: string,
        number?: number,
    }) => {
        return <>
            <div className="flex flex-col bg-green-600 text-white px-6 py-4 rounded-lg justify-start items-start">
                <h2 className="font-medium text-[18px]">{title}</h2>
                <h3 className="font-semibold text-[40px]">{number}</h3>
            </div>
        </>
    }

    return <>
        <div className="grid grid-cols-4 gap-6">
            <Card
                title="Total Products"
                number={10}
            />
        </div>
    </>
}

export default DashboardCards;