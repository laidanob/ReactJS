import { createContext, useState,useContext, useEffect  } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import {auth} from "../firebase/config"

export const AuthContext = createContext()

export const useAuth = () =>{ const context = useContext(AuthContext)
  return context}

export const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState(null)
   
  const [authLoader, setAuthLoader] = useState(true)
   
  const registro = (email,password) => {
     return createUserWithEmailAndPassword (auth, email, password)
    }

  const cerrarSesion = () => {
    signOut(auth)
    setAuthLoader(true)

  }

 
  const iniciarSesion = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

    }

  const actualizarNombre = (usuario,name) => {
    return updateProfile(usuario, {displayName: name})
  }  
  
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, usuario => {
      setUsuario(usuario)
      if (usuario == null){setAuthLoader(true)}
      else {setAuthLoader(false)}
    } )
    
  
    return () => unsubcribe() 
  }, [usuario])
  

return (
    <AuthContext.Provider value={{iniciarSesion, usuario, setUsuario,registro,useAuth,authLoader,cerrarSesion,actualizarNombre}}>
      {children}
    </AuthContext.Provider>)
}