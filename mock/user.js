export default [
  {
    url: '/api/getUser',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['tom']
      }
    }
  }
]
