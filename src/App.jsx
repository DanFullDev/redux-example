import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addUser(data));
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Email />
    </div>
  );
}

export default App;
