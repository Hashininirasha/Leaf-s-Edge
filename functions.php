<?php

//require MySql Connection
require ('database/DBController.php');

//require product class
require ('database/product.php');

 //DB controller object
 $db = new DBController();

 //product object
 $product = new Product($db);



 