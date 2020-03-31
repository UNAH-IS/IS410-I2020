<?php

    class Usuario{
        private $nombre;
        private $apellido;
        private $fechaNacimiento;
        private $genero;

        public function __construct($nombre,$apellido,$fechaNacimiento,$genero){
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->fechaNacimiento = $fechaNacimiento;
            $this->genero = $genero;
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
         * Get the value of genero
         */ 
        public function getGenero()
        {
                return $this->genero;
        }

        /**
         * Set the value of genero
         *
         * @return  self
         */ 
        public function setGenero($genero)
        {
                $this->genero = $genero;
                return $this;
        }

        public function __toString(){
            return $this->nombre ." ".$this->apellido.
            " (".$this->fechaNacimiento.",".$this->genero.")";
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