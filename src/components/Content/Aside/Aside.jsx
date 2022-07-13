import React from 'react';
import Box from '@mui/material/Box';

export default function Aside() {
  return (
    <Box
      sx={{
        bgcolor: 'yellow',
        color: '#000',
        width: 300,
        height: 480,
        mr: 3,
      }}
    >
      <p
        style={{
          padding: 40,
        }}
      >
        сайдбар
      </p>
    </Box>
  );
}
