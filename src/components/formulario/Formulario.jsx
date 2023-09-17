import { React, useState } from 'react'

const Formulario = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [user, setUser] = useState({})

  // const handleNameChange = (event) => setName(event.target.value);
  // const handleEmailChange = (event) => setEmail(event.target.value);
  // const handleAgeChange = (event) => setAge(event.target.value);

  const handleInput = (event) => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const user = {
    //   name: name,
    //   email: email,
    //   age: age
    // }

    console.log(user);
    //console.log(name, email, age);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" name='name' value={name} onChange={handleInput} />

      <label htmlFor="email">Email:</label>
      <input type="email" name='email' value={email} onChange={handleInput} />

      <label htmlFor="age">Edad:</label>
      <input type="text" name='age' value={age} onChange={handleInput} />


      <input type="submit" />
    </form>
  )
}

export default Formulario