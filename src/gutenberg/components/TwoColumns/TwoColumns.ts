import TwoColumnsEdit from "./TwoColumnsEdit";

export const TwoColumns = {
    apiVersion: 2,
    title: 'TwoColumns',
    category: 'grid',
    attributes: {
        flip: {
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
        image: {
            type: 'object',
            default: 'Some text',
        }
    },
    edit: TwoColumnsEdit,
    save: () => null
}