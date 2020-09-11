drop database if exists hello_strangers;
create database hello_strangers;
use hello_strangers;

create table if not exists users(
	id int unsigned not null primary key auto_increment,
    name varchar(255) not null unique,
    password varchar(255) not null,
    created_date datetime not null
);

create table if not exists friendship(
	user1_id int unsigned not null,
    user2_id int unsigned not null,
    created_date datetime not null,
    foreign key (user1_id) references users(id) on delete cascade,
    foreign key (user2_id) references users(id) on delete cascade
);

create table if not exists friendship_status(
	id int unsigned not null primary key auto_increment,
    status varchar(255) not null unique
);

create table if not exists rooms (
	id int unsigned not null primary key auto_increment,
    name varchar(255) not null unique,
    created_date datetime not null
);

create table if not exists users_in_room (
	user_id int unsigned not null,
    room_id int unsigned not null,
    join_date datetime not null,
    foreign key (user_id) references users(id),
    foreign key (room_id) references rooms(id)
);

create table if not exists room_status(
	id int unsigned not null primary key auto_increment,
    status varchar(255) not null
);

create table if not exists messages (
	id int unsigned not null primary key auto_increment,
    user_id int unsigned not null,
    room_id int unsigned not null,
    content text not null,
    created_date datetime not null
);
