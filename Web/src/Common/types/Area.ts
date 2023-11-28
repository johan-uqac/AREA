export interface AREA {
  action: SERVICE
  reaction: SERVICE
}

type PLATFORM = 'gmail' | 'spotify' | 'meteo'

export interface SERVICE {
  id: string
  name: string
  description: string
  platform: PLATFORM
}