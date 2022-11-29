import { useEffect, useState, useMemo } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import style from "./index.module.scss";
import { BiCheckDouble, BiCheck } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

type todoType = {
  task: string;
  date: string;
  startTime: string;
  dueTime: string;
};

const Home = (): JSX.Element => {
  const [todo, setTodo] = useState([]);

  const FetchData = useMemo(() => {
    let storageData = localStorage.getItem("todo");
    if (storageData == null) {
      return;
    } else if (storageData.length >= 1) {
      setTodo(JSON.parse(storageData));
      console.log(todo);
    }
  }, []);

  useEffect(() => {
    return FetchData;
  }, []);
  return (
    <>
      <Header />

      <main>
        <div className={style["hold"]}>
          <div className={style["heading"]}>
            <h1>Todo ({todo.length})</h1>
            <Link to="/add">
              <div className={style["add-btn"]}>
                <MdAdd color="#fff" />
              </div>
            </Link>
          </div>
          <ul className={style["todo_list"]}>
            {todo?.map((prop: todoType) => (
              <li key={prop.task}>
                <BiCheckDouble color="green" />
                {prop.task}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
