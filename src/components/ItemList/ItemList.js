import React from 'react'
import {Item} from "../Item/Item"

export const ItemList = ({productos}) => {
    return (
        <div className="itemList">
            {productos.map((item) => <Item key={item.id} item={item}/>)}
        </div>
    )
}
