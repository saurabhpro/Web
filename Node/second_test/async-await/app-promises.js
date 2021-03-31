const users = [{
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

const grades = [{
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

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((usr) => usr.id == id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id = ${id}`);
        }
    });
}

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId == schoolId));
    })
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

const getStatusAlt = async (userId) => {
    const user = await getUser(userId); // also return resolved part
    const grades = await getGrades(user.schoolId);

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