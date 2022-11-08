import React from 'react';
import {Grid} from "@mui/material";

import {useGameState} from "@/hooks/redux";
import {GameCard} from "@/components/GameCard";

const Home = () => {
  const { games } = useGameState();

  return (
    <Grid sx={{ py: 4 }} container>
      {games.map((game, index) => (
        <GameCard key={`game-card-${index}`} {...game} />
      ))}
    </Grid>
  );
};

export default Home;
