import { NavLink } from "react-router-dom";
import "./mentions.css";
function Mentions() {
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
          <h1 className="text-uppercase text-center">Mentions légales</h1>
          <hr />
          <div className="card col-md-11 border border-0 mb-5 m-auto py-4 d-flex row justify-content-center align-items-around flex-nowrap p-3 bg-white rounded">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Editeur du site
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h3>John Doe</h3>
                    <address>
                      ⌂ 40 rue Laure Diebold, 69009 Lyon, France
                      <a href="tel:0620304050">☎ 06 20 30 40 50</a>
                      <a href="john.doe@gmail.com">✉ john.doe@gmail.com</a>
                    </address>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Hébergeur
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h3>Always Data</h3>
                    <address>
                      ⌂ 91 rue du Faubourg Saint Honoré <br />
                      75008 Paris
                      <a href="www.alwaysdata.com" target="_blank">
                        🌐 www.alwaysdata.com
                      </a>
                    </address>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Crédits
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h3>Crédits</h3>
                    <p>Site développé par John Doe, étudiant du CEF</p>
                    <p>
                      Les images libre de droit sont issues du site{" "}
                      <a href="https://pixabay.com/fr/">Pixabay</a>
                    </p>
                  </div>
                </div>
              </div>
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
export default Mentions;
