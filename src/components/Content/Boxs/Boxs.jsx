import { Grid } from "@mui/material";
import styled from 'styled-components'
import * as React from "react";
import { Box } from "@mui/system";
import BoxElement from "./BoxElement/BoxElement";

const Boxs = ({ renderBoxs }) => {
  return (
    <Grid container spasing={2}>
      {renderBoxs.map(
        ({ id, height, backgroundColor, xs, md, lg, marginRight, text, padding }) => (
          <Grid item xs={xs} md={md} lg={lg}>
            <Box>
              <BoxElement
                marginRight={marginRight}
                height={height}
                backgroundColor={backgroundColor}
                text={text}
                id={id}
                key={id}
              >
              </BoxElement>
            </Box>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Boxs;
