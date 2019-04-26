<?php
class Home extends Controller {
    public function __construct() {
        
    }
    public function index() {
        $this->view('test');
        
        
    }
    public function lng($lang){
        $_SESSION['lang'] = $lang;
        $this->index();
    }
    
}