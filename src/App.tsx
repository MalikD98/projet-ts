import {countries} from "./Countries";
import {useState} from "react";
import {Card, CardMedia, CardContent, Typography, CardActions, TextField, Chip, Container, Stack, FormControlLabel, Switch, Avatar, Snackbar, Alert, IconButton} from "@mui/material";
import { CheckCircleOutlineOutlined, CancelOutlined, RestartAlt } from "@mui/icons-material";
import ActionButton from "./ActionButton";
import { Country } from "./types";

function App() {
  const [remainingCountries, setremainingCountries] = useState(countries);
  const [pickedCountry, setpickedCountry] = useState(remainingCountries[Math.floor(Math.random() * remainingCountries.length)]);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
	const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e:any) => {
		setInput(e.target.value);
	};

  const handleAction = (country:Country) => {
    handleAnswer();
    
    setremainingCountries(remainingCountries.filter(remainingCountry => (remainingCountry.code !== country.code)));
    setpickedCountry(remainingCountries[Math.floor(Math.random() * remainingCountries.length)]);
	};

  const handleValidation = (country:Country) => {
    handleAction(country);
	};

  const handleAnswer = () => {
    const answer = (document.documentElement.lang === "fr")? pickedCountry.name_fr:pickedCountry.name_en;
    (input.toLowerCase() === answer.toLowerCase()) ?
      setGoodAnswer(goodAnswer+1):
      setWrongAnswer(wrongAnswer+1);
    setInput("");
  };

  const handlePass = (country:Country) => {
    handleAction(country);
    setWrongAnswer(wrongAnswer+1);
	};
  
  return (
    <Container className="App" fixed>
      <Stack spacing={2}>
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pickedCountry.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quel pays est-ce ?
            </Typography>
				
            <TextField id="standard-basic" label="Ex: France" value={input} variant="standard" onChange={handleChange}/>
          </CardContent>
          <CardActions>
            <ActionButton color="success" code={pickedCountry.code} onClick={handleValidation} text="Valider"/>
            <ActionButton color="error" code={pickedCountry.code} onClick={handlePass} text="Passer"/>
          </CardActions>
        </Card>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ maxWidth: 345 }}
        >
          <Stack direction="row" spacing={2}>
            <Chip color="success" icon={<CheckCircleOutlineOutlined />} label={goodAnswer.toString() +'/'+ countries.length.toString()} />
            <Chip color="error" icon={<CancelOutlined />} label={wrongAnswer.toString() +'/'+ countries.length.toString()} />
          </Stack>
          <Stack direction="row">
            <IconButton color="primary" aria-label="upload picture" component="label">
              <RestartAlt />
            </IconButton>
            <Switch/>
          </Stack>
        </Stack>
      </Stack>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default App
