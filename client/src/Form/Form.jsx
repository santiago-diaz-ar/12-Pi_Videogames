import React from "react";

import axios from "axios";

import style from "./Form.module.css";

import { useState } from "react";

import validate from "./validate";

import { NavLink } from "react-router-dom";

function Form() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    plataforms: "",
    release_date: "",
    rating: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    description: "",
    plataforms: "",
    release_date: "",
    rating: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
    setErrors(
      validate({
        ...errors,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const saveDB = await axios.post(
        "http://localhost:3001/videogames/PostVideogame",
        form
      );
      if (saveDB) {
        setForm({
          name: "",
          image: "",
          description: "",
          plataforms: "",
          release_date: "",
          rating: "",
        });
        return alert("save complete");
      }
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <>
      <br />
      <NavLink to={"/Home"}>volver</NavLink>
      <form action="" onSubmit={handleSubmit} className={style.Padre}>
        <br />
        <br />

        <strong>Create new Videogame</strong>
        <br />
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className={style.inputs}
        />
        {errors.name && <div>{errors.name}</div>}

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
        {errors.description && <div>{errors.description}</div>}
        <input
          name="plataforms"
          type="text"
          value={form.plataforms}
          onChange={handleChange}
          placeholder="Plataform"
          className={style.inputs}
        />
        {errors.plataforms && <div>{errors.plataforms}</div>}
        <input
          name="release_date"
          type="text"
          value={form.release_date}
          onChange={handleChange}
          placeholder="Fecha_de_lanzamiento"
          className={style.inputs}
        />
        {errors.release_date && <div>{errors.release_date}</div>}
        <input
          name="rating"
          type="text"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          className={style.inputs}
        />
        <br />
        <select name="genres" id="lang">
          <option value="accion">accion</option>
          <option value="terror">terror</option>
          <option value="ficcion">ficcion</option>
        </select>
        <br />
        <button type="submit">Create Videogame</button>
      </form>
    </>
  );
}

export default Form;
