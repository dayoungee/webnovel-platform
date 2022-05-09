import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const WebNovel = ({ Component }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>WebNovel</title>
        </Head>
        <Component />
    </>
);

WebNovel.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(WebNovel);
