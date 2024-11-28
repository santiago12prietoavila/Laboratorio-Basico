'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import Link from 'next/link';

// Estilos personalizados para los elementos del sidebar
const SidebarContainer = styled(Box)({
    width: 250,
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    height: "100vh",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "all 0.3s ease-in-out",
});

const SidebarHeader = styled(Typography)({
    fontSize: "1.75rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
    color:"#fff",
    letterSpacing: "1px",
});

const SidebarItem = styled(ListItem)({
    padding: "15px 10px",
    margin: "10px 0",
    borderRadius: "10px",
    width: "100%",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-3px)",
    },
});

const SidebarDivider = styled(Divider)({
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    margin: "10px 0",
    width: "100%",
});

// Estilos del AppBar
const StyledAppBar = styled(AppBar)({
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    zIndex: 1201, // Asegura que esté por encima del Drawer
});

// Estilos del botón del menú
const MenuButton = styled(IconButton)({
    color: "#fff",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.1)",
    },
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
            return;
        }
        setIsOpen(open);
    };

    const sidebarContent = (
        <SidebarContainer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <SidebarHeader variant="h6">Navegación</SidebarHeader>
            <List>
                <SidebarItem>
                    <Link href="/pages" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
                        <ListItemText primary="Home" />
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link href="/pages/proveedores" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
                        <ListItemText primary="Proveedores" />
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link href="/pages/clientes" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
                        <ListItemText primary="Clientes" />
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link href="/pages/productos" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
                        <ListItemText primary="Productos" />
                    </Link>
                </SidebarItem>
            </List>
            <SidebarDivider />
            <Typography variant="caption" sx={{ textAlign: "center", display: "block", marginTop: "1rem", opacity: 0.7 }}>
                Sistema de Gestión 2024
            </Typography>
        </SidebarContainer>
    );

    return (
        <>
            <StyledAppBar position="fixed">
                <Toolbar>
                    <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </MenuButton>
                </Toolbar>
            </StyledAppBar>

            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                {sidebarContent}
            </Drawer>
        </>
    );
};

export default Navbar;
