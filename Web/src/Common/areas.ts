import { AREA, SERVICE } from './types/Area'

const REACTIONS: SERVICE[] = [
  {
    id: '0',
    name: 'Envoie e-mail',
    description: 'Envoie un e-mail avec les données météos',
    platform: 'gmail',
  },
  {
    id: '1',
    name: 'Lance une musique',
    description: 'Lance jinggle bells',
    platform: 'spotify',
  },
  {
    id: '2',
    name: 'Ajoute une musique à la playlist',
    description: 'Ajoute une musique de noël à la playlist AREA',
    platform: 'spotify',
  },
  {
    id: '3',
    name: 'Mets la musique en pause',
    description: 'Mets la musique en cours de lecture en pause',
    platform: 'spotify',
  },
]

const ACTIONS: SERVICE[] = [
  {
    id: '0',
    name: 'Quand il neige',
    description: 'Quand il neige à Saguenay',
    platform: 'meteo',
  },
  {
    id: '1',
    name: 'E-mail',
    description: 'Quand je reçois un email',
    platform: 'gmail',
  },
  {
    id: '2',
    name: "Quand j'écoute une musique",
    description: "Quand j'écoute une musique sur Spotify",
    platform: 'spotify',
  },
  {
    id: '3',
    name: 'Quand la neige arrive',
    description: 'Si il neige dans 1 heure à Saguenay',
    platform: 'meteo',
  },
]

export { ACTIONS, REACTIONS }
