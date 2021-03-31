"use strict";
const doc = document; //global document object window.document

const searchSubmit = doc.getElementById("searchSubmit");
searchSubmit.onclick = () => {
    // get pattern
    const patternEl = doc.getElementById("pattern");
    const pattern = patternEl.value;
    const re = new RegExp(pattern, "g");

    // get string
    let searchString = "";
    const incomingEl = doc.getElementById("incoming");
    searchString = incomingEl.value;

    let matchArray;
    let resultString = "<pre>";
    let first = 0;
    let last = 0;

    // find each match != null
    while (matchArray = re.exec(searchString)) {
        last = matchArray.index;
        // get all of string up to match, concatenate
        resultString += searchString.substring(first, last);
        // add matched, with class
        resultString += "<span class='found'>" + matchArray[0] + "</span>";
        first = re.lastIndex;
    }

    // finish off string
    resultString += searchString.substring(first, searchString.length);
    resultString += "</pre>";
    // insert into page
    const searchResult = doc.getElementById("searchResult");
    searchResult.innerHTML = resultString;
};
//# sourceMappingURL=highlight.js.map