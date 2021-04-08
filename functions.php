<?php

//require MySql Connection
require ('database/DBController.php');

//require product class
require ('database/topsale.php');

 //DB controller object
 $db = new DBController();

 //product object
 $product = new topsale($db);

print_r($product->getData());

 