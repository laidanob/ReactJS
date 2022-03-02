import {useState} from 'react'
import { RegistroForm } from './RegistroForm';
import {useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';




export const Registro = () => {
    const [resultadoPeticion, setResultadoPeticion] = useState({mensaje: "", tipo: ""  })
    const initialValues = {
        name:"",
        phoneNumber:"",
        email: "",
        password: "",
        rePassword:"",
        showPassword: false,
    }

    const {registro,actualizarNombre,usuario} = useAuth()
    
    const navigate = useNavigate()

    const handleEnviar = (valores, {resetForm}) => {
        registro(valores.email, valores.password)
       
            .then(
                (res) => 
                {
                console.log(usuario, res)
                actualizarNombre(res.user,valores.name)
                setResultadoPeticion({mensaje: "Cuenta creada con Exito", tipo: "success"})
                resetForm()
                navigate("/")
                }
                )    
            .catch((error) => (setResultadoPeticion({mensaje: error.message, tipo: "error"})))
            setTimeout(() => {
                setResultadoPeticion({mensaje: "", tipo: ""})
            }, 3000);
    }

    return (<div className='container'>
            <h1>Registrarse</h1>
            <RegistroForm initialValues={initialValues} handleEnviar={handleEnviar} resultado={resultadoPeticion}/>
        </div>
        
  )
}
