import React from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

import style from "./Home.module.css";

export default function Home() {
  const [juegos, setJuegos] = useState();

  useEffect(() => {
    axios("http://localhost:3001/videogames")
      .then((response) => {
        setJuegos(response?.data?.results);
      })
      .catch((error) => console.log(error));
  }, []);

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
          {juegos?.map((e, i) => (
            <div key={i} className={style.tarjetas}>
              <NavLink to={`/Detail/${e.id}`}>
                <img
                  src={e?.background_image}
                  alt="imagen no disponible"
                  className={style.imagen}
                />
              </NavLink>
              <div>{e?.name}</div>
              <div>
                <strong>Generos:</strong>
                {e?.genres?.map((e, i) => (
                  <div key={i}>{e?.name}</div>
                ))}
              </div>
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
