declare global {
    interface Window {
        wisehunterTheme: {
            url: string,
            title: string,
            version: string,
        },
        wisehunterApiNonce: {
            root: string,
            nonce: string,
        }
    }
}
export default global;