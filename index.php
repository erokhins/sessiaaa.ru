<?
if (isset($_GET['url'])) {
	$id = $_GET['url'];
	settype($id, 'integer');
} else {
	$id = 0;
}








?>
<!DOCTYPE html>
<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Bootstrap 101 Template</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="/css/sessiaaa.css" rel="stylesheet" media="screen">
		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/js/jquery.dragsort-0.4.min.js"></script>
	
		<script src="/js/sessiaaa.js"></script>
		<script src="/js/render.js"></script>
		
		 <style>
</style>

    </head>
    <body>
		<h1 class="text-center">Hello, Sessia number <?=$id?></h1>


	
	
<!-- Site start -->
<div class="container-fluid" >				

	<div class="">
		<div style="width:70%; display:inline-block">
			<div id="myLabel">label</div>
			<ul id="sortable" class="sortable">
				
<script>
	for (i = 0; i < 40; i++) {
		document.write("<li>"+Render.simpleSticker('st'+i, i, '&nbsp;')+"</li>");
		
	}
	
</script>
			</ul>
		</div>
		<div style="width:20%; display:inline-block">
			<div class="well ">
				<p class="text-info">Добавлять отсюда:</p>
					
				<table width=100%><tr><td align="center">

<ul class="sortable" id="sortable_menu" >				
</ul>
				
				</td></tr></table>
					
				
				
		</div>
	</div>
</div>		
	
<!-- Site end -->
		
		


		


<div id="value_modal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">Set new Value</h3>
	</div>
		<div class="modal-body">
			<input type="hidden" id="value_type">
			<input type="hidden" id="value_id">
			<p>Input new value: <input id="value_input" type="text"></p>	
		</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
		<button class="btn btn-primary" data-dismiss="modal" aria-hidden="true" onclick="Event.applyChangeValue()">Apply</button>
	</div>
</div>
		
		
				<script>
			test();
			var fuckY = Render.simpleSticker('0000', '', '&nbsp;');
			document.counter = 40;
			function step() {
				$("#sortable_menu").html(Render.allFunny('st' + document.counter));
				document.counter = document.counter + 1;
				log(document.counter);
			}
			
			step();
			step();
			$(".sortable").dragsort({ 
				dragSelector: ".number", 
				itemSelector: "li", 
				dragEnd: function() { step() }, 
				dragBetween: true, 
				placeHolderTemplate: "<li class = 'emptyLi'>"+fuckY+"</li>" 
			});
			$("#value_input").enterKey(function () {
				Event.enterValueInput();
			})
		</script>
    </body>
</html>
