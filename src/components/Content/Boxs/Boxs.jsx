import { Grid } from "@mui/material";
import * as React from "react";
import { Box } from "@mui/system";
import Boxelement from "./Boxelement/Boxelement";

const Boxs = ({ renderBoxs }) => {
  return (
    <Grid container spasing={2}>
      {renderBoxs.map(
        ({ id, height, backgroundColor, xs, marginRight, text }) => (
          <Grid item xs={xs}>
            <Box>
              <Boxelement
                marginRight={marginRight}
                height={height}
                backgroundColor={backgroundColor}
                text={text}
                id={id}
                key={id}
              ></Boxelement>
            </Box>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Boxs;
