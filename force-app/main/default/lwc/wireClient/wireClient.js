import { LightningElement, wire } from 'lwc';
import { getWireService } from "c/wireService";

export default class Foo extends LightningElement {
    @wire(getWireService, { id: "abc111" }) bar1(foo) {
        console.log(foo);
    }
    @wire(getWireService, { id: "abc222", delay: 4000 }) bar2(foo) {
        console.log(foo);
    }

}