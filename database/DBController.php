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
        $this->con = mysqli_connect($this->host,$this->user,$this->password,$this->database);
        if($this->con->connect_error){
            echo"Fail".$this->con->connect_error;
        }
        echo'connection Successful!';

    }
  
}
  //DB controller object
  $db = new DBController();
    