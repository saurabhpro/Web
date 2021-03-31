const forEachT = (array, func) => {
    for (let i = 0; i < array.length; i++)
        func(array[i])
}

const checkIfEven = (predicate, func) => {
    if (!predicate)
        func()
}

forEachT([1, 2, 3, 4, 5, 6, 7, 8, 9],
    num => {
        checkIfEven((num % 2),
            () => console.log(num + " is even"))
    }
)
