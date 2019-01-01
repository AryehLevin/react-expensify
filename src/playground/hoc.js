// higher order component (HOC) - a component that renders another component
// helps to reuse code 
// Render hijcacking 
// props manipulation
// abstract state
const Info = (props) => {
    <div>
        <h1> Info </h1>
        <p>This info is {props.info}</p>
    </div>
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAdmin && <p>This is private info. Please do not share!</p>}
          <WrappedComponent {...props} />
      </div>     
    );
};

// require authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAuthenticated ? 
          <WrappedComponent {...props} /> :
          <p>Please log in to view the info</p>}
      </div>     
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the detials"/>,document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={false} info="these are the detials"/>,document.getElementById('app'));