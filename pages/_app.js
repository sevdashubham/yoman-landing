import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                        key="google-font-cabin"
                    />
                </Head>
                <Component {...pageProps} />

                <style global jsx>{`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
          }
        `}</style>
            </Container>
        );
    }
}
