<?php

class DBController{
    //database connection properties
    protected $host ='localhost';
    protected $user ='root';
    protected $password = '';
    protected $database ='shop';

    //conection property
    public $con = null;


    //call constracture
    public function __construct(){

    }
    
}