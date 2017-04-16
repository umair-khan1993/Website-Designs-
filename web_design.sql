/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : websitedesigns

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-04-16 20:40:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `web_design`
-- ----------------------------
DROP TABLE IF EXISTS `web_design`;
CREATE TABLE `web_design` (
  `design_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `body` varchar(1000) DEFAULT NULL,
  `subject_url` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`design_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_design
-- ----------------------------
INSERT INTO `web_design` VALUES ('32', 'LEXSTEP.COM', 'LexStep was founded by two former city lawyers, Alexander Isaacs and Michael Hagai. We found cold calls from recruitment agents annoying and ineffective. So we built an exclusive site, where the best lawyers can see all job opportunities relevant to them in one place and connect directly with leading law firms in just a few clicks. LexStep caters for top lawyers in all practice areas at all PQE levels, including trainees exploring their options on qualification', null, '2017-04-16 10:11:37', '2017-04-16 10:11:37');
INSERT INTO `web_design` VALUES ('33', 'eMumba', 'eMumba is a technology company committed to powering other technology startups and enterprises, working alongside on in-house products. They specialize in product design, UX & Quality assurance.', 'http://emumba.com', '2017-04-16 10:14:11', '2017-04-16 10:14:11');
INSERT INTO `web_design` VALUES ('34', 'Cricout - Social Network for Cricket', 'Cricket is passion. Cricket is love. And Cricket is fun when you follow it with friends! No more is following Cricket online a lonely experience. Cricout is enabling friends from around the world to get together and have fun following the game.\n \n Founded in early 2012 and based out of Islamabad (eMumba) and Sunnyvale (AllOurGames), Cricout constitutes a super motivated team trying to redefine how Cricket is followed online.', 'http://cricout.com', '2017-04-16 10:36:46', '2017-04-16 10:36:46');
