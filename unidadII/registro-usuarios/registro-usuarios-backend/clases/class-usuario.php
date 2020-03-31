<?php

    class Usuario{
        private $nombre;
        private $apellido;
        private $fechaNacimiento;
        private $pais;

        public function __construct($nombre,$apellido,$fechaNacimiento,$pais){
                $this->nombre = $nombre;
                $this->apellido = $apellido;
                $this->fechaNacimiento = $fechaNacimiento;
                $this->pais = $pais;
        }

        /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @return  self
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        

        /**
         * Get the value of apellido
         */ 
        public function getApellido()
        {
                return $this->apellido;
        }

        /**
         * Set the value of apellido
         *
         * @return  self
         */ 
        public function setApellido($apellido)
        {
                $this->apellido = $apellido;

                return $this;
        }

        /**
         * Get the value of fechaNacimiento
         */ 
        public function getFechaNacimiento()
        {
                return $this->fechaNacimiento;
        }

        /**
         * Set the value of fechaNacimiento
         *
         * @return  self
         */ 
        public function setFechaNacimiento($fechaNacimiento)
        {
                $this->fechaNacimiento = $fechaNacimiento;

                return $this;
        }

        /**
         * Get the value of pais
         */ 
        public function getpais()
        {
                return $this->pais;
        }

        /**
         * Set the value of pais
         *
         * @return  self
         */ 
        public function setpais($pais)
        {
                $this->pais = $pais;
                return $this;
        }

        public function __toString(){
            return $this->nombre ." ".$this->apellido.
            " (".$this->fechaNacimiento.",".$this->pais.")";
        }

        //CRUD
        public function guardarUsuario(){

        }

        public function obtenerUsuario(){

        }

        public function actualizarUsuario(){

        }

        public function eliminarUsuarios(){
                
        }
    }

?>