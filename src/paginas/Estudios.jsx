import React, { useState } from 'react';
import { Contacto } from '../componentes/Contacto';

const Estudios = () => {
  const [activos, setActivos] = useState([]);

  const toggleAcordeon = (index) => {
    if (activos.includes(index)) {
      setActivos(activos.filter((item) => item !== index));
    } else {
      setActivos([...activos, index]);
    }
  };

  return (
    <>
      <section className="inicio" id="estudios">
        <img src="card-opciones (2).png" alt="Estudios" />
        <h1>Estudios</h1>
      </section>
      <section id='ofrecemos'>
        <h4>
          Ofrecemos estudios para evaluar y monitorear la salud con un enfoque en el diagnóstico
          preciso y el cuidado integral del paciente
        </h4>
        <img src="estudios.png" alt="" />
      </section>
      <section id="acordeon">

        <div className="acordeon-item">
          <button className="acordeon-titulo" onClick={() => toggleAcordeon(1)}>
            Estudios Neurológicos
            <span className="acordeon-icon">{activos.includes(1) ? '-' : '+'}</span>
          </button>
          {activos.includes(1) && (
            <ul className="acordeon-contenido">
              <li>Electroencefalograma con activación compleja</li>
              <li>Electroencefalograma Bajo Sueño</li>
              <li>Electroencefalograma Prolongado</li>
              <li>Potenciados evocados visuales flash/damero</li>
              <li>Electroretinograma</li>
              <li>Mapeo Cerebral</li>
              <li>Electromiografías 2-4 miembros</li>
              <li>Potenciales somatosensoriales</li>
              <li>Evaluaciones neurocognitivas adultos y niños</li>
              <li>Registro gráfico del temblor</li>
            </ul>
          )}
        </div>

        <div className="acordeon-item">
          <button className="acordeon-titulo" onClick={() => toggleAcordeon(2)}>
            Estudios Fonoaudiológicos
            <span className="acordeon-icon">{activos.includes(2) ? '-' : '+'}</span>
          </button>
          {activos.includes(2) && (
            <ul className="acordeon-contenido">
              <li>Evaluaciones Neurolingüísticas</li>
            </ul>
          )}
        </div>

        <div className="acordeon-item">
          <button className="acordeon-titulo" onClick={() => toggleAcordeon(3)}>
            Estudios Neuropsicológicos
            <span className="acordeon-icon">{activos.includes(3) ? '-' : '+'}</span>
          </button>
          {activos.includes(3) && (
            <ul className="acordeon-contenido">
              <li>Evaluaciones Neuropsicológicas</li>
            </ul>
          )}
        </div>

        <div className="acordeon-item">
          <button className="acordeon-titulo" onClick={() => toggleAcordeon(4)}>
            Estudios Oftalmológicos
            <span className="acordeon-icon">{activos.includes(4) ? '-' : '+'}</span>
          </button>
          {activos.includes(4) && (
            <ul className="acordeon-contenido">
              <li>TMP (test de mirada preferencial)</li>
              <li>Estudio sensoriomotor 9 posiciones de la mirada</li>
            </ul>
          )}
        </div>
      </section>

      <Contacto />
    </>
  );
};

export default Estudios;
