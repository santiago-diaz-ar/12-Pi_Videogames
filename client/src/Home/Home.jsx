import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import style from "./Home.module.css";

export default function Home() {
  const videojuegos = `
  [
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    },
  
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    },
  
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    },
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    },
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    },
    {
      "id": "1",
      "nombre": "Halo",
      "imagen": "en desarrollo",
      "plataformas": "xbox",
      "descripcion": "Buen juego de balo y extraterrestes",
      "fecha de lanzamiento": "01/01/2023",
      "rating": "10.0",
      "generos": "accion,ficcion"
    }
  ]
  `;

  useEffect(() => {
    console.log(typeof videojuegos);
  });

  return (
    <>
      <div className={style.padre}>
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

        <div></div>
      </div>
    </>
  );
}
