import ContainerEdit from "./ContainerEdit";

export const Container = {
    apiVersion: 2,
    title: 'Container',
    category: 'grid',
    attributes: {
        fullWidth: {
            type: 'boolean',
            default: false,
        }
    },
    edit: ContainerEdit,
    save: () => null
}