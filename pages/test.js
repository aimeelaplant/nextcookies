import React from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

const Test = ({hi}) => (
    <Layout>
        <h1>Hi! <Link href="/">Go here</Link>/</h1>
        <p>On Safari, if you press the link and then the back button, nprogress gets stuck and freezes for a bit. WHYYY.</p>
    </Layout>)

Test.getInitialProps = async ({ req, res, a }) => {
    return {
        hi: 'hi'
    }
}

export default Test;
