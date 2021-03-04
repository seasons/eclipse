import React from "react";
export const Picture = ({ src, alt, imgRef, onLoad, }) => {
    return (React.createElement("picture", { style: { height: "100%" } },
        React.createElement("source", { type: "image/webp", srcSet: src + "&fm=webp&cs=srgb" }),
        React.createElement("source", { type: "image/jpeg", srcSet: src + "&fm=jpg" }),
        React.createElement("img", { src: src + "&fm=jpg", ref: imgRef, alt: alt, onLoad: onLoad })));
};
