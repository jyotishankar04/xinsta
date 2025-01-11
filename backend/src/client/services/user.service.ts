import prisma from "../../../config/prisma.config";
import { IUser } from "../../../types/user.type";

const validateUser = async (id: string): Promise<IUser | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    return null;
  }
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    username: user.username,
    name: user.name,
    dob: user.dob as Date,
    bio: user.bio as string,
    avatar: user.avatar as string,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export { validateUser };
