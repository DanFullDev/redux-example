import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h1>Redux toolkit example</h1>
      <ul>
        <li>User: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
};
