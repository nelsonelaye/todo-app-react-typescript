import React, { useState, useCallback } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import style from "./index.module.scss";

const Index = () => {
  const [data, setData] = useState({
    task: "",
    date: "",
    startTime: "",
    dueTime: "",
  });

  const CollectInput = useCallback(
    (prop: string, value: string) => {
      return setData({ ...data, [prop]: value });
      // console.log(data);
    },
    [data]
  );

  const SubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // e.preventDefault();

      let storageData = localStorage.getItem("todo");

      if (storageData == null) {
        return localStorage.setItem("todo", JSON.stringify([data]));
      } else if (storageData.length >= 1) {
        return localStorage.setItem(
          "todo",
          JSON.stringify([...JSON.parse(storageData), data])
        );
      }

      // return console.log(data);
    },
    [data]
  );
  return (
    <>
      <Header />
      <main>
        <h1>Add a New Task</h1>
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
