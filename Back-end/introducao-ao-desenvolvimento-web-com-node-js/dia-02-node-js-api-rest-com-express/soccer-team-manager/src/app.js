const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');

const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

app.use(helmet());
let nextId = 3;
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.static('images'));
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla)
    && teams.every((team) => team.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.use((req, res) => res.sendStatus(404));

module.exports = app;
