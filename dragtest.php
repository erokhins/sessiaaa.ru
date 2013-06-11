<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Draggable + Sortable</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css" />
<style>
ul { list-style-type: none; margin: 0; padding: 0; margin-bottom: 10px; }
li { margin: 5px; padding: 5px; width: 150px; }
#sortable { list-style-type: none; margin: 0; padding: 0; width: 500px; border:1px solid red; }
.ggg { display:inline-block; width: 100px; height: 90px; font-size: 4em; text-align: center; }

</style>
<script>
$(function() {
$( "#sortable" ).sortable({
revert: false
});
$( "#draggable" ).draggable({
connectToSortable: "#sortable",
helper: "clone",
revert: "invalid"
});
$( "ul, li" ).disableSelection();
});
</script>
</head>
<body>
	<ul>
		<li id="draggable" class="ui-state-highlight ggg">D</li>
	</ul>
	<ul id="sortable">
		<li class="ui-state-default ggg">1</li>
		<li class="ui-state-default ggg">2</li>
		<li class="ui-state-default ggg">3</li>
		<li class="ui-state-default ggg">4</li>
		<li class="ui-state-default ggg">5</li>
	</ul>
</body>
</html>
