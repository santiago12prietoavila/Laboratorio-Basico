'use client';

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos para el carrusel

export default function Page() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      backgroundColor: "#6020F3FF",
      padding: "20px",
      marginTop: "1px",
    },
    navbar: {
      width: "100%",
      padding: "10px 20px",
      backgroundColor: "#5721D5FF",
      color: "#fff",
      textAlign: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    main: {
      maxWidth: "1200px",
      width: "100%",
      margin: "20px auto",
    },
    carouselContainer: {
      width: "100%",
      maxWidth: "800px",
      margin: "20px auto",
    },
    text: {
      marginTop: "10px",
      fontSize: "18px",
      color: "#333",
      backgroundColor: "#C9C9C9FF",
    },
    footer: {
      marginTop: "auto",
      padding: "10px 0",
      backgroundColor: "#ECECECFF",
      color: "#fff",
      width: "100%",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h2>My Application</h2>
      </nav>

      <main style={styles.main}>
        <h1>My Application</h1>
        <p style={styles.text}>
          Discover a world of features and tools to make your experience seamless and enjoyable.
        </p>

        <div style={styles.carouselContainer}>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
              <img src="https://tse2.mm.bing.net/th?id=OIP.vN01fEj3vOPhKDUqTQ5oMQHaEK&pid=Api&P=0&h=180" alt="Slide 1" />
              <p className="legend">Feature 1: Modern Design</p>
            </div>
            <div>
              <img src="https://tse2.mm.bing.net/th?id=OIP.dp5n4RG986fnSkIP8IeXsgHaEK&pid=Api&P=0&h=180" alt="Slide 2" />
              <p className="legend">Feature 2: User Friendly</p>
            </div>
            <div>
              <img src="https://tse4.mm.bing.net/th?id=OIP.ohWhsRk7_JVEOVBXjKBY9gHaEK&pid=Api&P=0&h=180" alt="Slide 3" />
              <p className="legend">Feature 3: Fully Responsive</p>
            </div>
          </Carousel>
        </div>
      </main>
    </div>
  );
}
