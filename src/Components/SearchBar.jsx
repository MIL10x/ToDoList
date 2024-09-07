import React from "react";

const SearchBar = ({ Task, SetTask, Update, SetUpdate }) => {
  const handleTask = (e) => {
    e.preventDefault();
    if (Update.id) {
      const date = new Date();
      const updatedTaskList = Task.map((todo) =>
        todo.id === Update.id
          ? {
              id: Update.id,
              text: Update.text,
              dataTime: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      SetTask(updatedTaskList);
      SetUpdate({});
    } else {
      const date = new Date();
      const datas = {
        id: date.getTime(),
        text: e.target.outsrc.value,
        dataTime: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      SetTask([...Task, datas]);
      console.log(Task.map((h) => h.id));
      SetUpdate({});
    }
  };
  return (
    <form
      onSubmit={handleTask}
      className="container mx-auto w-96 rounded-full p-3 bg-gradient-to-r from-sky-300 to-sky-600 flex mt-12 justify-evenly gap-3 items-center"
    >
      <input
        type="text"
        className="bg-white text-black rounded-3xl p-3 w-64 h-10 outline-none text-2xl ps-6 pb-4"
        name="outsrc"
        onChange={(e) => SetUpdate({ ...Update, text: e.target.value })}
        value={Update.text || ""}
        id=""
      />
      <button
        name="AddChange"
        className="bg-black text-white text-2xl w-32 pb-2 font-semibold rounded-3xl px-2 py-1"
      >
        {Update.id ? "Update" : "Add"}
      </button>
    </form>
  );
};
export default SearchBar;
