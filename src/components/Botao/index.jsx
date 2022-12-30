import React from 'react';
import Button from '@mui/material/Button';


const Botao = ({ titulo, onClick, width }) => {

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    width: {width},
                    height: 44,
                    background: "#0098D7"
                }}
            onClick={onClick}
            >
                {titulo}
            </Button>
        </>
    )
};

export default Botao;