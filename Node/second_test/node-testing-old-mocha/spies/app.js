import { saveUser } from './db.js';

export function handleSignup(email, password) {
  // Check if email already exists
  saveUser({
    email,
    password,
  });
  // Send the welcome email
}
