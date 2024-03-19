import { sha1 } from 'js-sha1'
import { createClient } from '@supabase/supabase-js'

const getShaOne = (stringToHash: string) => sha1(stringToHash)

const getSupabase = () =>
  createClient('https://palmythology.supabase.co', 'my-anon-key')

export const checkCredentials = async (
  loginValue: string,
  passwordValue: string,
) => {
  try {
    const { data, error } = await getSupabase()
      .from('users')
      .select('username')
      .eq('username', loginValue)
      .eq('password', getShaOne(passwordValue))

    if (error) return Promise.reject(`[Supabase] Error -> ${error}`)

    return Promise.resolve({
      username: data.find((info) => info.username === loginValue),
    })
  } catch (e) {
    return Promise.reject(`[Typescript] Error -> ${e}`)
  }
}
