import fetch from '@/utils/fetch'

export function fetchOrder() {
  return fetch({
    url: '/api/findOrder',
    method: 'post'
  })
}

export function formSubmit(form) {
  const data = form
  return fetch({
    url: '/form/submit',
    method: 'post',
    data
  })
}
