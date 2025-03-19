const AboutHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return <h2 className={`text-green-600 font-semibold text-[30px] ${className}`}>{children}</h2>
}

export default AboutHeading; 