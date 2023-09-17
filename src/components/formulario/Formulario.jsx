import {React, useState } from 'react'

const Formulario = () => {
const [name, setName] = useState("")

const handleChange = (event) =>{ 
  setName(event.target.value)
};

console.log(name);
  return (
    <form >
        <label htmlFor="">Enter your name:</label>
        <input type="text" name='name' value={name} onChange={handleChange} />

        <input type="submit" />
    </form>
  )
}

export default Formulario