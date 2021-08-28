'use strict';
const users = [
  {
    id: 1,
    name: 'Saurabh',
    schoolId: 101,
  },
  {
    id: 2,
    name: 'Jessica',
    schoolId: 999,
  },
];
const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86,
  },
  {
    id: 2,
    schoolId: 999,
    grade: 100,
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80,
  },
];
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id == id);
    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id = ${id}`);
    }
  });
};
const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    if (schoolId > 100) {
      resolve(grades.filter((grade) => grade.schoolId == schoolId));
    } else {
      reject('Wrong School Id');
    }
  });
};
const getStatusAlt = async (userId) => {
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);
  let average = 0;
  if (grades.length > 0) {
    average =
      grades.map((grades) => grades.grade).reduce((a, b) => a + b) /
      grades.length;
  }
  return `${user.name} has a ${average}% in the class`;
};
getStatusAlt(2)
  .then((status) => {
    console.log(status);
  })
  .catch((err) => {
    console.log(err);
  });
Promise.resolve(1)
  .then((x) => x + 2)
  .then((x) => {
    throw new Error('foo');
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);
