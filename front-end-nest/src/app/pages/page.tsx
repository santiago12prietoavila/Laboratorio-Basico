'use client'
import React from "react";
import type { AppProps } from "next/app";
import NavBar from "../components/navbar/Navbar";
import styles from "../page.module.css";
import { Container, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: theme.spacing(3),
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    },
}));

const FeatureButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#6a11cb",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: theme.spacing(1.5, 3),
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#2575fc",
    },
}));

export default function page() {
    return (
        <div className={styles.page}>
            <NavBar />

            <main className={styles.main}>
                {/* Hero Section */}
                <Container
                    style={{
                        textAlign: "center",
                        padding: "50px 20px",
                        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                        color: "#fff",
                        borderRadius: "15px",
                        marginBottom: "40px",
                    }}
                >
                    <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: "20px" }}>
                        Bienvenido a Nuestra Aplicación
                    </Typography>
                    <Typography variant="h6" style={{ marginBottom: "30px" }}>
                        Gestiona tus proveedores, productos y más con facilidad.
                    </Typography>
                    <FeatureButton>Comenzar Ahora</FeatureButton>
                </Container>

                {/* Features Section */}
                <Container style={{ marginBottom: "50px" }}>
                    <Typography variant="h4" style={{ fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>
                        Características Principales
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <StyledCard>
                                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                    Gestión de Proveedores
                                </Typography>
                                <Typography variant="body2" style={{ margin: "15px 0" }}>
                                    Organiza y administra tus proveedores con un solo clic.
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledCard>
                                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                    Análisis de Datos
                                </Typography>
                                <Typography variant="body2" style={{ margin: "15px 0" }}>
                                    Obtén reportes detallados sobre el rendimiento de tu negocio.
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledCard>
                                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                    Seguridad Total
                                </Typography>
                                <Typography variant="body2" style={{ margin: "15px 0" }}>
                                    Tus datos están seguros con nuestra avanzada tecnología.
                                </Typography>
                            </StyledCard>
                        </Grid>
                    </Grid>
                </Container>

                {/* Call to Action */}
                <Container
                    style={{
                        textAlign: "center",
                        padding: "40px 20px",
                        background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
                        color: "#fff",
                        borderRadius: "15px",
                    }}
                >
                    <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "20px" }}>
                        ¿Listo para comenzar?
                    </Typography>
                    <Typography variant="h6" style={{ marginBottom: "30px" }}>
                        Únete a miles de empresas que confían en nosotros para simplificar su gestión.
                    </Typography>
                    <FeatureButton>Regístrate Gratis</FeatureButton>
                </Container>
            </main>

            <footer className={styles.footer}>
                <p>2024 My Application. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
