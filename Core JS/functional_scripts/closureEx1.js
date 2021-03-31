var func = (arg) => {
    let outer = "Visible";
    let innerFn = () => {
        console.log(outer)
        console.log(arg)
    }
    return innerFn
}

var closureFn = func(5);
closureFn();


const forEachT = (array, func) => {
    for (let val of array)
        func(val)
}

const tap = (value) =>
    (fn) => (typeof (fn) === 'function' && fn(value),
            console.log("function " + value)
    )
//in Javascript the (exp1,exp2) means it will execute the two arguments and return the result of the second expression

forEachT([1, 2, 3], (a) =>
    tap(a)(() => {
            //surprised to see this inner fn method is working without arg?
            // above replace () with (h) and below log(h) and then understand why fn(value) worked ?
            console.log(a)
        }
    )//for inner fn
)
