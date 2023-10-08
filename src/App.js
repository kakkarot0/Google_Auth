import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Auth0-Demo</h2>
        <div className="user">
          {isAuthenticated && <h3>Hi there, {user.name}</h3>}
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
      </header>
      <main>
        {isAuthenticated ? (
          <h3>You're now logged in!</h3>
        ) : (
          <h3>You're not logged in!</h3>
        )}
      </main>
    </div>
  );
}

export default App;