import "./home.css";

const HomePage = () => {
  return (
    <main>
      <article className="main-area">
        <section className="container">
          <h1 className="page-title">Välkommen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias rerum beatae mollitia magni provident ullam exercitationem
            dicta excepturi vitae! Quae cumque nesciunt temporibus libero nobis
            quis id quaerat repudiandae architecto, dolorem repellat sint
            assumenda similique nostrum? Blanditiis, quam quis.
          </p>
          <a href="/about" className="btn">
            Läs mer om oss
          </a>
        </section>
      </article>
      <article className="info-area">
        <section className="display-image"></section>
        <section className="info bg-dark">
          <h3 className="page-title">Westcoast Cars</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            explicabo deserunt qui dicta eaque quae libero illum debitis
            mollitia, molestias eveniet consequuntur provident rem a blanditiis
            recusandae ipsa. Maiores dolor laudantium assumenda qui, soluta at
            rem, incidunt eius aspernatur animi autem iure neque accusamus ut
            vero architecto consectetur illo ducimus?
          </p>
          <a href="/performances" className="btn btn-light">
            Performances
          </a>
        </section>
      </article>
      <article className="feature-area">
        <section id="service" className="box bg-light">
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <h3>Service</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            deserunt sit quos, ratione numquam distinctio maiores nisi veniam
            dolore quis.
          </p>
        </section>
        <section id="leasing" className="box bg-primary">
          <i className="fa-regular fa-car-building"></i>
          <h3>Leasing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            deserunt sit quos, ratione numquam distinctio maiores nisi veniam
            dolore quis.
          </p>
        </section>
        <section id="store" className="box bg-light">
          <i className="fa-solid fa-shop"></i>
          <h3>Butik</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            deserunt sit quos, ratione numquam distinctio maiores nisi veniam
            dolore quis.
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
