import { Flex, Sans } from "@/elements";
import { color } from "@/helpers";
import { TrackSchema, useTracking } from "@/helpers/track";
import React from "react";
export const ReadMore = React.memo(({ content, maxChars, textColor, readMoreExpanded, setReadMoreExpanded, }) => {
    const tracking = useTracking();
    const isAlreadyExpanded = readMoreExpanded || content?.length <= maxChars;
    const root = (React.createElement(Sans, { size: "4", color: textColor ? textColor : color("black50") }, content));
    return isAlreadyExpanded ? (root) : (React.createElement(Flex, null,
        React.createElement(Sans, { size: "4" }, truncate({
            root,
            maxChars,
            onExpand: () => {
                setReadMoreExpanded(true);
                tracking.trackEvent({
                    actionName: TrackSchema.ActionNames.ReadMoreTapped,
                    actionType: TrackSchema.ActionTypes.Tap,
                });
            },
        }))));
});
/**
 * In-order traverses the shallowly-rendered markdown returned from SimpleMarkdown's parser
 * keeping track of how many characters have been seen. When it has seen enough, it stops
 * traversing and adds a 'read more' button to the highest text node at that part of the tree.
 */
function truncate({ root, maxChars, onExpand, }) {
    // keep track of how many characters we have seen
    let offset = 0;
    // keep track of how many text nodes deep we are
    let textDepth = 0;
    function traverse(node) {
        if (offset === maxChars) {
            return null;
        }
        if (Array.isArray(node)) {
            const result = [];
            for (const child of node) {
                const truncated = traverse(child);
                if (truncated) {
                    result.push(truncated);
                }
                if (offset === maxChars) {
                    return result;
                }
            }
            return result;
        }
        if (React.isValidElement(node)) {
            if (node.type === Sans) {
                textDepth += 1;
            }
            const children = React.Children.toArray(node.props.children);
            const truncatedChildren = traverse(children);
            if (node.type === Sans) {
                if (textDepth === 1 && maxChars === offset) {
                    truncatedChildren.push(React.createElement("span", null,
                        "... ",
                        React.createElement("span", { onClick: onExpand, style: {
                                display: "inline",
                                cursor: "pointer",
                                color: color("black100"),
                            } }, "Read\u00A0more")));
                }
                textDepth -= 1;
            }
            return React.cloneElement(node, null, ...truncatedChildren);
        }
        if (node === null ||
            typeof node === "boolean" ||
            typeof node === "undefined") {
            return "";
        }
        let text = node.toString();
        if (text.length > maxChars - offset) {
            text = text.slice(0, maxChars - offset);
        }
        offset += text.length;
        return text;
    }
    return traverse(root);
}
