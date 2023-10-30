import React,{Children, useEffect, useState} from 'react'

import Pruba_Formulario from './Pruba_Formulario';
import Error from './Error';
import timingFunction from 'tailwindcss-animated/src/utilities/timingFunction';


const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
  const [mascota, setMascota] = useState("");
  const [nombre,setNombre ] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  
  

  const [error, setError] = useState(false);
  
    
  useEffect(()=>{
    if(Object.keys(paciente).length>0){

      setMascota(paciente.mascota)
      setNombre (paciente.nombre)
      setNumero (paciente.numero)
      setEmail (paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente]) // se vuelve a ejecutar cuando cambie paciente
  



  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    
    return random + fecha
  }


  const handleSubmit = (e)=>{
    e.preventDefault();

    if([mascota,nombre,numero,email,fecha,sintomas].includes("")){
      setError(true)
      
      return;
      
    }
    setError(false);
    

    
    //Construir Objeto de Paciente
    const ObjetoPaciente = {
      mascota,
      nombre,
      numero,
      email,
      fecha,
      sintomas
      
    }

    if (paciente.id) {
        
      //Editando regristo

      ObjetoPaciente.id=paciente.id

      const pacienteActualizado = pacientes.map(pacienteState => paciente.id == pacienteState.id ? ObjetoPaciente  : pacienteState)
      setPacientes(pacienteActualizado)

      setPaciente({})
    }
    else{
      //Nuevo registro

      ObjetoPaciente.id=generarId()
      setPacientes([...pacientes, ObjetoPaciente])
    }

    setNombre("")
    setMascota("")
    setNumero("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }
  

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>  
        <p className='text-lg mt-5 text-center'>
          Añade Pacientes  y {""}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form className='bg-white mt-10 mb-10 shadow-xl rounded-md px-5 py-10 ' onSubmit={handleSubmit} action="" method="post">

          {error&&
              <Error>
                <p>Pása todo mai</p>
              </Error>

          }
            

            <Pruba_Formulario n1={"Nombre Mascota"} n2={"mascota"} n3={"Nombre de la Mascota"} tipo={"text"} valor={mascota} change={(e)=>{setMascota(e.target.value)}} />
            

            <Pruba_Formulario n1={"Nombre Propietario"} n2={"propietario"} n3={"Nombre del Propietario"} tipo={"text"} valor={nombre} change={(e)=>setNombre(e.target.value)} />

            <Pruba_Formulario n1={"Numero Propietario"} n2={"numero"} n3={"Numero del Propietario"} tipo={"number"} valor={numero} change={(e)=>{setNumero(e.target.value)}}/>

            <Pruba_Formulario n1={"Email "} n2={"email"} n3={"Email del Propietario"} tipo={"email"} valor={email} change={(e)=>{setEmail(e.target.value)}}/>

            <Pruba_Formulario n1={"Fecha de Alta"} n2={"fecha"} n3={"Fecha de alta"} tipo={"date"} valor={fecha}  change={(e)=>{setFecha(e.target.value)}}/>
            <div className='mb-5'>

              <label className='text-gray-700 uppercase font-bold block' htmlFor="sintomas" >Sintomas</label>

              <textarea 
                id="sintomas"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                placeholder='Describe los sintomas' 
                value={sintomas}
                onChange={(e)=>{setSintomas(e.target.value)} }
              />
            </div>
            <input type="submit" value={paciente.id ? "Editar paciente":"Agregar paciente"}  className='bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all ' />
        </form>
    </div>
  )
}

export default Formulario