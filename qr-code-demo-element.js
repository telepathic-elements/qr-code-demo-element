import {TelepathicElement} from "../telepathic-element/telepathic-element.js";

export default class QrCodeDemoElement extends TelepathicElement{
    constructor(){
        super();//This is a sub element, disable shadowdom
        this.qrdata = "Hello QR";
    }

    static get observedAttributes() {
        return ['qrdata'];
    }

    init(){
        console.log(`${this.constructor.name} Initialized!`);
    }
    onReady(){
        console.log(`${this.constructor.name} Ready!`);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
    }

}