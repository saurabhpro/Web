## getElementsByAttribute

**Question: If you need to implement getElementByAttribute, how would you implement it?**

**Answer:** First, get all the elements in the DOM.

You can either get it by Tag Name '\*' and then check whether they have the particular attribute.

In this case, even if attribute is null that will be captured. If you need to check the value, you should be able to do
it by passing one extra parameter and comparing it in the if block.

function getElementsByAttribute(attribute){ var allElements = document.getElementsByTagName('\*'), elm, found=[]; for (
var i = 0; i < allElements.length; i++)
{ elm = allElements[i]; if (elm.getAttribute(attribute))
{ found.push(elm); } } return found; }

// todo: prettify this ugly code function getElementsByAttribute2(attr: string): Element[] { var found: Element[] = [],
child;

function getNodeText(node) { if (node && node.childNodes && node.childNodes.length) { for (var i = 0, len =
node.childNodes.length; i < len; i++) { child = node.childNodes[i]; if (child && child.getAttribute &&
child.getAttribute(attr)) { found.push(child); } getNodeText(child); } } else { if (node.getAttribute &&
node.getAttribute(attr)) { found.push(node); } } } getNodeText(document.body); return found; }
