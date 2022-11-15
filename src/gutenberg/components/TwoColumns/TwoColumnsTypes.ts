import {IComponent} from "../../types";

export default interface IContainer extends IComponent {
    attributes: {
        fullWidth: boolean;
    }
}