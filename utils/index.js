const ERR_NO = 200

export const getStatus = (res) => {
  return !!res.status && res.data && Object.is(res.status, ERR_NO)
}

export * from './date'
