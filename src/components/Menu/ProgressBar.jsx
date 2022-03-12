import React from "react";

const ProgressBar = ({name, percentage}) => {
    const fillerStyles = {
        zIndex: '1000',
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: '#4DD599',
        borderRadius: 'inherit',
    }
    return (
        <>
            <div style={fillerStyles}>
            </div>

        </>


)

}
export default ProgressBar;