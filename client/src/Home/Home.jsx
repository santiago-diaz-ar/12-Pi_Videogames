import React from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

import style from "./Home.module.css";

export default function Home() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    if (juegos.length === 0) {
      axios("http://localhost:3001/videogames")
        .then((response) => {
          setJuegos(response?.data?.results);
        })
        .catch((error) => console.log(error));
    }
  });

  console.log(juegos.length);
  return (
    <>
      <div className={style.padre}>
        <div>
          <br />
          <button /* className={style.muestra} */>
            <NavLink to="/">Volver</NavLink>
          </button>
          <br />
          <button>
            <NavLink to="/About">About</NavLink>
          </button>
          <br />
          <button>
            <NavLink to="/Form">New Videogame</NavLink>
          </button>

          <br />
          <br />
          <div>
            <input
              type="text"
              name="Busquedas"
              id=""
              placeholder="Search Videogames"
            />
            <button>Search</button>
          </div>
          <br />

          <select name="Filtros" id="">
            <option value="">Por orden alfabetico </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select name="Por generos" id="">
            <option value="">Generos en Desarrollo</option>
            <option value="">accion</option>
            <option value="">terror</option>
          </select>
          <br />
          <br />
          <br />
          <div className={style.containertarjetas}>
            {juegos?.map((e, i) => (
              <div key={i} className={style.tarjetas}>
                <div>{e?.name}</div>
                <NavLink to={`/Detail/${e.id}`}>
                  <img
                    src={e?.background_image}
                    alt="imagen no disponible"
                    className={style.imagen}
                  />
                </NavLink>

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
      </div>
    </>
  );
}
