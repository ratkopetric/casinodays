import React from 'react';
import {Grid} from "@mui/material";

import {useGameState} from "@/hooks/redux";
import {GameCard} from "@/components/GameCard";

const Apps = () => {
  const { games } = useGameState();

  const handlePlayGame = () => {};

  return (
    <Grid sx={{ py: 4 }} container>
      {games.map((game, index) => (
        <GameCard key={`game-card-${index}`} onPlay={handlePlayGame} {...game} />
      ))}
    </Grid>
  );
};

export default Apps;
