import { React, useState } from "react";
import { Slider, Stack, Typography, Switch } from "@mui/material";
import { Card, CardContent, CardActions, Select, InputLabel, MenuItem, FormControl,} from "@mui/material";

export default function Dashboard() {
  const [online, setOnline] = useState(true);
  const [volume, setVolume] = useState(0);
  const [quality, setQuality] = useState("");

  const onlineChange = (event) => {
    setOnline(event.target.checked);
  };

  const volumeChange = (e) => {
    setVolume(e.target.value);
  };

  const qualityChange = (e) => {
    setQuality(e.target.value);
  };

  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mt: 5, color: "#3a23eb" }}>
        Welcome!
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <Card sx={{ maxWidth: 350, minWidth: 250, height: 250 }}>
          <CardContent sx={{ m: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              Online Mode
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions sx={{ ml: 1, mt: 5 }}>
            <Switch checked={online} onChange={onlineChange} color="success" />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350, minWidth: 250, height: 250 }}>
          <CardContent sx={{ m: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              Master Volume
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Overries all other sound settings in this application
            </Typography>
          </CardContent>
          <CardActions sx={{ width: 250, ml: 2, mt: 6 }}>
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={volumeChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, minWidth: 200, height: 250 }}>
          <CardContent sx={{ m: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              Sound Quality
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions sx={{ ml: 2, mt: 6 }}>
            <FormControl variant="standard" sx={{ width: 250 }}>
              <InputLabel>Quality</InputLabel>
              <Select value={quality} onChange={qualityChange}>
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </Stack>
      <div className="noticeBox">
        <Typography variant="body1" sx={{ mt: 5, color: 'red'}}>
          {online === false
            ? "Your application is offline. You will not be able to share or stream music to other devices."
            : ""}
        </Typography>
        <Typography variant="body1" sx={{ mt: 5, color: 'red'}} >
          {volume >= 80
            ? "Listening to music at a high volume could cause long-term hearing loss."
            : ""}
        </Typography>
        <Typography variant="body1" sx={{ mt: 5, color: 'red'}}>
          {quality === 1
            ? "Music quality is degraded. Increase quality if your connection allows it."
            : ""}
        </Typography>
      </div>
    </div>
  );
}