import React from 'react'
import PropTypes from 'prop-types'
import ComponenteB from '../pure/componenteB'
import { Contacto } from '../../models/contact.class'


const ComponenteA = () => {

  const primerContacto = new Contacto('Pedro', 'Perez', 'pedroperez@algo.com', true)
  
  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ComponenteB contacto={primerContacto}/>
    </div>
  )
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteA;