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
        </section>
        <section className="section">
          <h3>Stats</h3>
          <p>Details about Stats.</p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
