import {IComponent} from "../../types";

export default interface ITwoColumns extends IComponent {
    media: {
        media_details: {
            width: string
            height: string
        },
        source_url: string
    };
    attributes: {
        title: string;
        reverse: string;
        text: string;
        image: object;
        mediaId: number;
        mediaUrl: string;
    }
}