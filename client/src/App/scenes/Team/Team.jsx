import React, { useState } from 'react';
import { SingleCard } from "./SingleCard/SingleCard";
import Grid from '@material-ui/core/Grid';

import { teamStyles } from "./teamStyles";

export const Team = () => {

  // userNames = ["Filip Matic", "Franko Kalsi", "Arsham Jalayer", "Yuhan Lee"];

  //TODO: Graph all users and do .map
  const renderSingleCardUser1 = () => {
    return <SingleCard userName={"User 1"} />;
  }

  // const renderSingleCardUser2 = () => {
  //   return <SingleCard userName={"User 2"} />;
  // }

  return (
    <div className={teamStyles.teamComponent} >
      <Grid container spacing={10} style={{ marginTop: '2rem' }}>
        <Grid item xs={4}>
          {renderSingleCardUser1()}
        </Grid>
        {/* <Grid item xs={4}>
          {renderSingleCardUser2()}
        </Grid> */}
      </Grid>
    </div>
  );
}