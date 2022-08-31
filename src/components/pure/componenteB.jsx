import React from 'react'

const ComponenteB = ({contacto}) => {
    
    return (
        <div>
            <h2>Nombre: {contacto.name}</h2>
            <h2>Apellido: {contacto.lastName}</h2>
            <h2>Email: {contacto.email}</h2>
            <h2>Estado: {contacto.online ? 'En Linea' : 'No Disponible'}</h2>
        </div>
    )
}

export default ComponenteB