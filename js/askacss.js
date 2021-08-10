/** Global JS functions*/

/**
 * Search and return a value of an selected attribute
 * @param node
 * @param attributeName
 * @returns {string}
 */
function searchAttributeValue(node, attributeName) {
    if (!Node.prototype.isPrototypeOf(node)) {
        console.log("node is not an Node");
        return "";
    }

    for (let i = 0; i < node.attributes.length; i++) {
        if (node.attributes[i].name == attributeName) {
            return node.attributes[i].value;
        }
    }
}

/** Alert JS*/
function alertdel(event) {
    event.target.parentNode.removeEventListener("click", alertdel);
    event.target.parentNode.remove();
}

let alerts = document.getElementsByClassName("alert-close");

for (let i = 0; i < alerts.length; i++) {
    alerts[i].addEventListener("click", alertdel);
}

/** Modal JS*/
/**
 * Window modal system
 */
class Modal {
    constructor(modalNode) {
        this.modal = modalNode;
        this.modalsButton = document.querySelectorAll("button.modal");
        const self = this;

        this.open();
        this.close();
    }

    /**
     * Search button for open a modal
     */
    open() {
        for (let i = 0; i < this.modalsButton.length; i++) {
            let value = searchAttributeValue(this.modalsButton[i], "data-toggle");

            if (value !== "undefined") {
                this.modalsButton[i].addEventListener("click", function(event){
                    let value = searchAttributeValue(event.target, "data-toggle");

                    if (value !== "undefined") {
                        document.querySelector(value).style.display = "block";
                    }
                });
            }
        }
    }

    /**
     * Close modal if click outside of modal or in close header button
     */
    close() {
        this.modal.addEventListener("click", function (event) {
            if (event.target === self.modal) {
                event.target.style.display = "none";
            }
        })

        let button_close = this.modal.querySelector("button.close[data-toggle=close]");
        button_close.addEventListener("click", function(event) {
            self.modal.style.display = "none";
        })
    }
}

modals = document.querySelectorAll("div.modal");
for (let i = 0; i < modals.length; i++) {
    new Modal(modals[i]);
}

/** Progressbar class*/
class Progressbar {
    constructor(pbarNode) {
        const value = pbarNode.attributes.getNamedItem("aria-value").value;
        let result = value.toString();

        if (!value.endsWith("%")) {
            if (pbarNode.attributes.getNamedItem("aria-max")) {
                let max = pbarNode.attributes.getNamedItem("aria-max").value;
                result = ((value/max)*100).toFixed(0).toString()+'%';
            }
        }

        if (pbarNode.childNodes.length < 1) {
            //pbarNode.innerHTML = '<div class="indicator">'+result+'</div>';
            pbarNode.appendChild(document.createElement('div'));
            pbarNode.childNodes[0].classList.add('indicator');
        } else {
            console.log(pbarNode.childNodes);
            pbarNode.appendChild(document.createElement('div'));
            pbarNode.childNodes[pbarNode.childNodes.length-1].classList.add('indicator');
        }

        pbarNode.childNodes[pbarNode.childNodes.length-1].style.width = result;
        pbarNode.childNodes[pbarNode.childNodes.length-1].innerText = result;
    }
}

progressbars = document.querySelectorAll(".progressbar");
for (let i = 0; i < progressbars.length; i++) {
    new Progressbar(progressbars[i]);
}
