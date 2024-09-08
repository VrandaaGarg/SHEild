import React from "react";

function Landing() {
  return (
    <div id="SHEild" className="pt-12">
      <div className="w-full h-[88vh] grid place-content-center relative mb-5 py-10">
        <img
          src="/bg3.jpg"
          alt="Background"
          className="object-cover w-[80vw] h-[75vh] rounded-3xl"
        />
        <div className="absolute inset-0 flex text-white flex-col gap-14 md:gap-5 items-center justify-center">
          <h1 className="text-6xl font-bold">SHEild</h1>
          <h3 className="hidden md:block text-xl md:text-3xl text-center font-semibold rounded-3xl justify-start  ">
            Detect, Alert, Protect: Real-Time Solutions <br /> for Women's
            Safety.
          </h3>
          <h3 className="md:hidden text-xl md:text-3xl text-center font-semibold rounded-3xl justify-start  ">
            Detect, Alert, Protect: <br />
            Real-Time Solutions for Women's <br />
            Safety.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Landing;
