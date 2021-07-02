import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const showAvatar = async () => {
  // read our JSON
  let response = fs.readFileSync(path.resolve('./data/user.json'));

  let user = JSON.parse(response);
  console.log(user);
  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  console.log(githubUser);
  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  return githubUser;
};

showAvatar();

////////////////////////////////

////////////////////////////////

// // This code:
async function f1() {
  return Promise.resolve(1);
}

async function f2() {
  await Promise.reject(new Error('Whoops!'));
}
// …is the same as this:

async function f3() {
  return 1;
}

async function f4() {
  throw new Error('Whoops!');
}
