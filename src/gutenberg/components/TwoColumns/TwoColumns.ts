import TwoColumnsEdit from "./TwoColumnsEdit";

export const TwoColumns = {
    apiVersion: 2,
    title: 'TwoColumns',
    category: 'grid',
    attributes: {
        reverse: {
            type: 'boolean',
            default: false,
        },
        title: {
            type: 'string',
            default: 'Some Title',
        },
        text: {
            type: 'string',
            default: 'Some text',
        },
        mediaId: {
            type: 'number',
            default: 0
        },
        mediaUrl: {
            type: 'string',
            default: ''
        }
    },
    edit: TwoColumnsEdit,
    save: () => null
}