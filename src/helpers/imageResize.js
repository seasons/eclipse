import qs from "querystring";
import { identity, pickBy } from "lodash";
export const IMAGE_ASPECT_RATIO = 1.25;
export const sizes = {
    initial: {
        w: 30,
        fit: "clip",
    },
    thumb: {
        w: 208,
        fit: "clip",
    },
    small: {
        w: 288,
        fit: "clip",
    },
    medium: {
        w: 372,
        fit: "clip",
    },
    large: {
        w: 560,
        fit: "clip",
    },
    xlarge: {
        w: 702,
        fit: "clip",
    },
    hero: {
        w: 2000,
        fit: "clip",
    },
};
export const imageResize = (url, sizeName, passedOptions = { fit: "clip" }) => {
    const removedParams = url.split("?")[0];
    const options = pickBy({
        fit: "clip",
        retina: true,
        ...passedOptions,
    }, identity);
    let params;
    const { ...remainingOptions } = options;
    if (sizeName) {
        const size = sizes[sizeName];
        params = pickBy({
            ...sizes[sizeName],
            ...(options.retina && size.w ? { w: size.w * 2 } : {}),
            ...(options.retina && size.h ? { h: size.h * 2 } : {}),
            ...remainingOptions,
        }, identity);
    }
    else {
        params = remainingOptions;
    }
    if (/seasons-images\./.test(url)) {
        return (removedParams.replace(`seasons-images.s3.amazonaws.com`, `seasons-s3.imgix.net`) +
            "?" +
            qs.stringify(params));
    }
    return (removedParams.replace(`seasons-images-staging.s3.amazonaws.com`, `seasons-s3-staging.imgix.net`) +
        "?" +
        qs.stringify(params));
};
