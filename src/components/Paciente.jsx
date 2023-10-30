import Formulario from "./Formulario"
import { useEffect } from "react"


const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
    
    const {nombre,mascota,numero,email,fecha,sintomas,id}=paciente;

    const handleEliminar = () =>{
        const confirmar = confirm('¿Desea eliminar el paciente?')
        if (confirmar) {
            eliminarPaciente(id)
        }
        

    }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md ">
           <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                <span className='font-normal normal-case'>
                    {mascota}
                </span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
                <span className='font-normal normal-case'>
                    {nombre}
                </span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Numero telefonico: {""}
                <span className='font-normal normal-case'>
                    {numero}
                </span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
                <span className='font-normal normal-case'>
                    {email}
                </span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {""}
                <span className='font-normal normal-case'>
                    {fecha}
                </span>
            </p>
            

            <p className='font-bold mb-3 text-gray-700 uppercase' >Síntomas: {""}
                <span className='font-normal normal-case'>
                    {sintomas}
                </span>
            </p>

            <div className="mt-10 flex w-full justify-between">
                <button className="bg-gray-700 cursor-pointer  text-white p-2 rounded-md font-bold w-1/4  hover:bg-gray-900 transition-all duration-200" type="button"
                    onClick={()=>setPaciente(paciente)}
                >
                     Editar   
                </button>

                <button className="bg-red-400 cursor-pointer  text-white p-2 rounded-md font-bold w-1/4  hover:bg-red-600 transition-all duration-200" 
                type="button" onClick={handleEliminar}>
                     Eliminar
                </button>

                
            </div>

            


    
    </div>
  )
}

export default Paciente