ngFor use to looping

# How to delte from an array in JS/TS
```typescript
delete myArray[key];
```
Note that this sets the element to null. _So the ngFor won't be able to ignore it (since the index will have null)_

Better to use the splice keyword:

```typescript
var index = myArray.indexOf(key, 0);
if (index > -1) {
    myArray.splice(index, 1);
}
```