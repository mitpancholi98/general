import { AxiosResponse } from 'axios'

const resolveAsync = async (promise: Promise<AxiosResponse>) => {
  try {
    const res = await promise
    return [res.data, null]
  } catch (e) {
    return [null, (e as any)?.response]
  }
}

export default resolveAsync
