import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const Home = ({hi}) => (
    <Layout>
        <h1>Hi! <Link href="/test">Go here</Link>/</h1>
        <p>On Safari, if you press the link and then the back button, nprogress gets stuck and freezes for a bit. WHYYY.</p>
    </Layout>
)

Home.getInitialProps = async ({ req, res, a }) => {
    // why are the cookies sometimes showing up as `[Object: null prototype] {}` on first render that
    // supposed to be server-side???
    console.log(a);
   // console.log(req.headers);
    //console.log(res.headers);
    return {
        hi: 'hi'
    }
}

export default Home;
