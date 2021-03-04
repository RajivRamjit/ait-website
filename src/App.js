import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import Services from './Pages/Services/services.component';
import RemoteSupport from './Pages/Remote Suppot/remote-support.component';
import SubmitRequest from './Pages/Submit Request/submit-request.component';
import ContactPage from './Pages/Contact/contact.component';
import SignIn from './Pages/Sign-in/sign-in.component';
import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });

    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/services' component={Services} />
          <Route path='/remote-support' component={RemoteSupport} />
          <Route path='/request' component={SubmitRequest} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
