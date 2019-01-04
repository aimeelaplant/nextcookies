import React from 'react';

const Home = ({hi}) => (
    <h1>Hi! ${hi}</h1>
)

Home.getInitialProps = async ({ req }) => {
    // why are the cookies sometimes showing up as `[Object: null prototype] {}` on first render that
    // supposed to be server-side???
    console.log(req.cookies);
    return {
        hi: 'hi'
    }
}

export default Home;
