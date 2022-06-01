/**
 * Class for manage the Alert CSS component
 */
class Alert {
    /**
     * Constructor
     * @param {HTMLCollectionOf<Element>} elements
     */
    constructor(elements: HTMLCollectionOf<Element>) {
        Array.from(elements).forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault();

                if (element.parentNode !== null && element.parentNode.parentNode !== null) {
                    element.parentNode.parentNode.removeChild(element.parentNode);
                }
            });
        });
    }
}
