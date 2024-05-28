import React, { useEffect, useState } from "react";
import { useNavigate,createSearchParams } from "react-router-dom";

function HomeProducts() {

  const navigate=useNavigate()

    const [data,setData]=useState()

    useEffect(()=>{
     const data= JSON.parse(localStorage.getItem('products')) || []
     setData(data)
    },[])
    

    
  return (
    <>
 
 <>
  <div className="flex items-center justify-evenly w-screen h-auto flex-wrap gap-10 my-10">
    {data?.map((datas, index) => ( // Added index parameter and return statement here
     <a  onClick={() => {
      navigate({
        pathname: "/product",
        search: `?${createSearchParams({
          type: index
        })}`
      });
    }}> <div key={index} className="h-[400px] w-[300px] bg-slate-400">
        <div className="h-[70%] bg-inherit border-double border-4 border-indigo-600">
          <img src={datas.image} className="w-full h-full border-double border-4 border-indigo-600" alt="img" />
        </div>
        <div className="h-[10-%]"><center>{datas.movieName}</center></div>
        <div className="h-[10-%]"><center>{datas.actors}</center></div>
        <div className="h-[10-%]"><center>rating</center></div>
      </div></a>
    ))}
  </div>
</>

    </>
  );
}

export default HomeProducts;
