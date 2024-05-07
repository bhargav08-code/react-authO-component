import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLoadingLogin(true);
    setTimeout(() => {
      setIsLoadingLogin(false);
      loginWithRedirect();
    }, 5000);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {isAuthenticated ? (
            <>
              <h3 className="text-4xl font-bold mb-5">Hello {user.name}!</h3>
              <button
                onClick={(e) => logout()}
                className="btn btn-outline btn-error"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-bold">Hello There !</h1>
              <p className="py-6">
                The Auth0 Login Package is a versatile authentication solution
                designed to streamline the login process for applications while
                offering users multiple authentication options. Built on top of
                Auth0's powerful authentication platform, this package provides
                a seamless and secure authentication experience for both
                developers and end-users.
              </p>
              <button
                onClick={handleLoginClick}
                className="btn btn-outline btn-accent"
                disabled={isLoadingLogin} // Disable the button while loading
              >
                {isLoadingLogin ? (
                  <span className="loading loading-infinity loading-xl text-accent"></span>
                ) : (
                  "Login"
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
