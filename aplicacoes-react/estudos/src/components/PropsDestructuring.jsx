import React from 'react'

const PropsDestructuring = ({name, age, city}) => {
  return (
    <div>
        <p>
            O nome do Usuario é: {name}, ele tem {age} anos e mora em {city}.
        </p>
    </div>
  )
}

export default PropsDestructuring