import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const [data, setData] = useState({})

  useEffect(()=>{
      fetch('https://api.github.com/users/leeladharsuthar')
      .then(res => res.json())
      .then((data)=>{
          setData(data)
      })
      .catch((err)=>{
          console.log(err)
      })
  }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-3 text-3xl">
      <img
        src={data.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32 mx-auto"
      />
      <h1 className="text-2xl mt-4">{data.name}</h1>
      <h1 className="text-2xl mt-4">{data.followers}</h1>
      <p className="text-sm">{data.bio}</p>
    </div>
  );
}

export default GitHub;
