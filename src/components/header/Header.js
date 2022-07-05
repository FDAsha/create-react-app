import React from "react";
import Box from '@mui/material/Box';

export default function Header() {
    return (
        <Box sx={{ bgcolor: 'red', color: '#000', height: 100 }}>
            <p style={{
                padding: 20,
            }}>
                блок навигации
            </p>
        </Box>
    );
}
