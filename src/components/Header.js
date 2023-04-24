import * as React from 'react';

export default function Header(props){
    return(
        <header className="App-header">
            <img src={props.logoSRC} className="App-logo" alt="logo"/>
            <h1 className="App-Title">{props.pageTitle}</h1>
        </header>
    )

}