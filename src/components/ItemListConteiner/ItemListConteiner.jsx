import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const itemListConteiner = ({greeting}) => {

  function onAdd() {
    return <p>Hola soy onAdd</p>
  }

  return (
    <div>
        <ItemCount stockItem={10} initial={0} add={onAdd}/>
        <span>{greeting}</span>
    </div>
  )
}

export default itemListConteiner