import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { get_all_games } from "../store-reducer/actions";

export default function Landing_Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all_games());
  }, [dispatch]);

  return (
    <>
      <div className={style.padre}>
        <h1 className={style.texto}>
          Los videojuegos, las mujeres, las motos y Dios son lo mejor que hay en
          este mundo
        </h1>
        <br />
        <NavLink to="/Home">
          <button className={style.boton}>Ir a Home </button>
        </NavLink>
      </div>
    </>
  );
}
