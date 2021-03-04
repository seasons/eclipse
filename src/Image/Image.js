import React from "react";
export const Image = ({ src, alt, imgRef, onLoad, ...props }) => {
    const href = window?.location?.href;
    const isStaging = href?.includes("https://staging.") ||
        href?.includes("http://localhost:3000");
    let prefix;
    if (src.includes("seasons-s3.imgix.net") ||
        src.includes("seasons-s3-staging.imgix.net")) {
        prefix = "";
    }
    else if (isStaging) {
        prefix = "https://flare-web-staging.imgix.net";
    }
    else {
        prefix = "https://flare-web.imgix.net";
    }
    return (React.createElement("picture", Object.assign({}, props),
        React.createElement("source", { type: "image/webp", srcSet: prefix + src + "&fm=webp" }),
        React.createElement("source", { type: "image/jpeg", srcSet: prefix + src + "&fm=jpg" }),
        React.createElement("img", { src: prefix + src + "&fm=jpg", ref: imgRef, alt: alt, onLoad: onLoad })));
};
