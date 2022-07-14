import React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'purple',
        color: '#000',
        height: 100
      }}
    >
      <p
        style={{
          padding: 50
        }}
      >
        футер
      </p>
    </Box>
  );
}
