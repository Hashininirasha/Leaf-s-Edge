<?php

// require MySQL Connection
require ('database/DBController.php');

// require Product Class
require ('database/topsale.php');




// DBController object
$db = new DBController();

// Product object
$topsale = new topsale($db);
$topsale_shuffle = $topsale->getData();

print_r($topsale->getData());

 