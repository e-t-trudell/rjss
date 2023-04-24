import * as React from 'react';
export default class WelcomeContent extends React.Component{
    render(){
        return(
            <div className="row justify-content-xs-center">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Welcome</h1>
                        <p>Login to see protected content</p>
                    </div>
                </div>
            </div>
        )
    }
}