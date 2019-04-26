<?php
  class Users extends Controller{
    public function __construct(){
      $this->userModel = $this->model('M_login');
    }

    public function index(){
      // $this->redirect('home');
    }

    // public function register(){
    //   // Check if logged in
    //   if($this->isLoggedIn()){
    //     redirect('Dashboards');
    //   }

    //   // Check if POST
    //   if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //     // Sanitize POST
    //     $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

    //     $data = [
    //       'name' => trim($_POST['name']),
    //       'email' => trim($_POST['email']),
    //       'password' => trim($_POST['password']),
    //       'confirm_password' => trim($_POST['confirm_password']),
    //     ];

    //     // Validate name
    //     if(empty($data['name'])){
    //       $data['name_err'] = 'Please enter a name';
    //     }

    //     // Validate email
    //     if(empty($data['email'])){
    //         $data['email_err'] = 'Please enter an email';
    //     } else{
    //       // Check Email
    //       if($this->userModel->findUserByEmail($data['email'])){
    //         $data['email_err'] = 'Email is already taken.';
    //       }
    //     }

    //     // Validate password
    //     if(empty($data['password'])){
    //       $password_err = 'Please enter a password.';     
    //     } elseif(strlen($data['password']) < 6){
    //       $data['password_err'] = 'Password must have atleast 6 characters.';
    //     }

    //     // Validate confirm password
    //     if(empty($data['confirm_password'])){
    //       $data['confirm_password_err'] = 'Please confirm password.';     
    //     } else{
    //         if($data['password'] != $data['confirm_password']){
    //             $data['confirm_password_err'] = 'Password do not match.';
    //         }
    //     }
         
    //     // Make sure errors are empty
    //     if(empty($data['name_err']) && empty($data['email_err']) && empty($data['password_err']) && empty($data['confirm_password_err'])){
    //       // SUCCESS - Proceed to insert

    //       // Hash Password
    //       $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);

    //       //Execute
    //       $this->userModel->register($data);
    //       redirect('Users/login');
    //       // if($this->userModel->register($data)){
    //       //   // Redirect to login
    //       //   flash('register_success', 'You are now registered and can log in');
    //       //   redirect('users/login');
    //       // } else {
    //       //    die('Something went wrong');
    //       // }
           
    //     } else {
    //       // Load View
    //       $this->view('admin/header');
    //       $this->view('user/register', $data);
    //       $this->view('admin/footer');
    //     }
    //   } else {
    //     // IF NOT A POST REQUEST

    //     // Init data
    //     $data = [
    //       'name' => '',
    //       'email' => '',
    //       'password' => '',
    //       'confirm_password' => '',
    //       'name_err' => '',
    //       'email_err' => '',
    //       'password_err' => '',
    //       'confirm_password_err' => ''
    //     ];

    //     // Load View
    //     $this->view('admin/header');
    //     $this->view('user/register', $data);
    //     $this->view('admin/footer');
    //   }
    // }
    /*public function logina(){
      // Check if logged in
     

      // Check if POST
      if($_SERVER['REQUEST_METHOD'] == 'POST'){
        // Sanitize POST
        $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        
        $username= $_POST['email'];
        $pass = $_POST['password'];

        $userModel1 = $this->model('M_login');
        $valid= $this->userModel1->login($username,$pass);

        if($valid == false){
          $this->view('test');

        }else{
          $this->view('das');
        }
      }
    }*/

    public function login(){
      // Check if logged in
      if($this->isLoggedIn()){
        $this->redirect('Dashboards');
        echo $this->isLoggedIn();
      }
       // session_start();
      // Check if POST
      if($_SERVER['REQUEST_METHOD'] == 'POST'){
        // Sanitize POST
        $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        
        $data = [       
          'email' => trim($_POST['email']),
          'password' => md5(($_POST['password'])),        
          'email_err' => '',
          'password_err' => '',       
        ];

        // Check for email
        if(empty($data['email'])){
          $data['email_err'] = 'Please enter email.';
        } else {
          // Check for user
          if($this->userModel->findUserByEmail($data['email'])){
            
          } else {
            // No User
            $data['email_err'] = 'This email is not registered.';
          }
        }

        if(empty($data['password'])){
          $data['password_err'] = 'Please enter password.';
        }

        // Make sure errors are empty
        if(empty($data['email_err']) && empty($data['password_err'])){

          // Check and set logged in user
          $loggedInUser = $this->userModel->login($data['email'], $data['password']);

          if($loggedInUser){
            // User Authenticated!
            $this->createUserSession($loggedInUser);
            
            // echo "test";
          } else {
            $data['password_err'] = 'Password incorrect.';
            // Load View
            $this->view('test', $data);
            //echo "berhasil";
          }
          
        } else {
          // Load View
          $this->view('test', $data);

          echo "berhasil";
        }

      } else {
        // If NOT a POST

        // Init data
        $data = [
          'email' => '',
          'password' => '',
          'email_err' => '',
          'password_err' => '',
        ];

        // Load View
        $this->view('test', $data);
      }
    }

    // Create Session With User Info
    public function createUserSession($user){
      
      $_SESSION['id'] = $user['id'];
      $_SESSION['name'] = $user['name']; 
      $_SESSION['nick_name'] = $user['nick_name']; 
      $_SESSION['email'] = $user['email']; 
      $_SESSION['role'] = $user['role'];
      $this->redirect('Dashboards');
    }

    // Logout & Destroy Session
    public function logout(){
      
      session_unset('id');
      session_unset('name');
      session_unset('nick_name');
      session_unset('email');
      session_unset('role');
      session_destroy(); 
      $this->redirect('User/login');

    }
}