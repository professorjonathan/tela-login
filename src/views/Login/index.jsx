import React from "react";
import Botao from "../../components/Botao";
import { Card, Grid } from '@mui/material';
import Input from "../../components/Input";
import Logo from "../../assets/logo.png";

const Login = () => {
    return (
        <>
            <Grid container style={{ justifyContent: 'center', marginTop: 50 }}>
                <Card style={{ maxWidth: 600, padding: 20, paddingTop: 40 }}>
                    <Grid container style={{ justifyContent: 'center'}}>
                        <Grid>
                            <img src={Logo} alt="logo" />
                        </Grid>
                        <Grid style={{ marginTop: 50}} container justifyContent="center">
                            <Input
                                label="Email"
                                variant="outlined"
                                fullWidth
                                placeholder="Email"
                            />
                        </Grid>
                        <Grid style={{ marginTop: 30}} container justifyContent="center">
                            <Input
                                label="Senha"
                                variant="outlined"
                                fullWidth
                                placeholder="Senha"
                            />
                        </Grid>
                        <Grid style={{ marginTop: 30 }} container justifyContent="center">
                            <Botao
                                titulo="Entrar"
                                width={539}
                                /*onClick={???}*/
                                sx={{
                                    fontFamily: 'Overpass',
                                    fontSize: 14,
                                    transition: '0.6s',
                                    fontWeight: 'bold',
                                    ':hover': { background: '#013EB0' },
                                }}
                                fullWidth
                                variant="contained"
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </>
    )
};

export default Login;