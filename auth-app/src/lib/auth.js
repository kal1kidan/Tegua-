// src/lib/auth.js

const USERS_KEY = "users";
const SESSION_KEY = "session";

// Save new user
export const signupUser = (user) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  // Check for existing username/email
  const exists = users.some(
    (u) => u.username === user.username || u.email === user.email
  );
  if (exists) return false;

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

// Validate login
export const loginUser = ({ usernameOrEmail, password }) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(
    (u) =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
  }
  return null;
};

// Session management
export const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY));
export const clearSession = () => localStorage.removeItem(SESSION_KEY);