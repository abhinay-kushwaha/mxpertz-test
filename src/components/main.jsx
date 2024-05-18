import React, { useState, useEffect } from "react";

const Main = () => {
  const [showData, setShowData] = useState([]);
  const [filterMyData, setFilterMyData] = useState(""); 
  const myApi = "https://child.onrender.com/api/sciencefiction";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(myApi);
      const mydata = await response.json();
      console.log(mydata);
      setShowData(mydata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterMyAllData = (status) => {
    setFilterMyData(status);  
  };

  const myNewFilteredData = filterMyData
    ? showData.filter((item) => item.Status === filterMyData)
    : showData;

  return (
    <div className=""  style={{backgroundImage:"url(https://i.pinimg.com/564x/63/db/65/63db652313ae55d4fcabe4720b2863cf.jpg)", backgroundSize:"cover", }}>
      <div className='flex flex-col justify-evenly items-center p-10 gap-4'  >
        <h1 className='text-xl sm:text-4xl font-bold text-blue-700'> Science Fiction Stories</h1>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-3'>
          <button onClick={() => handleFilterMyAllData('New')} className='w-32 rounded-full p-1 text-white font-bold bg-blue-600'>New</button>
          <button onClick={() => handleFilterMyAllData('In Progress')} className='w-32 rounded-full p-1 text-white font-bold bg-yellow-600'>In Progress</button>
          <button onClick={() => handleFilterMyAllData('Completed')} className='w-32 rounded-full p-1 text-white font-bold bg-green-600'>Completed</button>
          <button onClick={() => handleFilterMyAllData('')} className='w-32 rounded-full p-1 text-white font-bold bg-blue-400'>Clear All</button>
        </div>
      </div>
      <hr />

      <div className="grid sm:grid-cols-4 grid-cols-3 gap-4 shadow-2xl p-3 rounded-2xl" >
        {myNewFilteredData.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-between items-center p-2"
          >
            <h2>
              <img
                src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                alt="image"
                className="rounded-md w-32"
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
  );
};

export default Main;
