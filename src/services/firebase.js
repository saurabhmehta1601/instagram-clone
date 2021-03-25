import { firebase } from "../lib/firebase";

export const doesUsernameExists = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
};

export const getUserById = async (uid) => {
  const result =await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .get();

    const user  =result.docs.map(item => ({
      ...item.data(),
      docId:item.id
    }))

    return user
};
