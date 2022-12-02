-- ############ kayaknya gajadi pake ini
-- DROP DATABASE IF EXISTS dating;

-- CREATE DATABASE dating;

-- USE dating;

-- CREATE TABLE profiles (
-- 	id BIGINT NOT NULL AUTO_INCREMENT,
-- 	user_email VARCHAR(255) NOT NULL,
-- 	user_password VARCHAR(255) NOT NULL,
-- 	user_full_name VARCHAR(255) NOT NULL,
-- 	user_age INT NOT NULL,
-- 	user_avatar VARCHAR(255) NOT NULL,
-- 	user_gender VARCHAR(255) NOT NULL,
-- 	user_cometchat_uid VARCHAR(255) NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE details (
-- 	id BIGINT NOT NULL AUTO_INCREMENT,
-- 	match_request_from VARCHAR(255) NOT NULL,
-- 	match_request_to VARCHAR(255) NOT NULL,
-- 	match_request_sender VARCHAR(255) NOT NULL,
-- 	match_request_receiver VARCHAR(255) NOT NULL,
-- 	match_request_status INT NOT NULL,
-- 	created_date DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
-- 	accepted_date DATETIME NULL,
-- 	PRIMARY KEY (id)
-- );