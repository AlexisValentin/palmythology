import { createPool } from '@vercel/postgres'

export const getVercelPool = () =>
  createPool({
    connectionString: process.env.PALMYTHOLOGY_POSTGRES_URL,
  })

export const checkCredentials = async (
  loginValue: string,
  passwordValue: string,
) => {
  try {
    const { rows } = await getVercelPool().query(
      'SELECT login FROM users WHERE login = $1 AND password = $2;',
      [loginValue, passwordValue],
    )

    return Promise.resolve({
      username: rows[0].login,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
