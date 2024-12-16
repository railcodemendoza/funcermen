import React from 'react'
import { Contacto } from "../componentes/Contacto";

const Talleres = () => {
  return (
    <>
    <section className='inicio' id='talleres'>
        <img src="card-opciones (3).png" alt="" />
        <h1>Talleres</h1>
    </section>
    <section id="taller-estimulacion-cognitiva">
      
      <h2>✓ Taller estimulación cognitiva.</h2>
      <p>
        Nuestro taller de memoria y estimulación cognitiva está diseñado para potenciar las
        habilidades mentales, reforzar la memoria y fomentar la vitalidad intelectual, brindando un
        espacio de aprendizaje, interacción y bienestar. Ofrecemos modalidades grupales,
        individuales, virtuales y a domicilio, para adaptarnos a las necesidades y preferencias de
        cada persona.
      </p>
      <h3><strong>Destinatarios :</strong></h3>
      <ul>
        <li>
          <strong>Estimulación preventiva</strong> para personas de todas las edades.
        </li>
        <li>
          Estimulación para la <strong>rehabilitación</strong> de las siguientes patologías:
          trastornos de memoria secundario, déficit cognitivos, accidentes cerebrovasculares,
          parkinson, esclerosis múltiples, epilepsia, depresión y trastornos disatencionales.
        </li>
      </ul>


      <figure id='imagen-talleres'>
        <img
          src="atencion-integral (1).png"
          alt="Dos personas mayores disfrutando de un ejercicio de memoria"
        />
      </figure>

      <blockquote>
        <p>
          <em>Porque cuidar de tu memoria es cuidar de tu bienestar y el de tu familia</em>
        </p>
      </blockquote>
    </section>
    <Contacto/>
    </>
  )
}

export default Talleres