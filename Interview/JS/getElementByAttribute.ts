function getElementsByAttribute(attribute: string): Element[] {
    const allElements: NodeListOf<Element> = document.getElementsByTagName('*');

    let elm: Element, found = [];
    for (var i = 0; i < allElements.length; i++) {
        elm = allElements[i];

        if (elm.getAttribute(attribute)) {
            found.push(elm);
        }
    }
    return found;
}

getElementsByAttribute('style');
