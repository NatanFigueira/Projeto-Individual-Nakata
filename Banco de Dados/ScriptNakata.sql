create database NakataProject;
use NakataProject;

create table usuario(
idUsuario INT primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(16),
dataNasc date
);

create table TentativaQuiz (
idTentativa int auto_increment,
fkUsuario int,
resposta1 char(1),
resposta2 char(1),
resposta3 char(1),
resposta4 char(1),
foreign key (fkUsuario) references Usuario (idUsuario),
primary key (idTentativa, fkUsuario)
);

