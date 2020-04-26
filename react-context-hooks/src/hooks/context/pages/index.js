import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
