<?php
class Dashboards extends Controller {

    public function __construct()
    {
        if($this->isLoggedIn()){
            // $this->dashboardModel = $this->model('Dashboard');
            // $this->postModel = $this->model('Post');
        } else {
            $this->redirect('Users/login');
        }
    }


    public function index(){
        $this->template('home',false);
    }
    
    public function template($page, $active){
        $this->view('admin/templates/header');
        $this->view('admin/templates/sidebar', ['page' => $active]);
        $this->view('admin/templates/navbar');
        $this->view('admin/dashboard/'.$page);
        $this->view('admin/templates/footer');
        // $this->view('admin/templates/bottom');
    }

}