import { sha1 } from 'js-sha1'
import { createPool } from '@vercel/postgres'

const getShaOne = (stringToHash: string) => sha1(stringToHash)

const getVercelPool = () =>
  createPool({
    connectionString: process.env.NEXT_PUBLIC_PALMYTHOLOGY_POSTGRES_URL,
  })
export const selectUsersWithPassword = async (
  loginValue: string,
  passwordValue: string,
) => {
  try {
    const { rows } = await getVercelPool().query(
      'SELECT username FROM users WHERE username = $1 AND password = $2;',
      [loginValue.toLowerCase(), getShaOne(passwordValue)],
    )

    return Promise.resolve({
      username: rows[0]?.username,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
