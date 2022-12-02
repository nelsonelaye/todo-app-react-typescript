import { useEffect, useState, useMemo, useCallback } from "react";
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
type storageType = string | null;

const Home = (): JSX.Element => {
  const [todo, setTodo] = useState([]);
  const [complete, setComplete] = useState(false);

  const FetchData = useMemo(() => {
    let storageData = localStorage.getItem("todo");
    if (storageData == null) {
      return;
    } else if (storageData.length >= 1) {
      setTodo(JSON.parse(storageData));
      // console.log("Home todo", todo);
    }
  }, []);

  const DeleteData = useCallback(
    (index: number) => {
      let storageData = localStorage.getItem("todo");

      if (storageData == null) {
        return null;
      } else if (storageData.length >= 1) {
        let newStorageData: todoType[] = JSON.parse(storageData);

        console.log(newStorageData[index]);
        newStorageData.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(newStorageData));
        window.location.reload();
      }
    },
    [todo]
  );

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
          <ul>
            {todo?.map((prop: todoType, index) => (
              <li key={prop.task}>
                <div className={style["task_details"]}>
                  {/* {complete ? (
                    <div className={style["icon"]}>
                      <BiCheckDouble color="green" />
                    </div>
                  ) : (
                    <div className={style["icon"]}>
                      <BiCheck color="grey" />
                    </div>
                  )} */}
                  <input type="checkbox" />

                  <span> {prop.task}</span>
                </div>

                <div className={style["action_btn"]}>
                  <Link to={`/update/${index}`} className={style["link"]}>
                    <div className={style["icon"]}>
                      <TbEdit fontSize="20px" />
                    </div>
                  </Link>
                  <div className={style["icon"]}>
                    <MdDelete
                      color="red"
                      fontSize="20px"
                      onClick={() => {
                        DeleteData(index);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
