import React from 'react'
import { Container } from 'react-bootstrap'
import {Item} from "../Item/Item"
export const ItemList = ({productos}) => {
    return (
        <Container>
            {productos.map((item) => <Item item={item}/>)}
        </Container>
    )
}
