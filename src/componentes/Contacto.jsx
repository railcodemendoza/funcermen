import React from 'react'

export const Contacto = () => {
  return (
    <>
    <section id='contacto-copy'>
        <div id='contacto'>
            <div id='contacto-izq'>
                <div className='logo-contenedor'>
                    <img src="logo.png" alt="logo" />
                </div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.977542954783!2d-68.8263144472977!3d-32.89519544557594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0939e4aec17d%3A0x643c5c09bcbca3ae!2sConsultorios%20FunCerMen!5e0!3m2!1ses-419!2sar!4v1734269623788!5m2!1ses-419!2sar">
                </iframe>
            </div>
            <div id='contacto-der'>
                <h3>Contacto</h3>
                <div className='info-contacto'>
                    <h5>WhatsApp - solo mensajes</h5>
                    <h5>+54-261-2085393</h5>
                </div>
                <div className='info-contacto'>
                    <h5>Dirección</h5>
                    <h5>
                    Alfonsina Storni 234, 
                    San José - Guaymallén
                    MENDOZA 
                    </h5>
                </div>
            <div id="redes-contenedor">      
                <a
                    href="https://www.instagram.com/consultoriosfuncermen/?hl=es-la"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="instagram.png" alt="Instagram" />
                </a>
                <a
                    href="https://wa.me/5492612085393"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="whatsapp.png" alt="WhatsApp" />
                </a>
                <a
                    href="https://www.facebook.com/funcermenconsultoriosmza/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="facebook.png" alt="Facebook" />
                </a>
            </div>

            </div>
        </div>
        <div id='copy'>
            <h5>&copy; Rail. All right reserved.</h5>
        </div>
    </section>
    
    </>
  )
}
