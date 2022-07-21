import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

export default function Highlight({ summary }) {
  return (
    <Grid container spacing={2}>
      {summary.map((data) => (
        <Grid item sm={6} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
