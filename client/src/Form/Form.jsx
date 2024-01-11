import React from "react";

import style from "./Form.module.css";

import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    plataform: "",
    lanzamiento: "",
    rating: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
  };

  return (
    <div className={style.Padre}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className={style.inputs}
      />
      <br />
      <input
        name="image"
        type="text"
        value={form.image}
        onChange={handleChange}
        placeholder="image"
        className={style.inputs}
      />
      <input
        name="description"
        type="text"
        value={form.description}
        onChange={handleChange}
        placeholder="description"
        className={style.inputs}
      />
      <input
        name="plataform"
        type="text"
        value={form.plataform}
        onChange={handleChange}
        placeholder="Plataform"
        className={style.inputs}
      />
      <input
        name="lanzamiento"
        type="text"
        value={form.lanzamiento}
        onChange={handleChange}
        placeholder="Fecha_de_lanzamiento"
        className={style.inputs}
      />
      <input
        name="rating"
        type="text"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating"
        className={style.inputs}
      />
      <button>Create Videogame</button>
    </div>
  );
}

export default Form;
