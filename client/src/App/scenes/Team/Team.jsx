import React, { useState } from 'react';
import { SingleCard } from "./SingleCard/SingleCard";
import Grid from '@material-ui/core/Grid';

import { teamStyles } from "./teamStyles";

export const Team = () => {

  const renderSingleCard = () => {
    return <SingleCard />;
  }

  return (
    <div className={teamStyles.teamComponent}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          {renderSingleCard()}
        </Grid>
        <Grid item xs={4}>
          {renderSingleCard()}
        </Grid>
        <Grid item xs={4}>
          {renderSingleCard()}
        </Grid>
      </Grid>
    </div>
  );
}