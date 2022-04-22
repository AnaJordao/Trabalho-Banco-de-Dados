CREATE SCHEMA IF NOT EXISTS trabalhoFinal DEFAULT CHARACTER SET utf8 ;
USE trabalhoFinal ;

DROP TABLE IF EXISTS trabalhoFinal.Ramal;
DROP TABLE IF EXISTS trabalhoFinal.Servidor_has_Atendimento;
DROP TABLE IF EXISTS trabalhoFinal.Usuario;
DROP TABLE IF EXISTS trabalhoFinal.Observacao;
DROP TABLE IF EXISTS trabalhoFinal.Lotacao;
DROP TABLE IF EXISTS trabalhoFinal.Funcao;
DROP TABLE IF EXISTS trabalhoFinal.Atendimento;
DROP TABLE IF EXISTS trabalhoFinal.Central;
DROP TABLE IF EXISTS trabalhoFinal.Categoria;
DROP TABLE IF EXISTS trabalhoFinal.TipoAparelho;
DROP TABLE IF EXISTS trabalhoFinal.TipoRamal;



CREATE TABLE observacao (
  id INT NOT NULL,
  obsDescricao VARCHAR(100) NULL,
  PRIMARY KEY (id));




CREATE TABLE trabalhoFinal.Lotacao (
  id INT NOT NULL,
  lotacaoNome VARCHAR(45) NOT NULL,
  Endereco VARCHAR(50) NOT NULL,
  PRIMARY KEY (ID));



CREATE TABLE trabalhoFinal.Funcao (
  id INT NOT NULL,
  funcaoDescricao VARCHAR(45) NOT NULL,
  PRIMARY KEY (ID));




CREATE TABLE trabalhoFinal.Usuario (
  pr VARCHAR(6) NOT NULL,
  usuarioNome VARCHAR(45) NOT NULL,
  DataContratacao DATE NOT NULL,
  Observacao_ID INT NOT NULL,
  Lotacao_ID INT NOT NULL,
  Funcao_ID INT NOT NULL,
  PRIMARY KEY (PR),
  INDEX fk_Servidor_Observacao1_idx (Observacao_ID ASC) VISIBLE,
  INDEX fk_Servidor_Lotacao1_idx (Lotacao_ID ASC) VISIBLE,
  INDEX fk_Usuario_Funcao1_idx (Funcao_ID ASC) VISIBLE,
  CONSTRAINT fk_Servidor_Observacao1
    FOREIGN KEY (Observacao_ID)
    REFERENCES trabalhoFinal.Observacao (ID),
  CONSTRAINT fk_Servidor_Lotacao1
    FOREIGN KEY (Lotacao_ID)
    REFERENCES trabalhoFinal.Lotacao (ID),
  CONSTRAINT fk_Usuario_Funcao1
    FOREIGN KEY (Funcao_ID)
    REFERENCES trabalhoFinal.Funcao (ID));




CREATE TABLE trabalhoFinal.Atendimento (
  atendimentoNumero INT NOT NULL,
  DataInicio DATE NOT NULL,
  DataTermino DATE NOT NULL,
  PRIMARY KEY (atendimentoNumero));




CREATE TABLE trabalhoFinal.Central (
  ip VARCHAR(15) NOT NULL,
  centralNome VARCHAR(45) NOT NULL,
  centralFuncao VARCHAR(100) NOT NULL,
  PRIMARY KEY (IP));




CREATE TABLE trabalhoFinal.Categoria (
  id INT NOT NULL,
  categoriaDescricao VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID));




CREATE TABLE trabalhoFinal.TipoRamal (
  id INT NOT NULL,
  ramalDescricao VARCHAR(45) NOT NULL,
  PRIMARY KEY (ID));




CREATE TABLE trabalhoFinal.TipoAparelho (
  id INT NOT NULL,
  FotoAparelho BLOB NULL,
  tipoAparelhoDescricao VARCHAR(100),
  Marca VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));




CREATE TABLE trabalhoFinal.Ramal (
  Numero INT NOT NULL,
  Filtro TINYINT NOT NULL DEFAULT 0,
  Servidor_PR VARCHAR(6) NOT NULL,
  Central_IP VARCHAR(15) NOT NULL,
  Categoria_ID INT NOT NULL,
  TipoRamal_ID INT NOT NULL,
  TipoAparelho_id INT NOT NULL,
  PRIMARY KEY (Numero),
  INDEX fk_Ramal_Servidor_idx (Servidor_PR ASC) VISIBLE,
  INDEX fk_Ramal_Central1_idx (Central_IP ASC) VISIBLE,
  INDEX fk_Ramal_Categoria1_idx (Categoria_ID ASC) VISIBLE,
  INDEX fk_Ramal_TipoRamal1_idx (TipoRamal_ID ASC) VISIBLE,
  INDEX fk_Ramal_TipoAparelho1_idx (TipoAparelho_id ASC) VISIBLE,
  CONSTRAINT fk_Ramal_Servidor
    FOREIGN KEY (Servidor_PR)
    REFERENCES trabalhoFinal.Usuario (PR),
  CONSTRAINT fk_Ramal_Central1
    FOREIGN KEY (Central_IP)
    REFERENCES trabalhoFinal.Central (IP),
  CONSTRAINT fk_Ramal_Categoria1
    FOREIGN KEY (Categoria_ID)
    REFERENCES trabalhoFinal.Categoria (ID),
  CONSTRAINT fk_Ramal_TipoRamal1
    FOREIGN KEY (TipoRamal_ID)
    REFERENCES trabalhoFinal.TipoRamal (ID),
  CONSTRAINT fk_Ramal_TipoAparelho1
    FOREIGN KEY (TipoAparelho_id)
    REFERENCES trabalhoFinal.TipoAparelho (id));



CREATE TABLE trabalhoFinal.Servidor_has_Atendimento (
  Servidor_PR VARCHAR(6) NOT NULL,
  Atendimento_Numero INT NOT NULL,
  PRIMARY KEY (Servidor_PR, Atendimento_Numero),
  INDEX fk_Servidor_has_Atendimento_Atendimento1_idx (Atendimento_Numero ASC) VISIBLE,
  INDEX fk_Servidor_has_Atendimento_Servidor1_idx (Servidor_PR ASC) VISIBLE,
  CONSTRAINT fk_Servidor_has_Atendimento_Servidor1
    FOREIGN KEY (Servidor_PR)
    REFERENCES trabalhoFinal.Usuario (PR),
  CONSTRAINT fk_Servidor_has_Atendimento_Atendimento1
    FOREIGN KEY (Atendimento_Numero)
    REFERENCES trabalhoFinal.Atendimento (atendimentoNumero));
