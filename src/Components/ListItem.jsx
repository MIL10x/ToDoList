import React from "react";
import delet from "../assets/DustBin.png";
import close from "../assets/pen.png";
const ListItem = ({ Task, SetTask, Update, SetUpdate }) => {
  const handleDelete = (id) => {
    const updated = Task.filter((h) => h.id !== id);
    SetTask(updated);
  };
  const handleRight = (id) => {
    const got = Task.find((to) => to.id === id);
    SetUpdate(got);
  };
  return (
    <div className="container mx-auto rounded-3xl p-8 bg-gradient-to-r from-sky-300 to-sky-600 mt-12">
      <div className="container mx-auto p-3 bg-transparent text-2xl text-white flex justify-between items-center">
        <div className="bg-transparent backdrop-brightness-95 px-3 rounded-lg py-1 shadow-lg backdrop-blur-xl flex gap-3">
          <p>Todo</p>
          <p>{Task.length}</p>
        </div>
        <button
          onClick={() => SetTask([])}
          className="text-2xl bg-black px-3 pb-2 py-1 text-white rounded-full"
        >
          clear
        </button>
      </div>
      <div className="container mx-auto rounded-xl h-auto p-7 bg-transparent backdrop-brightness-90 flex flex-wrap justify-center gap-5 shadow-2xl">
        {Task.map((f, index) => (
          <div
            className="bg-white bg-opacity-25 p-4 rounded-lg h-auto w-auto flex gap-3"
            key={index}
          >
            <div className="flex flex-col">
              <p className="text-black font-semibold text-2xl ">{f.text}</p>
              <p className="text-lg text-black">{f.dataTime}</p>
            </div>
            <div className="flex pb-6 gap-2">
              <button onClick={() => handleRight(f.id)}>
                <img className="h-6 w-6" src={close} alt="" />
              </button>
              <button>
                <img
                  onClick={() => handleDelete(f.id)}
                  className="h-6 w-6"
                  src={delet}
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
