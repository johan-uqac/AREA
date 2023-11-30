import { AREA } from '../types/Area'

const USER_AREAS: AREA[] = [
  {
    id: '0',
    action: {
      id: '1',
      name: 'Quand il neige à Saguenay',
      description: 'Quand il neige à Saguenay',
      platform: 'meteo',
    },
    reaction: {
      id: '2',
      name: 'Envoie un mail',
      description: 'Envoie un mail',
      platform: 'gmail',
    },
  },
  {
    id: '1',
    action: {
      id: '1',
      name: "Quand l'ISS passe à moins de 100km de Saguenay",
      description: "Quand l'ISS passe à moins de 100km de Saguenay",
      platform: 'iss',
    },
    reaction: {
      id: '2',
      name: 'Envoie un mail',
      description: 'Envoie un mail',
      platform: 'gmail',
    },
  },
]

export default USER_AREAS
