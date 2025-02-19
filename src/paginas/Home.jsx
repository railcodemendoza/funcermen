import React from "react";
import { Contacto } from "../componentes/Contacto";
import { HashLink } from 'react-router-hash-link';
import Carousel from "../componentes/Carousel";

function Home() {

    return(
        <>
        
        <section className="inicio" id='inicio'>
            <div>
            <h1 translate="no" >FUNCERMEN</h1>
            <div className="linea"></div>
            <h3>Consultorios Médicos</h3>
            </div>
        </section>
        <section id='nosotros'>
            <h2>Sobre Nosotros</h2>
            {/* <p>
            En Funcermen, nos dedicamos a ofrecer un cuidado integral y especializado en la salud del cerebro, el bienestar físico y emocional, con un enfoque en la excelencia médica y humana.
            Contamos con un equipo multidisciplinario altamente capacitado en diversas especialidades. 
            Nuestra prioridad es brindar una atención personalizada y de calidad, acompañando a cada paciente en su camino hacia el 
            bienestar con un enfoque preciso y cálido, orientado siempre a 
            mejorar su calidad de vida.
            </p> */}

            <p>
            En <span id="bold">Funcermen</span>, nos dedicamos a ofrecer un cuidado integral y especializado en la salud del cerebro, el bienestar físico y emocional, con un enfoque en la excelencia médica y humana.
            </p>
            <p>
            Contamos con un equipo multidisciplinario altamente capacitado en diversas especialidades.    
            </p>
            <p>
            Nuestra prioridad es brindar una atención personalizada y de calidad, acompañando a cada paciente en su camino hacia el 
            bienestar con un enfoque preciso y cálido, orientado siempre a 
            mejorar su calidad de vida.
            </p>
        </section>
        <section id='opciones'>
            <div id='opciones-contenedor'>
            <div className='card' id='especialidades-card'>
                <h4>Especialidades</h4>
                <img src="card-opciones (1).png" alt="" />
                <HashLink smooth to="/especialidades#especialidades" className="boton-circulo">
                    <p>SABER MÁS</p>
                </HashLink>
            </div>
            <div className='card' id='estudios-card'>
                <h4>Estudios</h4>
                <img src="card-opciones (2).png" alt="" />
                <HashLink smooth to="/estudios#estudios" className="boton-circulo">
                    <p>SABER MÁS</p>
                </HashLink>
            </div>
            <div className='card' id='talleres-card'>
                <h4>Talleres</h4>
                <img src="card-opciones (3).png" alt="" />
                <HashLink smooth to="/talleres#talleres" className="boton-circulo">
                    <p>SABER MÁS</p>
                </HashLink>
            </div>
            </div>
        </section>
        <section id='convenios'>
          
            <h2 translate="no">Convenios</h2>
            {/* <div id='contenedor-marcas-imagenes'>
            <img src="ospe.png" alt="ospe" />
            <img src="sancor.png" alt="sancor" />
            <img src="osde.png" alt="osde" />
            <img src="osadef.png" alt="osadef" />
            <img src="medicus.png" alt="medicus" />
            <img src="galeno.png" alt="galeno" />
            <img src="medife.png" alt="medife" />
            <img src="ospe.png" alt="osdipp" />
            </div> */}
            <Carousel />
        </section>
        {/* <Carousel /> */}
        <section id='atencion'>
            <h2 id='atencion-primer-texto'>Atención Integral</h2>
            <h2 id='atencion-segundo-texto'>para cada etapa de tu vida</h2>
            <div id='atencion-integral-imagenes-contenedor'>
            <img src="atencion-integral (1).png" alt="" />
            <img src="atencion-integral (2).png" alt="" />
            <img src="atencion-integral (3).png" alt="" />
            </div>
            <div id='atencion-integral-imagenes-contenedor'>
            <img src="foto1.jpg" alt="" />
            <img src="foto2.jpg" alt="" />
            <img src="foto3.jpg" alt="" />
            </div>
        </section>
        <section id='directores'>
            <div id='director-contenedor'>
            <h3>Director</h3>
            <h4>Dr. Daniel Raul Zuin</h4>
            </div>
            <div id='directora-contenedor'>
            <h3>Coordinadora Medica</h3>
            <h4>Dra. Florencia Zuin</h4>
            </div>
        </section>
        <Contacto />
        </>
    )
}

export default Home