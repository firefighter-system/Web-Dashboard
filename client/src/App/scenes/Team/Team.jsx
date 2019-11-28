import React, { useState } from 'react';
import SingleCard from "./SingleCard/SingleCard";
import SingleCardTwo from "./SingleCard/SingleCardTwo";
import SingleCardThree from "./SingleCard/SingleCardThree";
import SingleCardFour from "./SingleCard/SingleCardFour";
import Grid from '@material-ui/core/Grid';

import { teamStyles } from "./teamStyles";

export const Team = () => {

  // userNames = ["Filip Matic", "Franko Kalsi", "Arsham Jalayer", "Yuhan Lee"];

  return (
    <div className={teamStyles.teamComponent} >
      <Grid container spacing={10} style={{ marginTop: '2rem' }}>
        <Grid item xs={4}>
          <SingleCard></SingleCard>
        </Grid>

        <Grid item xs={4}>
          <SingleCardTwo></SingleCardTwo>
        </Grid>

        <Grid item xs={4}>
          <SingleCardThree></SingleCardThree>
        </Grid>

        <Grid item xs={4}>
          <SingleCardFour></SingleCardFour>
        </Grid>
      </Grid>
    </div>
  );
}