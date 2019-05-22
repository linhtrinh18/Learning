import React from 'react';
import { connect }  from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    // state = { isSignedIn: null }
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '460453499273-hfk4sctvo8rqrs204dppuf9uhvqk7mjj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignIn: this.auth.isSignedIn.get()})
                // this.onAuthChange()
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }
    
    onAuthChange = isSignedIn => {
        console.log("OnAuthChange")
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    
    onSignInClick = () => {
        this.auth.signIn()
    }
    
    onSignOutClick = () => {
        this.auth.signOut()
    }
    
    renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
        console.log('Linh', this.props.isSignedIn)
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
        console.log('Linh', this.props.isSignedIn)    
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
    
    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log('STATE', state)
  return { isSignedIn: state.auth.isSignedIn}
}



export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth)


// import React from 'react';
// import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions';

// class GoogleAuth extends React.Component {
//   componentDidMount() {
//     window.gapi.load('client:auth2', () => {
//       window.gapi.client
//         .init({
//           clientId:
//             '460453499273-hfk4sctvo8rqrs204dppuf9uhvqk7mjj.apps.googleusercontent.com',
//           scope: 'email'
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();

//           this.onAuthChange(this.auth.isSignedIn.get());
//           this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   onAuthChange = isSignedIn => {
//     if (isSignedIn) {
//       this.props.signIn(this.auth.currentUser.get().getId());
//     } else {
//       this.props.signOut();
//     }
//   };

//   onSignInClick = () => {
//     this.auth.signIn();
//   };

//   onSignOutClick = () => {
//     this.auth.signOut();
//   };

//   renderAuthButton() {
//     if (this.props.isSignedIn === null) {
//       return null;
//     } else if (this.props.isSignedIn) {
//       return (
//         <button onClick={this.onSignOutClick} className="ui red google button">
//           <i className="google icon" />
//           Sign Out
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={this.onSignInClick} className="ui red google button">
//           <i className="google icon" />
//           Sign In with Google
//         </button>
//       );
//     }
//   }

//   render() {
//     return <div>{this.renderAuthButton()}</div>;
//   }
// }

// const mapStateToProps = state => {
//   return { isSignedIn: state.auth.isSignedIn };
// };

// export default connect(
//   mapStateToProps,
//   { signIn, signOut }
// )(GoogleAuth);
