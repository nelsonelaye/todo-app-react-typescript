import React, { useState, useCallback, useMemo, useEffect } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import style from "../AddTodo/index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
// import { FetchData } from "../../hooks/customHook/FetchData/FetchData";

//using mapped type here
// type preParams = {
//   [key: string]: string;
// };

type obj = {
  task: string;
  date: string;
  startTime: string;
  dueTime: string;
};

const Index = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState<Array<obj>>();
  const [data, setData] = useState({
    task: "",
    date: "",
    startTime: "",
    dueTime: "",
  });

  const { id } = useParams();

  //Get task to be updated and set it as current state
  const FetchData = useMemo(() => {
    let storageData = localStorage.getItem("todo");
    if (storageData == null) {
      return;
    } else if (storageData.length >= 1) {
      if (id == undefined) {
        navigate("*");
      } else {
        let index = parseInt(id);
        setData(JSON.parse(storageData)[index]);
      }
    }
  }, []);

  //   const FetchTodo = useMemo(() => {
  //     let storageData = localStorage.getItem("todo");
  //     if (storageData == null) {

  //     }else if (storageData.length >= 1){
  //         const storageData: Array<obj> = JSON.parse(localStorage.getItem("todo"));
  //         setTodo(storageData);
  //     }
  //   }, []);

  //Monitor and update changes

  const CollectInput = useCallback(
    (prop: string, value: string) => {
      setData({ ...data, [prop]: value });
      //   console.log(data);
    },
    [data]
  );

  const SubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let storageData = localStorage.getItem("todo");

      if (storageData == null) {
        navigate("*");
        // return localStorage.setItem("todo", JSON.stringify([data]));
      } else if (storageData.length >= 1) {
        let newStorageData: obj[] = JSON.parse(storageData);

        let arr = newStorageData.map((prop) =>
          prop.task == data.task ? data : null
        );
        console.log("new", arr);
        // localStorage.setItem("todo", JSON.stringify([arr]));

        // navigate("/");
      }

      // return console.log(data);
    },
    [data]
  );

  useEffect(() => {
    return FetchData;
  }, []);

  //   useEffect(() => {
  //     return FetchTodo;
  //   }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Update Task</h1>
        <form
          onSubmit={(e) => {
            SubmitForm(e);
          }}
        >
          <div className={style["input_hold"]}>
            <label htmlFor="task">
              Task <span className={style["red"]}>*</span>
            </label>
            <input
              type="text"
              id="task"
              placeholder="Enter new task here"
              //   defaultValue={data.task}
              onChange={(e) => {
                CollectInput("task", e.target.value);
              }}
              required
            />
          </div>

          <div className={style["input_hold"]}>
            <label htmlFor="date">
              Date <span className={style["red"]}>*</span>
            </label>
            <input
              type="date"
              id="date"
              defaultValue={data.date}
              onChange={(e) => {
                CollectInput("date", e.target.value);
              }}
              required
            />
          </div>

          <div className={style["input_hold"]}>
            <label htmlFor="start-time">
              Start Time <span className={style["red"]}>*</span>
            </label>
            <input
              type="time"
              id="start-time"
              defaultValue={data.startTime}
              onChange={(e) => {
                CollectInput("startTime", e.target.value);
              }}
              required
            />
          </div>

          <div className={style["input_hold"]}>
            <label htmlFor="end-time">
              Due Time <span className={style["red"]}>*</span>
            </label>
            <input
              type="time"
              id="end-time"
              defaultValue={data.dueTime}
              onChange={(e) => {
                CollectInput("dueTime", e.target.value);
              }}
              required
            />
          </div>

          <Button text="Submit" />
        </form>
      </main>
    </>
  );
};

export default Index;
