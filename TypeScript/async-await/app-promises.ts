type User = { id: number, name: string, schoolId: number };

const users: User[] = [{
    id: 1,
    name: 'Saurabh',
    schoolId: 101
},
{
    id: 2,
    name: 'Jessica',
    schoolId: 999
}
];

type Grade = { id: number, schoolId: number, grade: number };

const grades: Grade[] = [{
    id: 1,
    schoolId: 101,
    grade: 86
},
{
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}
];

const getUser = (id: number): Promise<User> => {
    return new Promise((resolve, reject) => {
        const user: User | undefined = users.find((user) => user.id == id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id = ${id}`);
        }
    });
}

const getGrades = (schoolId: number): Promise<Array<Grade>> => {
    return new Promise((resolve, reject) => {
        if (schoolId > 100) {
            resolve(grades.filter((grade) => grade.schoolId == schoolId));
        }
        else {
            reject('Wrong School Id');
        }
    });
}

// Promise chain 
// Andrew has a 83% in this class
// const getStatus = (userId) => {
//     let user;
//     return getUser(userId)
//         .then((tmpuser) => {
//             user = tmpuser;
//             return getGrades(user.schoolId);
//         })
//         .then((grades) => {
//             //average
//             let average = 0;

//             if (grades.length > 0) {
//                 average = grades.map((grades) => grades.grade).reduce((a, b) => a + b) / grades.length;
//                 //return our string
//             }

//             return `${user.name} has a  ${average}% in the class`;
//         })
// }5

// aysnc await
/* () => {
    return new Promise((resolve, reject)=>{
        resolve('Mike');
    })
}*/

const getStatusAlt = async (userId: number) => {
    const user: User = await getUser(userId); // also return resolved part
    const grades: Grade[] = await getGrades(user.schoolId);

    //average
    let average = 0;

    if (grades.length > 0) {
        average = grades.map((grades) => grades.grade).reduce((a, b) => a + b) / grades.length;
        //return our string
    }

    return `${user.name} has a ${average}% in the class`;
    // console.log(user, grades);
}

// console.log(getStatusAlt());        // prints = Promise { 'Mike' }

// hence we can chain then to it
getStatusAlt(2)
    .then((status) => {
        console.log(status);
    }).catch((err) => {
        // if await throws a error - it is catched by catch()
        console.log(err);
    })

// getGrades(101).then((grades) => {
//         console.log(grades);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// getUser(2)
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// getStatus(1)
//     .then((status) => {
//         console.log(status);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

Promise.resolve(1)
    .then((x) => x + 2)
    .then((x) => {
        throw new Error('foo')
    })
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log(x))
    .catch(console.error)

// function aaa() {
//     return
//     {
//         test: 1
//     };
// }

// console.log(typeof aaa());




// app.all("*", function(req, res, next) {
//     // not logged in
//     if (!req.user) {
//       res.render("loginError");
//     } 
//     next();
//   });

// let m = []
// console.log(m[0]);
// undefined