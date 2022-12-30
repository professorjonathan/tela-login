import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, placeholder }) => {
    return (
        <>
            <TextField
                label={label}
                placeholder={placeholder}
                sx={{
                    width: 539
                }}
            />
        </>
    )
};

export default Input;