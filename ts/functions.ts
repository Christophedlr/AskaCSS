/**
 * Search an attribute value in Element
 * @param element
 * @param attribute
 * @return string|undefined
 */
function searchAttribute(element: Element, attribute: string): string | null {
    if (!element.hasAttribute(attribute)) {
        console.log("Attribute "+attribute+" not found in "+element.nodeName);

        return null;
    }

    return element.getAttribute(attribute);
}
