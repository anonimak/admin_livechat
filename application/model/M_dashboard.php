<?php

class M_dashboard extends Model
{
    public function __construct(){
        parent::__construct();
        // table
        $this->table = "cs";
        $this->table2 = "m_product";

        // table id
        $this->id = "id";
        $this->id2 = "product_id";


    }
    public function getProductsbyCs($id){
        $this->db->query("SELECT b.product_id, b.product_name, b.product_description
                            FROM `$this->table` AS a 
                            LEFT JOIN `$this->table2` AS b 
                            ON a.$this->id = b.$this->id
                            WHERE a.$this->id = :id
                        ");
        $this->db->bind(':id', $id);

        $row = $this->db->resultSet();
        return $row;
    }

    // public function get
}
