import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";
import SearchBar from "./Components/SearchBar";
function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasklist"))
  );
  const [update, setupdate] = useState({});
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(task));
  }, [task]);
  return (
    <>
      <Header />
      <SearchBar
        Task={task}
        SetTask={setTask}
        Update={update}
        SetUpdate={setupdate}
      />
      <ListItem
        Task={task}
        SetTask={setTask}
        Update={update}
        SetUpdate={setupdate}
      />
    </>
  );
}

export default App;
