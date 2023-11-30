export interface AREA {
  id: string
  action: SERVICE
  reaction: SERVICE
}

type PLATFORM = 'gmail' | 'spotify' | 'meteo' | 'iss'

export interface SERVICE {
  id: string
  name: string
  description: string
  platform: PLATFORM
}
