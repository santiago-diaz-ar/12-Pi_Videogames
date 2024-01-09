import React from "react";

import style from "./Detail.module.css";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

export default function Detail() {
  const { id } = useParams();

  const [datos, setDatos] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`)
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.log("lea el error", error);
      });
  }, [id]);

  console.log(datos);

  return (
    <div>
      <div className={style.Padre}>
        <br />
        <h2>{datos?.name}</h2>
        <img
          src={datos?.background_image}
          alt="img no disponible"
          className={style.imagen}
        />
        <br />
        <div>
          <strong>Plataformas:</strong>
          {datos?.parent_platforms?.map((e, i) => (
            <div key={i}>{e?.platform.name}</div>
          ))}
        </div>
        <br />
        <strong>fecha de lanzamiento:</strong> {datos?.released}
        <br />
        <br />
        <strong>rating:</strong>
        {datos?.ratings_count}
        <br />
        <br />
        <strong> Generos:</strong>
        {datos.genres?.map((e, i) => (
          <li key={i}>{e?.name}</li>
        ))}
        <br />
        <div className={style.descripcion}>
          <strong>Description</strong> {datos?.description}
        </div>
        <br />
      </div>
    </div>
  );
}
