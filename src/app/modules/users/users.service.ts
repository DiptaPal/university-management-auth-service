import { User } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config/index'
import { generateUserId } from './users.utils'

const createUserToB = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  //default password

  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Fail to create user!')
  }

  return createUser
}

export default {
  createUserToB,
}
