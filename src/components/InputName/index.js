import { useState } from "react";

export function InputName(props) {
  const [form, setForm] = useState("");

  function handleChange(event) {
    setForm(event.target.value);

    console.log(form);
  }

  function handleClick() {
    props.catchUserName(form);
  }

  return (
    <>
      <label>Nome:</label>
      <input onChange={handleChange} value={form} placeholder="João" />
      <button onClick={handleClick}>Clique aqui!</button>
    </>
  );
}
