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
					<table class="well text-success" style="background-color:white">
						<tr><td class = "sticker ">13</td></tr>
						<tr><td  align = right>
							<div class = "btn-group">
								<button class="btn">..</button>
							</div>
						</td></tr>
					</table>
					
					<table class="well sticker">
						<tr><td class = "number"><img src="/img/sleep.jpg"/></td></tr>
						<tr><td align = "center" >
							<span>
								<div class ="btn-group text-right dropdown row-fluid"> 
								   <button class="btn aaa">Сон</button>
									<button class="btn dropdown-toggle aaa2" data-toggle="dropdown">
										<span class="caret"></span>
									</button>
								</div>
							</span>
						</td></tr>
					</table>
					
					
					<table class="well sticker">
						<tr><td class = "number">13</td></tr>
						<tr><td align = "center">
							<div class ="btn-group text-right dropdown"> 
								<button class="btn btn-success">:)</button>
								<button class="btn btn-warning">:(</button>
								<button class="btn btn-danger">:'(</button>
								<button class="btn btn-info">1 <i class="icon-envelope"></i></button>
								<button class="btn dropdown-toggle" data-toggle="dropdown">
									<span class="caret"></span>
								</button>
							</div>
						</td></tr>
					</table>
					
					<table class="well text-success">
						<tr><td class = "sticker ">13</td></tr>
						<tr><td class ="btn-group">
							<button class="btn btn-success">:)</button>
							<button class="btn btn-warning">:(</button>
							<button class="btn btn-danger">:'(</button>
							<button class="btn btn-info">3 <i class="icon-envelope"></i></button>
							<button class="btn">..</button>
						</td></tr>
					</table>
					<table class="well text-error">
						<tr><td class = "sticker ">14</td></tr>
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
		<script src="/js/sessiaaa.js"></script>
		<script>
			test();
		</script>
		
    </body>
</html>
