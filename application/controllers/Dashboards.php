<?php
class Dashboards extends Controller {

    public function __construct()
    {
        if($this->isLoggedIn()){
            $this->model = $this->model('M_dashboard');
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


    // Ajax handler
    public function getProductsbyCs($id)
    {   
        $data = $this->model->getProductsbyCs($id);
        echo json_encode($data);
    }

}