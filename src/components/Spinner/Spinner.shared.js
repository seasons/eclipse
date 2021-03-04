/**
 * Returns width and height of spinner based on size
 * @param props
 */
export const getSize = (props) => {
    const base = { width: 25, height: 6 };
    switch (props.size) {
        case "small":
            return {
                width: base.width * 0.5,
                height: base.height * 0.5,
            };
        case "medium":
            return {
                width: base.width * 0.8,
                height: base.height * 0.8,
            };
        case "large":
            return {
                width: base.width,
                height: base.height,
            };
        default:
            return {
                width: base.width * 0.8,
                height: base.height * 0.8,
            };
    }
};
