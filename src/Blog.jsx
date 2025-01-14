import { NavLink } from "react-router-dom";
import "./blog.css";
function Blog() {
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
            <h1 className="text-uppercase">Blog</h1>
            <span>
              Retrouvez ici quelques articles sur le développement web.
            </span>
            <hr />
          </div>
          <section className="card-group">
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/coder.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Coder son site en HTML/CSS</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-08-22">Publié le 22 août 2022</time>
              </div>
            </div>
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/croissance.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Vendre ses produits sur le web</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-08-20">Publié le 20 août 2022</time>
              </div>
            </div>
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/google.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Se positionner sur Google</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-08-01">Publié le 1 août 2022</time>
              </div>
            </div>
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/screens.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Coder en responsive design</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-07-31">Publié le 31 juillet 2022</time>
              </div>
            </div>
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/seo.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Techniques de référencement</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-07-30">Publié le 30 juillet 2022</time>
              </div>
            </div>
            <div className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src="./assets/img/blog/technos.png"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h2 className="card-title">Apprendre à coder</h2>
                <p className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-muted">
                <time datetime="2022-07-12">Publié le 12 juillet 2022</time>
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
export default Blog;
