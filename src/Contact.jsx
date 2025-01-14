import { NavLink } from "react-router-dom";
import "./contact.css";
function Contact() {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="./assets/img/favicon.png"
        ></link>
        <title>Home Page</title>
      </head>

      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id="top">
            <div className="container-fluid">
              <NavLink className="navbar-brand text-white" to="/">
                John Doe
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto me-5 mb-lg-0 ml-auto text-uppercase">
                  <li className="nav-item">
                    <NavLink className="navbar-brand text-white" to="/">
                      Accueil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand text-white" to="/Services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="navbar-brand text-white"
                      to="/Realisations"
                    >
                      Réalisations
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand text-white" to="/Blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand text-white" to="/Contact">
                      Me contacter
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="container card m-5 d-flex row justify-content-center align-items-start shadow p-3 bg-white rounded">
            <div className="titres text-center">
              <h1 className="text-uppercase">Me contacter</h1>
              <span>
                Pour me contacter en vue d'un entretien ou d'une future
                collaboration, merci de remplir le formulaire de contact.
              </span>
              <hr />
            </div>
            <div className="card-group m-1 d-flex flex-row justify-content-center align-items-start p-3 bg-white rounded border border-0 col-12 gap-5">
              <section className="card border border-0">
                <h2>Formulaire de contact</h2>
                <hr />
                <form id="contactForm">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Votre adresse email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="tel"
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="sujet"
                      type="text"
                      placeholder="Sujet"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Votre message"
                      style={{ height: "10rem" }}
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Envoyer
                    </button>
                  </div>
                </form>
              </section>
              <section className="card col-md-5 border border-0">
                <h2>Mes coordonnées</h2>
                <hr />
                <address>
                  <i className="bi bi-geo-alt-fill">
                    40 rue Laure Diebold, 69009 Lyon, France
                  </i>
                  <br />
                  <i className="bi bi-phone">06 20 30 40 50</i>
                </address>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540724!2d4.796403976211973!3d45.778665712402145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734097720933!5m2!1sfr!2sfr"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </section>
            </div>
          </div>
        </main>

        <footer
          className="bg-body-dark text-center text-lg-start"
          style={{ backgroundColor: "#EEE" }}
        >
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h4 className="mb-2">John Doe</h4>
                <address>
                  40 rue Laure Diebold <br />
                  69009 Lyon, France <br />
                  Téléphone: 06 20 30 40 50
                </address>
                <ul className="list-inline mt-1">
                  <li className="list-inline-item">
                    <a href="#" title="github" target="_blank">
                      <i className="bi bi-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" title="x" target="_blank">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" title="linkedin" target="_blank">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h4 className="mb-2">Liens utiles</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="home.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Accueil
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        A propos
                      </a>
                    </li>
                    <li>
                      <a
                        href="services.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Me contacter
                      </a>
                    </li>
                    <li>
                      <a
                        href="mentions.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Mentions légales
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                  <h4 className="mb-2">Mes dernières réalisations</h4>
                  <ul className="mb-0 list-unstyled">
                    <li>
                      <a
                        href="#!"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Fresh food
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Restaurant Akira
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Espace bien-être
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h4 className="mb-2">Mes derniers articles</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="blog.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Coder son site en HTML/CSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Vendre ses produits sur le web
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog.html"
                        className="text-body bi bi-chevron-right"
                        target="_blank"
                      >
                        Se positionner sur Google
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="text-center p-3 text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.911)" }}
            >
              © Designed by John Doe
            </div>
            <div
              className="top-page text-end p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.911)" }}
            >
              <a href="#top">Haut de page</a>
            </div>
          </div>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
}

export default Contact;
