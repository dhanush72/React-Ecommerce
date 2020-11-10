import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInOutPage from "./pages/sign-in-out/sign-in-out";
import { auth } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // open subscription
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // close subscription
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInOutPage} />
      </Switch>
    </div>
  );
}

export default App;
