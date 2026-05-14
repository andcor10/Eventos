import './App.css'

function App() {
  const services = [
    {
      title: 'Bodas',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      description:
        'Diseñamos bodas elegantes, románticas y completamente personalizadas, cuidando cada detalle desde la decoración hasta la coordinación del gran día.',
      details: ['Decoración floral', 'Mesa de novios', 'Coordinación del evento', 'Ambientación completa'],
    },
    {
      title: 'XV Años',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
      description:
        'Creamos celebraciones inolvidables para XV años con temáticas modernas, montaje especial, pista, iluminación y detalles únicos.',
      details: ['Temática personalizada', 'Decoración del salón', 'Entrada especial', 'Mesa de dulces'],
    },
    {
      title: 'Cumpleaños',
      image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80',
      description:
        'Organizamos cumpleaños para niños, jóvenes y adultos con decoración, mobiliario, entretenimiento y montaje a la medida.',
      details: ['Decoración temática', 'Backdrops', 'Mobiliario', 'Área de fotos'],
    },
    {
      title: 'Eventos Corporativos',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
      description:
        'Desarrollamos eventos empresariales profesionales como inauguraciones, cenas, lanzamientos, conferencias y reuniones corporativas.',
      details: ['Montaje profesional', 'Audio e iluminación', 'Branding', 'Coordinación logística'],
    },
    {
      title: 'Baby Showers',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
      description:
        'Creamos ambientes delicados, familiares y memorables para celebrar la llegada de un nuevo integrante con estilo y calidez.',
      details: ['Mesa principal', 'Decoración temática', 'Globos', 'Detalles personalizados'],
    },
    {
      title: 'Graduaciones',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
      description:
        'Planeamos graduaciones elegantes y dinámicas para colegios, universidades y grupos privados, con montaje, decoración y coordinación.',
      details: ['Escenario', 'Decoración formal', 'Recepción', 'Coordinación de programa'],
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Escuchamos tu idea',
      text: 'Conocemos el tipo de evento, cantidad de invitados, estilo, presupuesto y lo que quieres transmitir.',
    },
    {
      number: '02',
      title: 'Creamos una propuesta',
      text: 'Diseñamos una idea visual con decoración, mobiliario, colores, distribución y servicios necesarios.',
    },
    {
      number: '03',
      title: 'Planeamos cada detalle',
      text: 'Coordinamos proveedores, montaje, tiempos, logística, personal y elementos decorativos.',
    },
    {
      number: '04',
      title: 'Ejecutamos el evento',
      text: 'Nuestro equipo se encarga del montaje, supervisión y desmontaje para que tú solo disfrutes.',
    },
  ]

  const packages = [
    {
      name: 'Esencial',
      price: 'Desde $8,500',
      description: 'Ideal para reuniones pequeñas y celebraciones familiares.',
      items: ['Decoración básica', 'Mesa principal', 'Montaje y desmontaje', 'Asesoría inicial'],
    },
    {
      name: 'Premium',
      price: 'Desde $18,500',
      description: 'Perfecto para bodas, XV años y cumpleaños más elaborados.',
      items: ['Decoración completa', 'Mobiliario seleccionado', 'Iluminación ambiental', 'Coordinación del día'],
      featured: true,
    },
    {
      name: 'Experiencia Total',
      price: 'Cotización personalizada',
      description: 'Para eventos grandes o completamente personalizados.',
      items: ['Diseño integral', 'Producción completa', 'Proveedores coordinados', 'Supervisión total'],
    },
  ]

  return (
    <div className="app">
      <header className="navbar">
        <a href="#inicio" className="brand">
          <span className="brand-icon">H</span>
          <div>
            <strong>Eventos</strong>
            <small>Diseño & producción</small>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="nav-cta">
          Cotizar evento
        </a>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Eventos sociales y corporativos</p>

            <h1>Convertimos tus celebraciones en experiencias memorables</h1>

            <p className="hero-text">
              Somos una empresa especializada en planeación, decoración, montaje y coordinación de eventos.
              Diseñamos bodas, XV años, cumpleaños, baby showers, graduaciones y eventos empresariales con una
              atención real a cada detalle.
            </p>

            <div className="hero-actions">
              <a href="#servicios" className="primary-button">
                Ver servicios
              </a>
              <a href="#contacto" className="secondary-button">
                Solicitar cotización
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>250+</strong>
                <span>Eventos realizados</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Años de experiencia</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Diseños personalizados</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image main-image"></div>

            <div className="floating-card top-card">
              <span>Próximo montaje</span>
              <strong>Boda civil elegante</strong>
              <small>Jardín privado · 120 invitados</small>
            </div>

            <div className="floating-card bottom-card">
              <span>Servicio incluido</span>
              <strong>Decoración + coordinación</strong>
              <small>Planeación completa del evento</small>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div>
            <p className="eyebrow">Lo que hacemos</p>
            <h2>Nos encargamos de que tu evento se vea, se sienta y funcione perfecto</h2>
          </div>

          <p>
            Cada evento tiene una intención distinta. Algunos deben ser elegantes, otros divertidos,
            otros emotivos y otros completamente corporativos. Por eso diseñamos cada propuesta de forma
            personalizada, considerando el espacio, los invitados, el presupuesto y el estilo del cliente.
          </p>
        </section>

        <section id="servicios" className="services-section">
          <div className="section-heading">
            <p className="eyebrow">Vistas por tipo de evento</p>
            <h2>Servicios para cada celebración</h2>
            <p>
              Estas secciones explican qué puede ofrecer la empresa dependiendo del tipo de evento que el cliente necesita.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <a href="#contacto">Cotizar {service.title}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-card">
            <p className="eyebrow">Producción integral</p>
            <h2>No solo decoramos. Diseñamos la experiencia completa.</h2>
            <p>
              Nos encargamos del concepto visual, la distribución del espacio, la decoración, el mobiliario,
              la iluminación, la coordinación y el seguimiento del evento para que todo tenga coherencia.
            </p>

            <div className="experience-list">
              <span>Diseño del concepto</span>
              <span>Decoración personalizada</span>
              <span>Mobiliario y montaje</span>
              <span>Logística del evento</span>
              <span>Coordinación de proveedores</span>
              <span>Supervisión el día del evento</span>
            </div>
          </div>

          <div className="experience-image"></div>
        </section>

        <section id="proceso" className="process-section">
          <div className="section-heading">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Un proceso claro desde la primera idea hasta el último detalle</h2>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="paquetes" className="packages-section">
          <div className="section-heading">
            <p className="eyebrow">Paquetes</p>
            <h2>Opciones para diferentes tipos de eventos</h2>
            <p>
              Estos paquetes son ejemplos para mostrar la estructura comercial. Los precios y servicios pueden ajustarse.
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((pack) => (
              <article className={`package-card ${pack.featured ? 'featured' : ''}`} key={pack.name}>
                {pack.featured && <span className="popular">Más solicitado</span>}

                <h3>{pack.name}</h3>
                <strong>{pack.price}</strong>
                <p>{pack.description}</p>

                <ul>
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="#contacto">Solicitar cotización</a>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Inspiración</p>
            <h2>Ambientes que podemos crear</h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item gallery-large">
              <span>Bodas al aire libre</span>
            </div>
            <div className="gallery-item gallery-small one">
              <span>Mesas elegantes</span>
            </div>
            <div className="gallery-item gallery-small two">
              <span>Fiestas temáticas</span>
            </div>
            <div className="gallery-item gallery-wide">
              <span>Eventos corporativos</span>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-content">
            <p className="eyebrow">Cotiza tu evento</p>
            <h2>Cuéntanos qué quieres celebrar y nosotros diseñamos la propuesta</h2>
            <p>
              Esta vista puede funcionar como formulario de contacto. Más adelante se puede conectar a WhatsApp,
              correo electrónico o a una base de datos.
            </p>

            <div className="contact-info">
              <span>📍 Servicio en ciudad y alrededores</span>
              <span>📞 WhatsApp: (000) 000 0000</span>
              <span>✉️ contacto@hugoeventos.com</span>
            </div>
          </div>

          <form className="contact-form">
            <label>
              Nombre
              <input type="text" placeholder="Tu nombre" />
            </label>

            <label>
              Tipo de evento
              <select>
                <option>Boda</option>
                <option>XV años</option>
                <option>Cumpleaños</option>
                <option>Baby shower</option>
                <option>Graduación</option>
                <option>Evento corporativo</option>
                <option>Otro</option>
              </select>
            </label>

            <label>
              Fecha estimada
              <input type="date" />
            </label>

            <label>
              Mensaje
              <textarea placeholder="Cuéntanos tu idea, número de invitados y lugar del evento"></textarea>
            </label>

            <button type="button">Enviar solicitud</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Eventos</strong>
          <p>Diseño, planeación y producción de eventos memorables.</p>
        </div>

        <div>
          <a href="#servicios">Servicios</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#contacto">Contacto</a>
        </div>
      </footer>
    </div>
  )
}

export default App