import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ListaPanes = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const manejarPanes = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else if (error.response.status == 401) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    manejarPanes();
  }, []);

  return (
    <div className="bg-amber-100 grid grid-cols-4 gap-4 place-items-center my-4">
      {data.map((result) => {
        return (
          <div
            key={result._id}
            className="text-white text-3xl bg-amber-800 rounded-lg flex justify-evenly flex-col items-center w-[280px] h-[450px] transition-transform duration-300 ease-in hover:scale-105 shadow-md"
          >
            <div>
              <img src={result.imagen} alt={"panes"} className="w-56 h-auto" />
            </div>
            <div className="p-1 rounded-lg text-green-400 ">
              {"$" + result.valor}
            </div>
            <div>{result.descripcion}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListaPanes;
