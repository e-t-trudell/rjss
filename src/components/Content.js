import * as React from 'react';
import AuthContent from './AuthContent';
import WelcomeContent from './WelcomeContent';

export default class Content extends React.Component {
    render(){
        return (
            <>
                <WelcomeContent/>
                <AuthContent/>
            </>
        );
    }
}

