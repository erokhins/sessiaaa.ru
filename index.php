<?
include "lib/sqlConnect.php";
include "lib/sql.php";

if (isset($_GET['url'])) {
	$id = $_GET['url'];
	settype($id, 'integer');
} else {
	$id = 0;
}


$userId = -1;

$expire=time()+60*60*24*30*256;
if (isset($_COOKIE['user']) && isset($_COOKIE['userCheck'])) {
	if (getCheck($_COOKIE['user']) == $_COOKIE['userCheck']) {
		$userId = $_COOKIE['user'];
	}
}
if ($userId == -1) {
	$userId = createNewUser(time());
	setcookie("user", $userId, $expire);
	setcookie("userCheck", getCheck($userId), $expire);
}


if ($id > 0) {
	$val = getValue($id);
	if ($val != -1 && $val['userId'] == $userId) {			
		$saveAll = addslashes($val['value']);
		$saveAll = str_replace("\n", "", $saveAll);	
		include "main.php";
	} else {
		refer('/');
	}
} else {
	if (isset($_GET['new'])) {
		$newValueId = createNewValue($userId);
	} else {
		$values = getValues($userId);
		if (sizeof($values) > 0) {
			$newValueId = $values[sizeof($values) - 1]['id'];
		} else {
			$newValueId = createNewValue($userId);			
		}
	}
	refer('/'.$newValueId);
}


?>


