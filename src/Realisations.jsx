import { NavLink } from "react-router-dom";
import "./realisations.css";
function Realisations() {
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
          <img
            src="./assets/img/banner.jpg"
            alt="bannière"
            className="img-banniere-deskstop"
          ></img>
          <img
            src="./assets/img/banner-tablette.jpg"
            alt="bannière"
            className="img-banniere-tablette"
          ></img>
          <img
            src="./assets/img/banner-mobile.jpg"
            alt="bannière"
            className="img-banniere-mobile"
          ></img>
        </header>

        <main>
          <div className="titres text-center">
            <h1 className="text-uppercase">Portfolio</h1>
            <span>Voici quelques-unes de mes réalisations.</span>
            <hr />
          </div>
          <section className="portfolio">
            <div className="card-group mx-3 my-3 row justify-content-center align-items-center px-auto">
              <div className="col-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./assets/img/portfolio/fresh-food.jpg"
                    alt="Card image cap"
                  ></img>
                  <div className="card-body text-center">
                    <h2 className="card-title">Fresh food</h2>
                    <p className="card-text">
                      Réalisation d'un site avec commande en ligne.
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      className="btn btn-outline-primary center"
                    >
                      Voir
                    </a>
                  </div>
                  <div className="card-footer text-muted">
                    <time datetime="2022-08-22">
                      Site réalisé avec PHP et MySQL
                    </time>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./assets/img/portfolio/restaurant-japonais.jpg"
                    alt="Card image cap"
                  ></img>
                  <div className="card-body text-center">
                    <h2 className="card-title">Restaurant Akira</h2>
                    <p className="card-text">Réalisation d'un site vitrine.</p>
                    <a
                      href="#"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      Voir
                    </a>
                  </div>
                  <div className="card-footer text-muted">
                    <time datetime="2022-08-20">
                      Site réalisé avec WordPress
                    </time>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./assets/img/portfolio/espace-bien-etre.jpg"
                    alt="Card image cap"
                  ></img>
                  <div className="card-body text-center">
                    <h2 className="card-title">Espace bien-être</h2>
                    <p className="card-text">
                      Réalisation d'un site vitrine pour un praticien de
                      bien-être.
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      Voir
                    </a>
                  </div>
                  <div className="card-footer text-muted">
                    <time datetime="2022-08-01">Site réalisé en HTML/CSS</time>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default Realisations;
