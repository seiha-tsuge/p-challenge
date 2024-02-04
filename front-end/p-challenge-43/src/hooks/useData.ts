import React, { useState } from "react";

interface Data {
  id: string;
  task: string;
  complete: boolean;
}

export const useData = (initialData: Data[]) => {
  const [data, setData] = useState(initialData);

  const addData = (newTask: string) => {
    const id = Math.floor(Math.random() * 90000) + 10000;
    const newData = { id: id.toString(), task: newTask, complete: false };
    setData((prevData) => prevData.concat([newData]));
  };

  const removeData = (nodeId: string) => {
    setData((prevData) => prevData.filter((el) => el.id !== nodeId));
  };

  const toggleComplete = (nodeId: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === nodeId
          ? { ...item, complete: item.complete === true ? false : true }
          : item
      )
    );
  };

  return { data, addData, removeData, toggleComplete };
};
