/*
The code sample starts with the two classes that will act as our mixins. You can see each one is focused on a particular activity or capability.
We’ll later mix these together to form a new class from both capabilities.
*/
// Disposable Mixin
class Disposable {
    dispose() {
        this.isDisposed = true;
    }
}
// Activatable Mixin
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
/**
 * Next, we’ll create the class that will handle the combination of the two mixins.
 * instead of using extends, we use implements. This treats the classes as interfaces,
 * and only uses the types behind Disposable and Activatable rather than the implementation.
 *
 * This means that we’ll have to provide the implementation in class.
 * Except, that’s exactly what we want to avoid by using mixins.
 *
 * @class SmartObject
 * @implements {Disposable}
 * @implements {Activatable}
 */
class SmartObject {
    constructor() {
        /*
         * we create stand-in properties and their types for the members that will come from our mixins.
         * This satisfies the compiler that these members will be available at runtime.
         */
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }
}
//mix our mixins into the class, creating the full implementation.
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
/**
 * we create a helper function that will do the mixing for us. This will run through the properties of each
 * of the mixins and copy them over to the target of the mixins, filling out the stand-in properties with
 * their implementations.
 *
 * @param {*} derivedCtor
 * @param {any[]} baseCtors
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
//# sourceMappingURL=mixins.js.map