import React from 'react'

const Card = ({name, category, old_price, new_price}) => {
  return (
    <div >
        <div className="border p-4">
            <h2 className="text-lg">{name}</h2>
            <p>Category: {category}</p>
            <p>Old Price: <s>${old_price}</s></p>
            <p>New Price: ${new_price}</p>
        </div>
    </div>
  )
}

export default Card