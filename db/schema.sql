drop database if exists bucket_db;

CREATE DATABASE bucket_db;

USE bucket_db;

CREATE TABLE bucketList(
    id INT NOT NULL AUTO_INCREMENT,
    activity VARCHAR(30) NOT NULL,
    done BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);


INSERT INTO bucketlist (activity, done) VALUES ('Sky Diving', false);
INSERT INTO bucketlist (activity, done)VALUES('Ride a Bull', false);
INSERT INTO bucketlist (activity, done)VALUES('See the norhtern lights', false);