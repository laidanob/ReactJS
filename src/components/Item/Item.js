import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    let estilo = {width: '18rem',
         margin: "20px",}
    
    let estiloCard = {
         margin: "0px 0px 20px 0px"}
         
    return (
        <div style={estilo}> 
            <Card key={item.id} className="item" style={estiloCard} >
                    <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>
                        {`$ ${item.precio} `}
                        </Card.Text>

                    </Card.Body>
                    </Card>
          <Link to={`/detail/${item.id} `} className="btn btn-primary">Ver mas</Link>
        </div>
    )
}
