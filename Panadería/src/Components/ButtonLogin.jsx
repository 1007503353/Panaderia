import React from "react";

const ButtonLogin = ({ fnIniciarSesion, label }) => {
  return (
    <button
      onClick={fnIniciarSesion}
      className=" w-150 px-3 py-2 bg-[#8b4513] text-base bg text-white border-none rounded-md cursor-pointer transition-transform duration-300 ease-in text-18 hover:scale-110"
    >
      {label}
    </button>
  );
};

export default ButtonLogin;
