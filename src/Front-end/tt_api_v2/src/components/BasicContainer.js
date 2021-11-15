import React from 'react';

export const BasicContainer = ({
    containerClass,
    children
}) => {

    return (
        <>
            <div className="container">
                <div className={containerClass}>
                    {children}
                </div>
            </div>
        </>
    );
};