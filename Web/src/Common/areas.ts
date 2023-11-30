import { SERVICE } from './types/Area'

const REACTIONS: SERVICE[] = [
  {
    id: '0',
    name: 'Envoie e-mail',
    description: 'Envoie un e-mail',
    platform: 'gmail',
  },
]

const ACTIONS: SERVICE[] = [
  {
    id: '1',
    name: 'Quand il neige',
    description: 'Quand il neige à Saguenay',
    platform: 'meteo',
  },
  {
    id: '2',
    name: 'Quand il pleut',
    description: 'Quand il pleut à Saguenay',
    platform: 'meteo',
  },
  {
    id: '3',
    name: 'Quand je reçois un email',
    description: 'Quand je reçois un email',
    platform: 'gmail',
  },
  {
    id: '4',
    name: "Quand l'ISS passe à moins de 100km de Saguenay",
    description: "Quand l'ISS passe à moins de 100km de Saguenay",
    platform: 'iss',
  },
  {
    id: '5',
    name: "Quand l'ISS passe à moins de 20000km de Saguenay",
    description: "Quand l'ISS passe à moins de 20000km de Saguenay",
    platform: 'iss',
  },
]

export { ACTIONS, REACTIONS }
