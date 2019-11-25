import React, { useState } from 'react';
import { SingleCard } from "./SingleCard/SingleCard";
import Grid from '@material-ui/core/Grid';

import { teamStyles } from "./teamStyles";

export const Team = () => {

  // userNames = ["Filip Matic", "Franko Kalsi", "Arsham Jalayer", "Yuhan Lee"];

  //TODO: Graph all users and do .map
  const renderSingleCard = () => {
    return <SingleCard userName={"Filip Matic"} />;
  }

  return (
    <div className={teamStyles.teamComponent} >
      <Grid container spacing={10} style={{ marginTop: '2rem' }}>
        <Grid item xs={4}>
          {renderSingleCard()}
        </Grid>
        {/* <Grid item xs={4}>
          {renderSingleCard()}
        </Grid>
        <Grid item xs={4}>
          {renderSingleCard()}
        </Grid> */}
      </Grid>
    </div>
  );
}