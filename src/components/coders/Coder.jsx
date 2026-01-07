import { useState, useEffect } from "react";
import { api } from "../../services/api";

const Coder = () => {
  const [coders, setCoders] = useState([]);

  const [form, setForm] = useState({ name: "", age: "" });

  const apiCoders = api();

  useEffect(() => {
    apiCoders.getCoders().then((data) => {
      console.log(data);
      setCoders(data);
    });
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const createCoder = () => {
    apiCoders.addCoder(form).then((response) => setCoders([...coders, response]));
    setForm({ name: "", age: "" });
  };

  const updateCoder = () => {
    apiCoders.updateCoder(form.id, form).then((response) => {
      setCoders(coders.map((coder) => (coder.id === form.id ? response : coder)));
      setForm({ name: "", age: "" });
    });
  };

  const handleSubmmit = (event) => {
    event.preventDefault();
    if (form.id) {
      updateCoder();
    } else {
      createCoder();
    }
  };

  const handleEdit = (coder) => {
    setForm({
      id: coder.id,
      name: coder.name,
      age: coder.age,
    });
  };

  const handleDelete = (id) => {
    apiCoders.deleteCoder(id).then(() => {
      setCoders(coders.filter((coder) => coder.id !== id));
    });
  };

  return (
    <>
      <form onSubmit={handleSubmmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Edad</label>
          <input
            type="text"
            name="age"
            id="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{form.id ? "Actualizar Coder" : "Crear Coder"}</button>
      </form>
      {coders.map((coder) => (
        <div
          key={coder.id}
          id={coder.name}
          className="card"
        >
          <p> {coder.name} </p>
          <p> {coder.age} </p>
          <button onClick={() => handleDelete(coder.id)}>Eliminar</button>
          <button onClick={() => handleEdit(coder)}>Editar</button>
        </div>
      ))}
    </>
  );
};

export default Coder;
