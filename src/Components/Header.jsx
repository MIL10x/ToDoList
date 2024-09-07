import React, { useEffect, useState } from "react";
import star from "../assets/star.png";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
const Header = () => {
  const [theme, settheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || []
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(
      `${theme}`,
      "bg-no-repeat",
      "bg-cover"
    );
  }, [theme]);
  return (
    <>
      <div className="container mx-auto bg-gradient-to-r from-sky-300 to-sky-600 flex justify-between rounded-full p-3 mt-10 items-center ">
        <div>
          <img src={star} className={"size-10 ml-2"} alt="" />
        </div>
        <div className="flex justify-evenly gap-2">
          <button onClick={() => settheme("bg-[url(./src/assets/1.jpg)]")}>
            <img
              src={one}
              className={
                theme === "bg-[url(./src/assets/1.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
          <button onClick={() => settheme("bg-[url(./src/assets/2.jpg)]")}>
            <img
              src={two}
              className={
                theme === "bg-[url(./src/assets/2.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
          <button onClick={() => settheme("bg-[url(./src/assets/3.jpg)]")}>
            <img
              src={three}
              className={
                theme === "bg-[url(./src/assets/3.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
          <button onClick={() => settheme("bg-[url(./src/assets/4.jpg)]")}>
            <img
              src={four}
              className={
                theme === "bg-[url(./src/assets/4.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
          <button onClick={() => settheme("bg-[url(./src/assets/5.jpg)]")}>
            <img
              src={five}
              className={
                theme === "bg-[url(./src/assets/5.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
          <button onClick={() => settheme("bg-[url(./src/assets/6.jpg)]")}>
            <img
              src={six}
              className={
                theme === "bg-[url(./src/assets/6.jpg)]"
                  ? "size-10 rounded-full transform  hover:size-10 duration-300"
                  : "size-8 rounded-full transform  hover:size-10 duration-300"
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
