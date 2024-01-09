import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Home.module.css";

import data from "../json/videojuegos.json";

export default function Home() {
  return (
    <>
      <div className={style.padre}>
        <br />
        <button /* className={style.muestra} */>
          <NavLink to="/">Volver</NavLink>
        </button>
        <br />
        <button>
          <NavLink to="/About">Ir A Sobre mi</NavLink>
        </button>
        <br />
        <div>
          <input
            type="text"
            name="Busquedas"
            id=""
            placeholder="Buscar videojuegos"
          />
          <button>Buscar</button>
        </div>
        <br />

        <div className={style.containertarjetas}>
          {data?.map((item, index) => (
            <div className={style.tarjetas} key={index}>
              <NavLink to={`/Detail/${item.id}`}>
                {item?.nombre}

                <img src={item?.imagen} alt="" className={style.imagen} />
                <div>{item?.genero}</div>
              </NavLink>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <div className={style.footer}>Footer en Desarrollo</div>
      </div>
    </>
  );
}
