import { useDispatch } from "react-redux";
import "./App.css";
import { setName } from "./redux/reducers/reducerOne/actions";

function App() {
  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    const name = e.target.value;
    dispatch(setName(name));
  };
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="name" onChange={handleChangeName} />
      </form>
    </div>
  );
}

export default App;
