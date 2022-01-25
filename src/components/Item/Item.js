import React from 'react'
import Card from 'react-bootstrap/Card'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({item}) => {
    return (
        <div>
            <Card key={item.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>
                        {`$ ${item.precio} `}
                        </Card.Text>
                    </Card.Body>
                    </Card>
           <ItemCount stock={10} initial={1} />
        </div>
    )
}
