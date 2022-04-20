import "../style/components/_header.scss";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
    return (<Component {...pageProps} />);
}

export default MyApp;