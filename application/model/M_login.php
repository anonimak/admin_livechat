<?php
  class M_login extends Model{
    // Add User / Register
    public function register($data){
      // Prepare Query
      $this->db->query('INSERT INTO users (user_name,user_email,user_password,user_role) 
      VALUES (:name, :email, :password, "author")');

      // Bind Values
      $this->db->bind(':name', $data['name']);
      $this->db->bind(':email', $data['email']);
      $this->db->bind(':password', $data['password']);
      
      //Execute
      if($this->db->execute()){
        return true;
      } else {
        return false;
      }
    }

    // Find USer BY Email
    public function findUserByEmail($email){
      $this->db->query("SELECT * FROM user WHERE email = :email");
      $this->db->bind(':email', $email);

      $row = $this->db->single();

      //Check Rows
      if($this->db->rowCount() > 0){
        return true;
      } else {
        return false;
      }
    }

    // Login / Authenticate User
    public function login($email, $password){
      $this->db->query("SELECT * FROM `user` WHERE `email`= :email");
      $this->db->bind(':email', $email);
      $row = $this->db->single();
      
      $hashed_password = $row['pass'];
      if(($password == $hashed_password)){
        return $row;
      } else {
        return false;
      }
    }
    

    // Find User By ID
    public function getUserById($id){
      $this->db->query("SELECT * FROM user WHERE id = :id");
      $this->db->bind(':id', $id);

      $row = $this->db->single();

      return $row;
    }
  }