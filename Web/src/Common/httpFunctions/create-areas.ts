import { put } from './requests'

export function sendNewArea(actionId: string, userId: string): Promise<Response> {
  return put(
    '/user/create-area',
    JSON.stringify({
      userId: userId,
      action: {
        name: actionId,
      },
      reaction: {
        service: 'mail',
      },
    })
  )
}
