import React from "react"

const Bold = ({
    className = "",
    children,
}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return <span className={`font-medium ${className}`}>{children}</span>
}

export default Bold;