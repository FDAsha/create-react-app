import * as React from 'react';
import { Box } from "@mui/system"
import { Grid } from "@mui/material"

export default function Boxs() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={7} >
                <Box sx={{
                    height: 200,
                    backgroundColor: 'green',
                }}>
                    <p style={{
                        padding: 80,
                    }}>контент 1</p>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box sx={{
                    height: 200,
                    backgroundColor: 'blue',
                }}>
                    <p style={{
                        padding: 40,
                    }}>контент 2</p>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{
                    height: 250,
                    backgroundColor: 'pink',
                }}>
                    <p style={{
                        padding: 120,
                    }}>контент 3</p>
                </Box>
            </Grid>
        </Grid>
    )
}





