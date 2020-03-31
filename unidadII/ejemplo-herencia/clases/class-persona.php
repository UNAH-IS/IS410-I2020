<?php 

    abstract class Persona{
        protected $nombre;
        protected $apellido;
        protected $edad;
        protected $genero;
        protected $carrera;

        public function __construct(
            $nombre,
            $apellido,
            $edad,
            $genero,
            $carrera
        ){
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->edad = $edad;
            $this->genero = $genero;
            $this->carrera = $carrera;
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
         * Get the value of edad
         */ 
        public function getEdad()
        {
                return $this->edad;
        }

        /**
         * Set the value of edad
         *
         * @return  self
         */ 
        public function setEdad($edad)
        {
                $this->edad = $edad;

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

        /**
         * Get the value of carrera
         */ 
        public function getCarrera()
        {
                return $this->carrera;
        }

        /**
         * Set the value of carrera
         *
         * @return  self
         */ 
        public function setCarrera($carrera)
        {
                $this->carrera = $carrera;

                return $this;
        }

        public function matricular(){
            echo 'Matricular persona<br>';
        }
        public abstract function reprobar();
        public abstract function aprobar();
    }

?>