import React from 'react';
import Authentication from '../utils/authentication';

const Test = () => {
    let testauth = new Authentication();
    console.log(testauth.test());
    return (
        <div>
            Test
        </div>
    );
};

export default Test;