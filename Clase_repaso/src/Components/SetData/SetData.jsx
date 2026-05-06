import {useState, useEffect} from 'react'
import './SetData.css'

import { db } from '../../FireBase/config'
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore";

const SetData = () => {

    const [nombre, setNombre] = useState('')
    const [id, setId] = useState('')
    const [edad, setEdad] = useState('')

    const handleSubmit = async () => {
        try {            
            const docRef = await addDoc(collection(db, "prueba"), {
                nombre: nombre,
                id: id,
                edad: edad
            });
            alert("Guardado con éxito: ", docRef.id);
        } catch (e) {
            console.error("Error: No fue posuble crear el documento: ", e);
        }
    }
    const handleSubmit2 = async () => {
        try {            
            await setDoc(doc(db, "prueba", id), {
                nombre: nombre,
                id: id,
                edad: edad
            });
            alert("Guardado con éxito: ", id);
        } catch (e) {
            console.error("Error: No fue posuble crear el documento: ", e);
        }
    }

    useEffect(() => {
        console.log(nombre, id, edad);
        
    }, [nombre, id, edad]);

  return (
    <div className='setData'>
        <h2>SetData</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input className='inputData' type="text" id="nombre" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <label htmlFor="id">ID:</label>
        <input className='inputData' type="text" id="id" placeholder='id' value={id} onChange={(e) => setId(e.target.value)}/>
        <label htmlFor="edad">Edad:</label>
        <input className='inputData' type="text" id="edad" placeholder='Edad' value={edad} onChange={(e) => setEdad(e.target.value)}/>
        <button onClick={handleSubmit}>Guardar</button>
        <button onClick={handleSubmit2}>Guardar CON ID personalizado</button>
    </div>
  )
}

export default SetData