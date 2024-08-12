"use client"
import React from 'react'
import { BallTriangle } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="h-screen bg-black w-screen flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#b48e30"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default loading