import React from 'react'
import { Contacto } from "../componentes/Contacto";

const Especialidades = () => {
  return (
    <>
    <section className='inicio' id='especialidades'>
        <img src="card-opciones (1).png" alt="" />
        <h1>Especialidades</h1>
    </section>
    <section id='lista'>
        <h2>Especialidades adultos</h2>
        <div>
            <ul className="especialidades-lista">
                <li>Neurología</li>
                <li>Psicología</li>
                <li>Neuropsicología</li>
                <li>Psicopedagogía</li>
                <li>Fonoaudiología</li>
                <li>Endocrinología</li>
                <li>Psiquiatría</li>
                <li>Oftalmología</li>
                <li>Clínica Médica</li>
                <li>Nutrición</li>
                <li>Fisiatra</li>
            </ul>
        </div>
        <img src="atencion-integral (2).png" alt="" />
    </section>
    <section id='infantiles'>
        <h2>Especialidades infantiles</h2>
        <ul className="especialidades-lista">
            <li>Pediatría</li>
            <li>Endocrinología</li>
            <li>Fonoaudiología</li>
            <li>Psicología</li>
            <li>Oftamología</li>
            <li>Fisiatra</li>
            <li>Psicopedagogía</li>
        </ul>
    </section>
    <section id='cuida'>
        <img src="atencion-integral (3).png" alt="" />
        <div>
            <h3>Cuidá tu bienestar</h3>
            <h3>Agendá tu consulta</h3>
        </div>
    </section>
    <Contacto />
    </>
  )
}

export default Especialidades