import {useState} from 'react';


export const Contacto = () => {
  
    const [valores, setValores] = useState()
    const handleEnviar = (e) =>{
        e.preventDefault()
        console.log(e)
        setValores({
            nombre: e.target[0].value,
            mail: e.target[1].value,
            mensaje: e.target[2].value
        }
        )
    }
    const SABERENVENTO = (e) =>{
        console.log(e)
    }


    console.log(valores)
    console.log(valores.nombre)
    console.log(valores.mail)
    console.log(valores.mensaje)
  return <form onSubmit={handleEnviar} id="contacto">
        <input onChange={SABERENVENTO}
            name="nombre"
            type="text"
            placeholder="nombre"
        />
        <input
            type="text"
            placeholder="mail"
        />
        <input
            type="text"
            placeholder="mensaje"
        />
        <button type="submit" className="btn btn-primary" >Enviar</button>

  </form>;
};
