import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../constants/routes";
import { doesUsernameExists } from "../services/firebase";

import FirebaseContext from "../context/firebase";

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid =
    password === "" || email === "" || username === "" || fullName === "";

  const handleSignup = async (e) => {
    e.preventDefault();

    const userNameExists = await doesUsernameExists(username);

    if (!userNameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        //authentication
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // add to firestore
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          email: email.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(DASHBOARD);

      } catch (error) {
        setEmail("");
        setPassword("");
        setUsername("");
        setError(error.message);
      }
    }else{
        setError('An account with entered Email already exists')
    }
  };

  useEffect(() => {
    document.title = "Signup | Instagram";
  }, []);

  return (
    <div className="mx-auto container flex  max-w-screen-md items-center h-screen">
      <div className=" flex w-3/5 ">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iphone with profile"
          className="max-w-xs"
        />
      </div>
      <div className="flex flex-col w-2/5 ">
        <div className="bg-white p-4 items-center mb-4 border border-gray-primary">
          <h1 className="flex justify-center w-full p-4">
            <img src="/images/logo.png" alt="" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary"> {error} </p>}

          <form method="POST" onSubmit={handleSignup} className="p-4 ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Enter your email address"
              placeholder="Email Address"
              className="text-sm text-grey-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-4"
            />

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-label="Enter your full name"
              placeholder="Full name"
              className="text-sm text-grey-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-4"
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Enter your user name"
              placeholder="User name"
              className="text-sm text-grey-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-4"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Enter your password"
              placeholder="Password"
              className="text-sm text-grey-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-4"
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium w-full text-white rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-col items-center rounded bg-white w-full p-4 border border-gray-primary">
          <p className="text-sm">
            Already have an accound ?
            <Link to={LOGIN} className="font-bold text-blue-medium ">
              {" "}
              Login{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
