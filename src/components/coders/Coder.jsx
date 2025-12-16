import { useState } from "react"


const Coder = () => {
    const [coders, setCoders] = useState([
        {
            id:1,
            name: "Ingrid",
            age: 32
        },
        {
            id:2,
            name: "Charlotte",
            age: 25
        },
        {
            id:3,
            name: "Manon",
            age: 18
        }
    ])

    const [form, setForm] = useState({name: "", age: ""})

    const handleChange = (event) => {
        /* console.log(event.target.value) */
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmmit = (event) => {
        event.preventDefault()
        setCoders([
            ...coders,
            form
        ])
    }

    return (
        <>
            <form onSubmit={handleSubmmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Edad</label>
                    <input type="text" name="age" id="age" onChange={handleChange}/>
                </div>
                <button type="submmit">Crear Coder</button>
            </form>
            {
                coders.map((coder) => (
                    <div key={coder.id} id={coder.name} className="card">
                        <p> {coder.name} </p>
                        <p> {coder.age} </p>
                    </div>
                ))
            }
        </>
    )
}

export default Coder