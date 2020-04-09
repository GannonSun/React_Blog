import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const MainLayout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header />
            <div className="contentDiv">
                {props.children}
            </div>
            <div className="footerDiv">
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;