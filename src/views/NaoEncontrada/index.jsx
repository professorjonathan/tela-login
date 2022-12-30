import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const NaoEncontrada = ({ onClick }) => {
    return (
        <>
            <header style={{ marginLeft: 30, marginTop: 15 }}>
                <img src={Logo} alt="logo" style={{ width: 50, height: 50 }} />
            </header>
            <hr color= "#dcdcdc" Size="1" />
            <Grid container style={{ justifyContent: 'center' }}>
                <Card style={{ maxWidth: 600, maxHeight: 300, padding: 50, marginTop: 30 }}>
                    <Grid container style={{ justifyContent: 'center', fontSize: 110 }}>
                        404
                    </Grid>
                    <Grid container style={{ justifyContent: 'center' }}>
                        Página não encontrada
                    </Grid>
                    <Grid style={{ justifyContent: 'center', marginTop: 50 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                justifyContent="center"
                                sx={{

                                    height: 36,
                                    transition: '0.6s',
                                    fontWeight: 'bold',
                                    ':hover': { background: '#013EB0', color: '#FFFFFF' }
                                }}
                                onClick={onClick}
                            >
                                Voltar ao Início
                            </Button>
                        </Link>

                    </Grid>
                </Card>
            </Grid>
            <footer style={{ fontSize: 12, textAlign: "right", margin: 10 }}>
                Desenvolvido por JWSS Software
            </footer>
        </>
    )
};

export default NaoEncontrada;