<?php
    include_once('class-persona.php');
    class Maestro extends Persona{
        private $numeroEmpleado;
        private $sueldo;
        private $horario;

        public function __construct(
            $nombre,
            $apellido,
            $edad,
            $genero,
            $carrera,
            $numeroEmpleado,
            $sueldo,
            $horario
        ){
            parent::__construct($nombre,$apellido,$edad,$genero,$carrera);
            $this->numeroEmpleado = $numeroEmpleado;
            $this->sueldo = $sueldo;
            $this->horario = $horario;
        }

        

        /**
         * Get the value of numeroEmpleado
         */ 
        public function getNumeroEmpleado()
        {
                return $this->numeroEmpleado;
        }

        /**
         * Set the value of numeroEmpleado
         *
         * @return  self
         */ 
        public function setNumeroEmpleado($numeroEmpleado)
        {
                $this->numeroEmpleado = $numeroEmpleado;

                return $this;
        }

        /**
         * Get the value of sueldo
         */ 
        public function getSueldo()
        {
                return $this->sueldo;
        }

        /**
         * Set the value of sueldo
         *
         * @return  self
         */ 
        public function setSueldo($sueldo)
        {
                $this->sueldo = $sueldo;

                return $this;
        }

        /**
         * Get the value of horario
         */ 
        public function getHorario()
        {
                return $this->horario;
        }

        /**
         * Set the value of horario
         *
         * @return  self
         */ 
        public function setHorario($horario)
        {
                $this->horario = $horario;

                return $this;
        }

        public function reprobar(){
            echo "Maestro reprueba a alumno<br>";
        }
        public function aprobar(){
            echo "Maestro aprueba a alumno<br>";
        }
    }

?>