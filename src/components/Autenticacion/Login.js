import {useState,useEffect} from 'react'
import {auth} from "../firebase/config"
import {onAuthStateChanged} from "firebase/auth";
import { LoginForm } from './LoginForm';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';





export const Login = () => {
    const [resultadoPeticion, setResultadoPeticion] = useState({mensaje: "", tipo: ""  })
   
    
    const initialValues = {
        email: "",
        password: "",
        rePassword:"",
        showPassword: false,
    }
    const {iniciarSesion, setUsuario} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      
        onAuthStateChanged(auth, usuario => {setUsuario(usuario)})
    
    
    },)
    

    const handleEnviar = (valores, {resetForm}) => {
        iniciarSesion(valores.email, valores.password)
            .then((res) => {
                setResultadoPeticion({mensaje: "Inicio de sesion exitoso, seras redirigido", tipo: "success"})
                resetForm()
                navigate(-1)
                })    
            .catch((error) => (setResultadoPeticion({mensaje: error.message, tipo: "error"})))
            setTimeout(() => {
                setResultadoPeticion({mensaje: "", tipo: ""})
            }, 3000);
    }

    return (<div className='container'>
            <h1>Iniciar Sesion</h1>
            <LoginForm initialValues={initialValues} handleEnviar={handleEnviar} resultado={resultadoPeticion}/>
        </div>
        
  )
}