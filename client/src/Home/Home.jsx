import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";

import { filter_alfabetico, get_all_games } from "../store-reducer/actions";

import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const [loadingDatos, setLoadingDatos] = useState(false);

  const ordenAlfabetico = async (event) => {
    dispatch(filter_alfabetico(event.target.value));
  };
  const games = useSelector((state) => state.games);

  const prueba = useSelector((state) => state);
  console.log(prueba);

  useEffect(() => {
    if (loadingDatos === false && games.length === 0) {
      setLoadingDatos(true);
      dispatch(get_all_games());
    }
  }, [dispatch, loadingDatos, games]);

  return (
    <>
      <div className={style.padre}>
        <div className={style.barraUno}>
          <NavLink to="/">
            <button className={style.boton}>Volver</button>
          </NavLink>
          <NavLink to="/About">
            <button className={style.botonDos}>About</button>
          </NavLink>
        </div>

        <h1 className={style.texto}>VideoGames Santi</h1>

        <div>
          <input
            type="text"
            name="Busquedas"
            id=""
            placeholder="Search Videogames"
            className={style.barraBusqueda}
          />
          <button className={style.botonSearch}>Search</button>

          <NavLink to="/Form">
            <button className={style.boton}>New Videogame</button>
          </NavLink>
          <select
            name="Orden alfabetico"
            id=""
            onChange={ordenAlfabetico}
            className={style.boton}
          >
            <option value="A-Z">Por orden alfabetico default A-Z</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select name="Por generos" id="" className={style.boton}>
            <option value="">Generos en Desarrollo</option>
            <option value="">accion</option>
            <option value="">terror</option>
          </select>
        </div>

        <br />
        <br />
        <div className={style.containertarjetas}>
          {games?.map((e, i) => (
            <div key={i} className={style.tarjetas}>
              <NavLink to={`/Detail/${e?.id}`}>
                <div>{e?.name}</div>
              </NavLink>
              {/* <img
                src={e?.background_image}
                alt="imagen no disponible"
                className={style?.imagen}
              /> */}

              <div>
                <strong>Generos:</strong>
                {e?.genres.map((e, i) => (
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
