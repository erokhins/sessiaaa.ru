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
    </head>
    <body>
		<h1 class="text-center">Hello, Sessia number <?=$id?></h1>

<!-- Site start -->
<div class="container-fluid">				
	<div class="row-fluid">
		<div class="span9">
			1
		</div>
		<div class="span3">
			<div class="well ">
				<p class="text-info">Добавлять отсюда:</p>
					
				<table width=100%><tr><td align="center">
					<table class="well text-success">
						<tr><td class = "sticker well">13</td></tr>
						<tr><td class ="btn-group">
							<button class="btn btn-success">:)</button>
							<button class="btn btn-warning">:(</button>
							<button class="btn btn-danger">:'(</button>
							<button class="btn btn-info">3 <i class="icon-envelope"></i></button>
							<button class="btn">..</button>
						</td></tr>
					</table>
					<table class="well text-error">
						<tr><td class = "sticker well">14</td></tr>
						<tr><td class ="btn-group">
							<button class="btn btn-success">:)</button>
							<button class="btn btn-warning">:(</button>
							<button class="btn btn-danger">:'(</button>
							<button class="btn btn-info">3 <i class="icon-envelope"></i></button>
							<button class="btn">C</button>
						</td></tr>
					</table>
				
				</td></tr></table>
					
				
				
		</div>
	</div>
</div>		
	
<!-- Site end -->
		
		
		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="/bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
