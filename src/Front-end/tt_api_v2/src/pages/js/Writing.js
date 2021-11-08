import React from 'react';
import ReactDOMServer from "react-dom/server";

export const Writing = ({
  lyricTitle,
  lyricParagraphId
}) => {

    return ReactDOMServer.renderToString(
        <div>
            <h1>{lyricTitle}</h1>
            <p id={lyricParagraphId}></p>
        </div>
    );
};