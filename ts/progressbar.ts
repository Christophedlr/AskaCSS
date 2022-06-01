/**
 * Progressbar class for manage the progressbar component.
 * @param {HTMLCollectionOf<Element>} pbarNodes - The progressbar nodes.
 */
class Progressbar {
    private result: string = "";
    private value: string = "";
    private max: string = ""
    private percent: string = "";

    constructor(pbarNodes: HTMLCollectionOf<Element>) {
        for (let i = 0; i < pbarNodes.length; i++) {
            let pbarNode: Element = pbarNodes[i];

            // @ts-ignore
            this.value = pbarNode.attributes.getNamedItem("aria-value").value;

                if (pbarNode.attributes.getNamedItem("aria-max") != null) {
                   if (!this.value.endsWith("%")) {
                       // @ts-ignore
                       this.max = pbarNode.attributes.getNamedItem("aria-max").value;
                       this.percent = (( Number(this.value.slice(0, -1)) / Number(this.max.slice(0, -1)) ) * 100).toFixed(0).toString() + "%";
                       this.result = this.value;
                   } else {
                       this.result = this.value
                       this.percent = this.value
                   }
                }

            pbarNode.appendChild(document.createElement("div")).classList.add("indicator");
            // @ts-ignore
            pbarNode.childNodes[pbarNode.childNodes.length-1].innerText = this.result;
            // @ts-ignore
            pbarNode.childNodes[pbarNode.childNodes.length-1].style.width = this.percent;
        }
    }
}
