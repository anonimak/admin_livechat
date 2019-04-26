<?php
class CustomerService extends Controller {

    public function __construct() {
        
    }
    public function index() {
        $this->view('customerchat');
        
        
    }
    public function lng($lang){
        $_SESSION['lang'] = $lang;
        $this->index();
    }
    
}