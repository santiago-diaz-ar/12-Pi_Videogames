import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <br />
      <br />
      <button>
        <NavLink to="/">Volver</NavLink>
      </button>
      <br />
      <br />
      <br />
      <br />
      <div>NavBar en desarrollo</div>
      <br />
      <br />
      <br />
      <button>
        <NavLink to="/About">Ir A Sobre mi</NavLink>
      </button>
      <br />
      <br />
      <br />
      <h1>Home Se encuentra en desarrollo</h1>
    </>
  );
}
