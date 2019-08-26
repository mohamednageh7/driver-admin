// higher order component (HOC) => it is a component (HOC) that render othere component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>this is my {props.info}</p>
    </div>
);
const withAdminWarning = (WrappingComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>this is private message</p>}
            <WrappingComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (AuthenticatedComponent) => {
    return (props) => ( // this is my HOC 
        <div>
            {props.isAuthenticated ?
                <div>
                    <p>this is your profile</p>
                    <AuthenticatedComponent {...props} />

                </div> : <p>please log in first</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info= "this is my info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info= "this is my info" />, document.getElementById('app'));