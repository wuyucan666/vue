/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : webmaster

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-28 20:01:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('3', '项链', '爆款ring奢华很牛�?', '14', '14', '14', 'a3.jpg', '2018/9/26 20:36:34', 'no');
INSERT INTO `goodslist` VALUES ('4', '项链', '跨境热销手饰', '16', '16', '16', 'a4.jpg', '2018/9/26 20:37:10', 'no');
INSERT INTO `goodslist` VALUES ('5', '项链', '白金饰品 ', '36', '36', '36', 'a5.jpg', '2018/9/26 20:39:06', 'no');
INSERT INTO `goodslist` VALUES ('6', '项链', '亚指直销欧美', '488', '488', '8', 'a6.jpg', '2018/9/26 20:41:02', 'no');
INSERT INTO `goodslist` VALUES ('7', '项链', '千色', '133', '133', '15', 'a7.jpg', '2018/9/26 20:41:33', 'no');
INSERT INTO `goodslist` VALUES ('49', '1q', 'sdf ', '1', null, null, null, null, 'no');
INSERT INTO `goodslist` VALUES ('10', '戒指', 'ANI 来自施华�?', '33', '33', '2', 'b2.jpg', '2018/9/26 20:43:59', 'no');
INSERT INTO `goodslist` VALUES ('11', '戒指', '速卖通热销', '10', '10', '10', 'b3.jpg', '2018/9/26 20:44:41', 'no');
INSERT INTO `goodslist` VALUES ('12', '戒指', 'wish爆款 �?', '133', '133', '12', 'b4.jpg', '2018/9/26 20:45:16', 'no');
INSERT INTO `goodslist` VALUES ('13', '戒指', '跨境专供欧美�?', '6', '6', '66', 'b5.jpg', '2018/9/26 20:45:48', 'no');
INSERT INTO `goodslist` VALUES ('14', '戒指', '新款欧美波西�?', '16', '16', '66', 'b6.jpg', '2018/9/26 20:47:32', 'no');
INSERT INTO `goodslist` VALUES ('15', '戒指', 'PKebay速卖', '48', '48', '46', 'b7.jpg', '2018/9/26 20:48:00', 'no');
INSERT INTO `goodslist` VALUES ('16', '戒指', '卖通热销�?', '465', '452', '12', 'b8.jpg', '2018/9/26 20:48:36', 'no');
INSERT INTO `goodslist` VALUES ('17', '手镯', 'EKANI 来自施华', '155', '155', '13', 'c1.jpg', '2018/9/26 20:49:06', 'no');
INSERT INTO `goodslist` VALUES ('18', '手镯', 'LEKANI 来自施华�?', '166', '166', '15', 'c2.jpg', '2018/9/26 20:50:02', 'no');
INSERT INTO `goodslist` VALUES ('19', '手镯', '跨境专供欧美', '999', '144', '15', 'c3.jpg', '2018/9/26 20:50:30', 'yes');
INSERT INTO `goodslist` VALUES ('20', '手镯', '卖通新�?', '166', '166', '16', 'c4.jpg', '2018/9/26 20:51:11', 'no');
INSERT INTO `goodslist` VALUES ('21', '手镯', '速卖通新欧美', '132', '132', '16', 'c5.jpg', '2018/9/26 20:51:49', 'no');
INSERT INTO `goodslist` VALUES ('22', '手镯', '义乌新光饰品夏季', '16', '16', '16', 'c6.jpg', '2018/9/26 20:52:20', 'no');
INSERT INTO `goodslist` VALUES ('23', '手镯', '亚马逊新�?', '188', '188', '1', 'c7.jpg', '2018/9/26 20:53:01', 'no');
INSERT INTO `goodslist` VALUES ('24', '手镯', '超仙冷淡风韩', '165', '165', '56', 'c8.jpg', '2018/9/26 20:53:37', 'no');
INSERT INTO `goodslist` VALUES ('25', '脚链', '又一银时尚手', '12', '12', '12', 'd1.jpg', '2018/9/26 20:54:05', 'no');
INSERT INTO `goodslist` VALUES ('26', '脚链', '时尚潮流手镯 �?', '13', '13', '16', 'd2.jpg', '2018/9/26 20:54:54', 'no');
INSERT INTO `goodslist` VALUES ('27', '脚链', 'UPING 时尚简', '12', '22', '12', 'd3.jpg', '2018/9/26 20:55:40', 'no');
INSERT INTO `goodslist` VALUES ('28', '脚链', '钛魅】欧美潮', '165', '165', '16', 'd4.jpg', '2018/9/26 20:56:11', 'no');
INSERT INTO `goodslist` VALUES ('29', '脚链', 'XUPING 珍珠开', '166', '166', '19', 'd5.jpg', '2018/9/26 20:56:37', 'no');
INSERT INTO `goodslist` VALUES ('30', '脚链', 'DIY系列 时尚潮流�?', '58', '58', '5', 'd6.jpg', '2018/9/26 20:57:14', 'no');
INSERT INTO `goodslist` VALUES ('31', '脚链', '又一银时尚手', '15', '15', '9', 'd7.jpg', '2018/9/26 00:00:00', 'no');
INSERT INTO `goodslist` VALUES ('32', '脚链', 'XUPING 珍珠开', '18', '18', '18', 'd8.jpg', '2018/9/26 00:00:00', 'no');
INSERT INTO `goodslist` VALUES ('33', '耳环', 'LEKANI 来自施华', '199', '199', '66', 'e1.jpg', '2018/9/26 20:58:54', 'no');
INSERT INTO `goodslist` VALUES ('34', '耳环', 'LEKANI 来自施华', '69', '69', '68', 'e2.jpg', '2018/9/26 20:59:40', 'no');
INSERT INTO `goodslist` VALUES ('35', '耳环', 'Tuswans 欧美朋克', '633', '633', '663', 'e3.jpg', '2018/9/26 21:00:14', 'no');
INSERT INTO `goodslist` VALUES ('36', '耳环', 'wish新款 时尚蕾丝', '149', '149', '55', 'e4.jpg', '2018/9/26 21:00:45', 'no');
INSERT INTO `goodslist` VALUES ('37', '耳环', '米妃 欧美外贸�?', '958', '968', '2', 'e5.jpg', '2018/9/26 21:01:30', 'no');
INSERT INTO `goodslist` VALUES ('38', '耳环', 'Tuswans ', '325', '355', '325', 'e6.jpg', '2018/9/26 21:02:16', 'no');
INSERT INTO `goodslist` VALUES ('39', '耳环', '欧美范时尚气', '741', '741', '74', 'e7.jpg', '2018/9/26 21:02:49', 'no');
INSERT INTO `goodslist` VALUES ('40', '耳环', '欧美爆款�?', '41', '41', '41', 'e8.jpg', '2018/9/26 21:03:21', 'no');
INSERT INTO `goodslist` VALUES ('41', '手环', '又一银脚', '69', '69', '55', 'f1.jpg', '2018/9/26 21:06:05', 'no');
INSERT INTO `goodslist` VALUES ('42', '手环', '又一镂空', '21', '21', '21', 'f2.jpg', '2018/9/26 21:06:01', 'no');
INSERT INTO `goodslist` VALUES ('43', '手环', '又一银脚', '211', '211', '222', 'f3.jpg', '2018/9/26 21:06:38', 'no');
INSERT INTO `goodslist` VALUES ('44', '手环', 'KNSPCA034-B-2', '321', '321', '312', 'f4.jpg', '2018/9/26 21:07:00', 'no');
INSERT INTO `goodslist` VALUES ('45', '手环', '一银脚', '666', '666', '66', 'f5.jpg', '2018/9/26 21:07:35', 'no');
INSERT INTO `goodslist` VALUES ('46', '手环', '波西米亚�?', '654', '654', '654', 'f6.jpg', '2018/9/26 21:08:40', 'no');
INSERT INTO `goodslist` VALUES ('47', '手环', '欧美时尚', '555', '555', '555', 'f7.jpg', '2018/9/26 21:09:09', 'no');
INSERT INTO `goodslist` VALUES ('48', '手机', 'iPhone X', '9999', null, null, null, null, 'yes');

-- ----------------------------
-- Table structure for master
-- ----------------------------
DROP TABLE IF EXISTS `master`;
CREATE TABLE `master` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `sex` varchar(255) NOT NULL,
  `iphone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `textare` varchar(255) DEFAULT NULL,
  `createdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of master
-- ----------------------------
INSERT INTO `master` VALUES ('1', 'wuyucan', '111111', '帅到被人追着砍', '男', '18217890987', '3068629579@qq.com', '我是渣渣辉，', '2018-09-27 16:18:24');
INSERT INTO `master` VALUES ('2', 'zhaolin', '666666', '小林林', '男', '13388889999', '12323414@qq.com', '我是赵林我爱保健', '2018-09-26 13:02:31');

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `iphone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `juese` varchar(255) NOT NULL,
  `shijian` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1025 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('1008', 'admin', '18279131262', '3068629579@qq.com', '超级管理员', '2018-09-26 22:32:18', '已审核');
INSERT INTO `userlist` VALUES ('1011', '张三', '13838384381', '564382024@qq.com', '管理员', '2018-09-27 16:22:39', '未审核');
INSERT INTO `userlist` VALUES ('1012', '李四', '17787992374', '2387492182@qq.com', '管理员', '2018-09-27 16:24:27', '未审核');
INSERT INTO `userlist` VALUES ('1013', '小王', '15238945673', '457289218@qq.com', '管理员', '2018-09-27 16:25:25', '已审核');
INSERT INTO `userlist` VALUES ('1014', '刘备', '15698793893', '367283366@qq.com', '管理员', '2018-09-27 16:26:23', '未审核');
INSERT INTO `userlist` VALUES ('1015', '关羽', '14843843838', '56785306344@qq.com', '管理员', '2018-09-27 16:27:38', '未审核');
INSERT INTO `userlist` VALUES ('1016', '赵云', '15868789962', '653287482@qq.com', '管理员', '2018-09-27 16:28:39', '已审核');
INSERT INTO `userlist` VALUES ('1017', '孔明', ' 16898986464', '32678936@qq.com', '管理员', '2018-09-27 16:29:46', '已审核');
INSERT INTO `userlist` VALUES ('1018', '赵林', '19878786868', '49494391@qq.com', '超级管理员', '2018-09-27 16:30:56', '已审核');
INSERT INTO `userlist` VALUES ('1019', '王根基', '17643345679', '837644554@qq.com', '管理员', '2018-09-27 16:33:15', '未审核');
INSERT INTO `userlist` VALUES ('1020', '马超', '16679125632', '3846574555@qq.com', '管理员', '2018-09-27 16:34:26', '未审核');
INSERT INTO `userlist` VALUES ('1021', '黄忠', '13763889320', '324562911@qq.com', '管理员', '2018-09-27 16:35:12', '未审核');
SET FOREIGN_KEY_CHECKS=1;
