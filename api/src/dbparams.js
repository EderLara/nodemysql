module.exports={
    database: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'actnode',
    }
}

/* Script de Base de Datos:

    -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema actnode
-- -----------------------------------------------------
-- Actividad de NodeJS

-- -----------------------------------------------------
-- Schema actnode
--
-- Actividad de NodeJS
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `actnode` DEFAULT CHARACTER SET utf8 ;
USE `actnode` ;

-- -----------------------------------------------------
-- Table `actnode`.`nodemysql`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `actnode`.`nodemysql` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Usuario` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(155) NOT NULL,
  `Nombre` VARCHAR(255) NOT NULL,
  `Cedula` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Administrador` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Usuario_UNIQUE` (`Usuario` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


*/