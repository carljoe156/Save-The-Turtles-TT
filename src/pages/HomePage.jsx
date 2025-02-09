import React from "react";
// import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <div className="cover-photo">
        <img
          src="https://media.gettyimages.com/id/100374642/photo/leatherback-turtle-dermochelys-coriacea-nesting-after-sunrise.jpg?s=2048x2048&w=gi&k=20&c=mZfKyvs3KUNiP6adBQjlqRinY-K9rF_G18IlQIh3ZXc=" // Replace with your own image URL
          alt="Cover"
          className="cover-image"
        />
      </div>

      <div className="content">
        <h2>Welcome to Save The Turtles TT!</h2>
        <p>
          This is some introductory text that explains the purpose of the page.
        </p>
        <p>Scroll down to see more content...</p>

        <section className="section">
          <h3>Mission/Vision</h3>
          <p>Details about Mission/Vision.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            perspiciatis tempora, debitis quaerat distinctio magnam ex,
            accusamus excepturi blanditiis dolorum fuga voluptas obcaecati
            corporis repellendus sed quas porro. Reiciendis, nihil.
          </p>
        </section>
        <section className="section">
          <h3>Stats</h3>
          <p>Details about Stats.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            nisi, voluptatibus, earum quod quos voluptatum voluptates veniam
            expedita neque! Laborum, veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            facilis ab veniam, non culpa sit tenetur eius, quaerat voluptates
            libero quibusdam reprehenderit quas unde in quae? Blanditiis quidem
            voluptate deserunt!
          </p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
