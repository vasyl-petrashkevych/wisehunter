import {IComponent} from "../../types";

export default interface ITwoColumns extends IComponent {
    attributes: {
        title: string;
        flip: string;
        text: string;
        image: object;
    }
}