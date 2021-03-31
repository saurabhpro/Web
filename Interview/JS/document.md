## `window` vs `document`

__Question: Is there any difference between window and document?__

__Answer:__ Yes. JavaScript has a global object and everything runs under it. `window` is that global object that holds
global variables, global functions, location, history everything is under it. Besides, setTimeout, ajax call (
XMLHttpRequest), console or localStorage are part of window.

`document` is also under window. document is a property of the window object. document represents the DOM and DOM is the
object oriented representation of the html markup you have written. All the nodes are part of document. Hence you can
use getElementById or addEventListener on document. These methods are not present in the window object.

```js
window.document === document; //true
window.getElementById; //undefined
document.getElementById; //function getElementById() { [native code] }
```

## attribute vs property

__Question: Is attribute similar to property?__

__Answer:__ `attributes` are just like attribute in your html tag (XML style attribute) inside the starting
tag. `html attributes` are exposed to the DOM via `property`.

- Hence, a `property` is created when DOM is parsed for each attribute in the html tag.
    - If you change an attribute only the value of the property will change. However, the value of attribute will remain
      same.

## DOM Query

__Question: What are the different ways to get an element from DOM?__

Answer: You can use the following methods in document

- __getElementById__ to get a element that has the provided Id.
- __getElementsByClassName__ to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a
  class name.
- __getElementsByTagName__ to get a nodelist by the provided tag name.
- querySelector you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.
- querySelectorAll will return a non-live nodelist by using depth-first pre order traversal of all the matched elements.
  Non-live means, any changes after selecting the elements will not be reflected.
- getElementsByName returns the list of elements by the provided name of the html tag
- getElementsByTagNameNS returns elements with particular tag name within the provided namespace

If you have an ID of an element `getElmentById` is the fastest way to select an element. However, you should not have so
many ID in you document to avoid style repetition. css class `getElementsByClassName` is the second quickest way to
select an element