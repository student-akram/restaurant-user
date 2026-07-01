import { FIREBASE_API_KEY } from "../utils/constants";

const BASE_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts";

export const signup = async (name, email, password) => {
  const response = await fetch(
    `${BASE_URL}:signUp?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  localStorage.setItem("token", data.idToken);

  await fetch(
    `${BASE_URL}:update?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: data.idToken,
        displayName: name,
        returnSecureToken: true,
      }),
    }
  );

  return data;
};

export const login = async (email, password) => {
  const response = await fetch(
    `${BASE_URL}:signInWithPassword?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  localStorage.setItem("token", data.idToken);

  return data;
};

export const forgotPassword = async (email) => {
  const response = await fetch(
    `${BASE_URL}:sendOobCode?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email,
      }),
    }
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  return data;
};

export const getProfile = async (token) => {
  const response = await fetch(
    `${BASE_URL}:lookup?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: token,
      }),
    }
  );

  const data = await response.json();

  return data.users[0];
};