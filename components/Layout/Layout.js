import React, { Fragment } from 'react';
import Head from 'next/head';

const style = `#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #000;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #000, 0 0 5px #000;
  opacity: 1.0;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}`;

const Layout = ({ children, router }) => (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>${style}</style>
      </Head>
      <div className="app">
        {children}
      </div>
    </Fragment>
  );
  
export default Layout;
  