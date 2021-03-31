const doc: Document = document;	//global document object window.document

const searchSubmit: HTMLButtonElement = doc.getElementById("searchSubmit") as HTMLButtonElement;

searchSubmit.onclick = () => {
    // get pattern
    const patternEl: HTMLInputElement = doc.getElementById("pattern") as HTMLInputElement;
    const pattern = patternEl.value;
    const re = new RegExp(pattern, "g");

    // get string
    let searchString: string = "";
    const incomingEl: HTMLTextAreaElement = doc.getElementById("incoming") as HTMLTextAreaElement;
    searchString = incomingEl.value;

    let matchArray: RegExpExecArray | null;
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
    const searchResult: HTMLDivElement = doc.getElementById("searchResult") as HTMLDivElement;
    searchResult.innerHTML = resultString;
};
