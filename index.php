<?
include "lib/sqlConnect.php";
include "lib/sql.php";


echo createNewValue(2);


if (isset($_GET['url'])) {
	$id = $_GET['url'];
	settype($id, 'integer');
} else {
	$id = 0;
}

session_start();
if (isset($_SESSION['saveAll'])) {
	$saveAll = addslashes($_SESSION['saveAll']);
	$saveAll = str_replace("\n", "", $saveAll);	
} else {
	$saveAll = '';
}

if ($id > 0) {
	include "main.php";
} else {
//	include "list.php";
}


?>


