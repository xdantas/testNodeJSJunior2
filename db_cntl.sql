SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `db_cntl` DEFAULT CHARACTER SET utf8 ;

USE `db_cntl` ;

CREATE TABLE IF NOT EXISTS `db_cntl`.`tb_cadastros` (
  `cd_shipping` INT NOT NULL AUTO_INCREMENT,
  `ds_firstname` VARCHAR(20) NOT NULL,
  `ds_lastname` VARCHAR(20) NOT NULL,
  `ds_email` VARCHAR(40) NOT NULL,
  `nr_phone` CHAR(15) NOT NULL,
  `ds_language` VARCHAR(20) NOT NULL,
  `ds_country` VARCHAR(20) NOT NULL,
  `ds_billingone` VARCHAR(40) NOT NULL,
  `ds_billingtwo` VARCHAR(40) NOT NULL,
  `ds_billingcity` VARCHAR(40) NOT NULL,
  `ds_billingregion` VARCHAR(40) NOT NULL,
  `nr_billingzip` CHAR(12) NOT NULL,
  `ds_shippingone` VARCHAR(40) NOT NULL,
  `ds_shippingtwo` VARCHAR(40) NOT NULL,
  `ds_shippingcity` VARCHAR(40) NOT NULL,
  `ds_shippingregion` VARCHAR(40) NOT NULL,
  `nr_shippingzip` CHAR(12) NOT NULL,
  `qt_trackers` INT(10) NOT NULL,
  PRIMARY KEY (`cd_shipping`));
  