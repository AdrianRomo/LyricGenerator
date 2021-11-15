import React from 'react';

export const CollapsedList_Item = ({
    itemId,
    itemTitle,
    itemParagraph,
    isExpanded
}) => {

    var collapsedClass;
    if(isExpanded == "true")
        collapsedClass= "collapse show"
    else
        collapsedClass= "collapse";

    return (
        <>
            <div className="accordion-item">
                <h3 className="mb-0 heading">
                    <a className="btn-block" data-toggle="collapse" href={"#" + itemId} role="button" aria-expanded={isExpanded} aria-controls={itemId}>
                        {itemTitle} <span className="icon" /></a>
                </h3>
                <div id={itemId} className={collapsedClass} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="body-text">
                        <p> {itemParagraph} </p>
                    </div>
                </div>
            </div> {/* .accordion-item */}
        </>
    );
};
