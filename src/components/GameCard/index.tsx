import React, { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import { IGame } from "@/redux/reducers/game.reducer";
import { useAuthState } from "@/hooks/redux";

interface GameCardProps extends IGame {
  onPlay?(): void;
}

export const GameCard: FC<GameCardProps> = ({onPlay, name}: GameCardProps) => {
  const { account } = useAuthState();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ p: 2 }} >
      <Card sx={{ height: 150 }}>
        <CardActionArea
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            '& .play-btn': {
              display: 'none',
            },
            ...(onPlay !== undefined ? {
              '&:hover': {
                backgroundColor: '#0009',
                '& .play-btn': {
                  display: 'block'
                }
              }
            } : {})
          }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <Button
            component={'div'}
            className={'play-btn'}
            onClick={onPlay}
            sx={{ position: 'absolute' }}
            variant={'contained'}>
            {account !== null ? 'Play for real' : 'Play for fun'}
          </Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
}