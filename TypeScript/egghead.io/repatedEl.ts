/**
 * Simple TS function to return the first repeated element found in an array
 * 
 * @export
 * @template T 
 * @param {T[]} array 
 * @returns {T} 
 */
export function repeatedItem<T>(array: T[]): T {

    /*
    //common part - correct
    We start off by creating a function which takes an array of type t items, 
    and returns a repeated item, if any. Within the function, 
    we will throw an error if no item repetition is found.
    */

    /*
    //not-optimal solution
    Intuitively, we can check item repetition by iterating through all the items of the array one by one, 
    and for each item, checking it against any items that appear further in the array. 
    We'll start the second iteration from add plus one.

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i];
        }
    }

    If the current item and some item on the right of it matches, we have found a duplicate and we can return it. 
    This implementation does work fine. However, due to the two loops, the worst-case runtime is of the order n^2, 
    where n is the length of the array.
    */

    /*
    //optimal solution
    WE CAN DO BETTER BY USING A DATA STRUCTURE DESIGNED FOR CHECKING OBJECT UNIQUENESS. 

    Obviously, we're going to use a set. We start off by creating a set for items of type T. 
    We loop through each item in the array. If an item of the same value already exists in the set, 
    we have found a duplicate, and we return it.

    Otherwise, we add this item to the set and continue. Once the loop completes, we throw the same as before. 
    Since we only loop through the items in the array once, doing constant work in each loop thanks 
    to the set data structure, the runtime now falls to the order of n, where n is the length of the array.
    */

    const set = new Set<T>();

    for (const item of array) {
        if (set.has(item)) return item;
        else set.add(item);
    }

    throw new Error("No Item Repetetion");
}