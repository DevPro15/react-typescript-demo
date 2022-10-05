import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //Future Value
  const [user, setUser] = useState<AuthUser | null>(null);

  // Type Assertion
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "hacker",
      email: "hacker@hacker.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User Name is {user?.name}</h2>
      <h2>User Email is{user?.email}</h2>
    </div>
  );
};
