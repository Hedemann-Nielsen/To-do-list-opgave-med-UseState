import React, { useState } from "react";
import style from "./List.module.scss";

import addItem from "../../assets/images/formkit_add.svg";
import deleteItem from "../../assets/images/formkit_delete.svg";
import leftArrow from "../../assets/images/ei_arrow-left.svg";
import rightArrow from "../../assets/images/ei_arrow-right.svg";

export const List = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target.task.value;

    setData((prevData) => [...prevData, newTask]);

    e.target.task.value = "";
  };

  const handleDeleteTask = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  const handleDeleteAllTasks = () => {
    setData([]);
  };

  return (
    <>
 <div className={style.listSection}>
        <section>
          <ol className={style.list}>
            {data &&
              data.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ol>
        </section>
        <section className={style.rightSide}>
          {data &&
            data.map((item, index) => (
              <div key={index} className={style.listItem}>
                <img src={leftArrow} alt="" />
                <img src={deleteItem} alt=""  onClick={handleDeleteTask}/>
                <img src={rightArrow} alt="" />
              </div>
            ))}
        </section>
      </div>

      <div className={style.addNewSection}>
        <button
          className={style.button}
          onClick={() => setShowForm(!showForm)}
        >
          <img src={addItem} alt="" />
        </button>
        {data && data.length > 0 && (
          <div>
            <img className={style.listItem} onClick={handleDeleteAllTasks} src={deleteItem} alt="Delete All" />
          </div>
        )}
        {showForm && (
          <form className={style.form} onSubmit={handleSubmit}>
            <input type="text" id="task" placeholder="indtast job" />
            <button type="submit">Tilføj</button>
          </form>
        )}
      </div>
    </>
  );
};
