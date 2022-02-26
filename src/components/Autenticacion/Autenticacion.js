import {useState} from 'react'
import {auth} from "../firebase/config"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { AutenticacionForm } from './AutenticacionForm';





export const Autenticacion = () => {
    const [resultadoPeticion, setResultadoPeticion] = useState({mensaje: "", tipo: ""  })
    
    const initialValues = {
        email: "",
        password: "",
        rePassword:"",
        showPassword: false,
    }


    const handleEnviar = (valores, {resetForm}) => {
       createUserWithEmailAndPassword (auth, valores.email, valores.password)
            .then((res) => (setResultadoPeticion({mensaje: "Cuenta creada con Exito", tipo: "success"}) ))          
            .catch((error) => (setResultadoPeticion({mensaje: error.message, tipo: "error"})))
            resetForm()
            setTimeout(() => {
                setResultadoPeticion({mensaje: "", tipo: ""})
            }, 3000);
    }

    return (<div className='container'>
            <h1>Iniciar Sesion</h1>
            <AutenticacionForm initialValues={initialValues} handleEnviar={handleEnviar} resultado={resultadoPeticion}/>
        </div>
        
  )
}
