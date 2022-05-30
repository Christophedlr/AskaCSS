/**
 * Modal window manager
 */
class Modal {
    document: Document;

    constructor(document: Document) {
        this.document = document;
        let buttons = document.querySelectorAll("button.modal, input[type=\"button\"].modal");

        for (let i = 0; i < buttons.length; i++) {
            let value = searchAttribute(buttons.item(i), "data-toggle");

            if (value !== null) {
                let element = document.querySelector<HTMLElement>(value);

                /**
                 * Manage click button to open a modal window
                 */
                buttons.item(i).addEventListener("click", function(event) {
                    if (element !== null) {
                        // @ts-ignore
                        element.style.display = "block";
                    }
                });

                /**
                 * Manage click outside a modal window for close
                 */
                document.addEventListener("click", function (event) {

                    if (event.target === element) {
                        // @ts-ignore
                        event.target.style.display = "None";
                    }
                });

                /**
                 * Manage click in modal window close button for close
                 */
                // @ts-ignore
                element.
                querySelector("button.close[data-toggle=\"close\"]").
                addEventListener("click", function(event) {
                    // @ts-ignore
                    element.style.display = "None";
                });
            }
        }
    }
}
