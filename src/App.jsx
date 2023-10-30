import { useState, useEffect } from "react";
import Formulario from "./components/Formulario.jsx";
import Header  from "./components/Header.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";


export function App(){
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(()=>{
        const objeterLS = ()=>{
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS);
        }

        objeterLS()
    },[])
    useEffect(()=>{
        localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])

    
    

    const eliminarPaciente = id=>{
        const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id)
        setPacientes(pacientesActualizados)
        
    }

    return(
        <div className="container bg-slate-100 mx-auto mt-20">
            <Header 
                
            />
            <div className="md:flex mt-12 ">
                <Formulario
                    setPacientes={setPacientes}
                    pacientes={pacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}

                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    
                    
                />
            </div>

        </div>

    )



}