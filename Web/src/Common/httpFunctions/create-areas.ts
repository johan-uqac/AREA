import { del, get, put } from './requests'

export function sendNewArea(actionId: string, areaId: string, userId: string): Promise<Response> {
  return put(
    '/user/create-area',
    JSON.stringify({
      userId: userId,
      areaId: areaId,
      action: {
        name: actionId,
      },
      reaction: {
        service: 'mail',
      },
    })
  )
}

export function getAreas(userId: string): Promise<Response> {
  return get(
    '/user/areas',
    new URLSearchParams({
      userId: userId,
    })
  )
}

export function deleteAreaFromServer(userId: string, areaId: string): Promise<Response> {
  return del(
    '/user/deleteArea',
    JSON.stringify({
      userId: userId,
      areaId: areaId,
    })
  )
}
