import React from 'react'
import { useState, useEffect } from "react";

const DesignTwo = () => {

      const [showData, setShowData] = useState([]);
      const myApi = "https://child.onrender.com/api/sciencefiction/";

      useEffect(() => {
        getData();
      }, []);
      const getData = async () => {
        const response = await fetch(myApi);
        const mydata = await response.json();
        console.log(mydata);
        setShowData(mydata);
      };

  return (
    <>
      <div className="rounded-full w-32 text-white bg-blue-400 font-bold flex justify-center ml-auto m-2">
        Design-2
      </div>
      <header className="flex flex-col gap-5 p-3">
        <h1 className="text-center font-bold sm:text-4xl text-xl">The Lost City Of Future Earth</h1>
        <div className="flex justify-evenly items-center">
          <div className="w-44 rounded-full p-1 text-white font-bold bg-blue-600 text-center">
            Word Explorer
          </div>
          <div className="w-44 rounded-full p-1 text-white font-bold bg-blue-600 text-center">
            Story Adventure
          </div>
          <div className="w-44 rounded-full p-1 text-white font-bold bg-blue-600 text-center">
            Brain Quest
          </div>
        </div>
      </header>

      <main>
        <div className="border-2 ">
          <div className="grid sm:grid-cols-4 grid-cols-3 gap-4 shadow-2xl p-3  rounded-2xl ">
            {showData &&
              showData.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-between items-center p-2"
                >
                  
                  <h2>
                    <img
                      src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                      alt="image"
                      className=" rounded-md w-32"
                    />
                  </h2>
                  <h2 className="">{item.Title}</h2>
                  <h2 className="bg-white rounded-full w-full font-bold text-blue-400 flex items-center justify-center">
                    {item.Status}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default DesignTwo;