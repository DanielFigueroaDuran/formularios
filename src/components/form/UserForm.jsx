import { React, useState } from 'react'

const UserForm = () => {


    const [userForm, setUserForm] = useState({})

    // name: "",
    //     email: "",
    //         age: "",
    //             phone: ""



    const handleChange = (event) => {
        setUserForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        // setUserForm({
        //     ...UserForm,
        //     [event.target.name]: event.target.value
        // })
    };

    const handChecked = (event) => {
        setUserForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.checked
            }
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(userForm);

    };


    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit}
                className='flex flex-col border border-green-500 rounded-md p-10  mt-10 gap-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]' >
                <div>
                    <label
                        className='block mb-2 text-sm font-medium text-green-700 dark:text-green-500'
                        htmlFor="firstName"> Name:</label>
                    <input
                        className=' bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400'
                        type="text"
                        name='name'
                        value={userForm.name}
                        onChange={handleChange} />
                </div>

                <div>
                    <label
                        className='block mb-2 text-sm font-medium text-green-700 dark:text-green-500'
                        htmlFor="email">Email:</label>
                    <input
                        className=' bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100
                         dark:border-green-400 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)'
                        type="email"
                        name='email'
                        value={userForm.email}
                        onChange={handleChange} />
                </div>

                <div>
                    <label
                        className='block mb-2 text-sm font-medium text-green-700 dark:text-green-500'
                        htmlFor="age">Edad:</label>
                    <input
                        className=' bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400'
                        type="text"
                        name='age'
                        value={userForm.age}
                        onChange={handleChange} />
                </div>

                <div>
                    <label
                        className='block mb-2 text-sm font-medium text-green-700 dark:text-green-500'
                        htmlFor="phone">Teléfono:</label>
                    <input
                        className=' bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400'
                        type="tel"
                        name='phone'
                        value={userForm.phone}
                        onChange={handleChange} />
                </div>

                <div className='flex flex-col mt-5 gap-2'>
                    <p>Género:</p>
                    <div className='flex gap-3'>
                        <input type="radio" name="genero" value="Masculino" onChange={handleChange} defaultChecked />
                        <label >Masculino</label>
                        <input type="radio" name="genero" value="Femenino" onChange={handleChange} />
                        <label>Femenino</label>
                        <input type="radio" name="genero" value="otro" onChange={handleChange} />
                        <label>Otros / Prefiero no decirlo</label>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <label htmlFor="bank">Tipo de Cuenta:</label>
                    <select name="bank" id="bank" onChange={handleChange}>
                        <option value="">---</option>
                        <option value="basica">Básica</option>
                        <option value="premiun">Premiun</option>
                        <option value="busines">Busines</option>
                    </select>
                </div>

                <div className='flex gap-5'>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value="Bike"
                        onChange={handChecked}
                    />
                    <label htmlFor="">Acepto recibir publicidad por email:</label>
                </div>

                <div className='flex justify-center'>
                    <input
                        className='bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white p-4 w-[50%] border border-green-500 hover:border-transparent rounded'
                        type="submit" />
                </div>

            </form>
        </div>
    )
}

export default UserForm