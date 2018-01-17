import fetch from '@/utils/fetch'

export function fetchOrder() {
  return fetch({
    url: '/api/findOrder',
    method: 'post'
  })
}
