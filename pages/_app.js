import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => NProgress.start());

    Router.events.on('routeChangeComplete', (url) => {
      NProgress.done();
    });
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete');
    Router.events.off('routeChangeStart');
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
