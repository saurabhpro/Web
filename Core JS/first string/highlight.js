<!DOCTYPE html>
<html>
<head>
<title>Searching for strings</title>
<style>
.found
{
  background-color: #ff0;
}
</style>

</head>
<body>
	<form id="textsearch">
		<textarea id="incoming" cols="150" rows="10">
		</textarea>
		<p>Search pattern: <input id="pattern" type="text" />
		</p>
	</form>
	<button id="searchSubmit">Search for pattern</button>
		
	<div id="searchResult"></div>

	<script>
		  document.getElementById("searchSubmit").onclick=function() {

		  // get pattern
		  var pattern = document.getElementById("pattern").value;
		  var re = new RegExp(pattern, "g");

		  // get string
		  var searchString = document.getElementById("incoming").value;

		  var matchArray;
		  var resultString = "<pre>";
		  var first = 0;
		  var last = 0;

		  // find each match != null
		  while ((matchArray = re.exec(searchString))) {
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
		  document.getElementById("searchResult").innerHTML = resultString;
	  };

	</script>
</body>
</html>