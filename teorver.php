<?
$c = 4;
if(isset($_GET['c'])) {
	$c = $_GET['c'];
}
?>
<!DOCTYPE html>
<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Ветвящийся процесс</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		
		<script src="/js/teorver.js">
		
		</script> 
    </head>
    <body onload="startG(<?=$c?>);">
		<table width="100%"><tr><td align = "center">
		
		<canvas width="900px" height="600px" style="border:1px solid black" id="can1"></canvas>
		</td></tr></table>
		
		
	</body>
</html>
