import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config/index';
import { generateUserId } from './user.utils';
import ApiError from '../../../errors/ApiError';

const createUserToB = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  //default password

  const id = await generateUserId();
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Fail to create user!');
  }

  return createUser;
};

export const UserServer = {
  createUserToB,
};
