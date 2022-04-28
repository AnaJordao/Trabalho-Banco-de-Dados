insert into categoria(id, categoriaDescricao) values(0, 'Ramal + fixo local + celular + DDD + DDI + a cobrar');
insert into categoria(id, categoriaDescricao) values(1, 'Ramal + fixo local + celular + DDD + DDI');
insert into categoria(id, categoriaDescricao) values(2, 'Ramal + fixo local + celular + DDD');
insert into categoria(id, categoriaDescricao) values(3, 'Ramal + fixo local + celular');
insert into categoria(id, categoriaDescricao) values(4, 'Ramal + fixo local');
insert into categoria(id, categoriaDescricao) values(5, 'Ramal');

insert into tiporamal(id, ramalDescricao) values(0, 'Ramal IP');
insert into tiporamal(id, ramalDescricao) values(1, 'Ramal SIP');
insert into tiporamal(id, ramalDescricao) values(2, 'Ramal MIPT');
insert into tiporamal(id, ramalDescricao) values(3, 'Ramal Analógico');
insert into tiporamal(id, ramalDescricao) values(4, 'Ramal Digital');

insert into tipoaparelho(id, FotoAparelho, tipoAparelhoDescricao, Marca) values(0, LOAD_FILE('C:/Users/DELL/OneDrive - unb.br/05 Quinto Semestre/Banco de Dados/Trabalho Final/Trabalho-Banco-de-Dados/db/imgs/Modelo IPT 4068.png'), 'Tela colorida', 'IPTouch-4068');
insert into tipoaparelho(id, FotoAparelho, tipoAparelhoDescricao, Marca) values(1, LOAD_FILE('C:/Users/DELL/OneDrive - unb.br/05 Quinto Semestre/Banco de Dados/Trabalho Final/Trabalho-Banco-de-Dados/db/imgs/Modelo IPT 4038.png'), 'Tela preto e branco', 'IPTouch-4038');
insert into tipoaparelho(id, FotoAparelho, tipoAparelhoDescricao, Marca) values(2, LOAD_FILE('C:/Users/DELL/OneDrive - unb.br/05 Quinto Semestre/Banco de Dados/Trabalho Final/Trabalho-Banco-de-Dados/db/imgs/Modelo IPT 4018.png'), 'Tela de uma linha - estagiários', 'IPTouch-4018');
insert into tipoaparelho(id, FotoAparelho, tipoAparelhoDescricao, Marca) values(3, LOAD_FILE('C:/Users/DELL/OneDrive - unb.br/05 Quinto Semestre/Banco de Dados/Trabalho Final/Trabalho-Banco-de-Dados/db/imgs/Modelo GAP+.png'), 'Dect', 'Gap+');
insert into tipoaparelho(id, FotoAparelho, tipoAparelhoDescricao, Marca) values(4, LOAD_FILE('C:/Users/DELL/OneDrive - unb.br/05 Quinto Semestre/Banco de Dados/Trabalho Final/Trabalho-Banco-de-Dados/db/imgs/Modelo MIPT IP.png'), 'MIPT', 'MobileIPTouch');

insert into central(ip, centralNome, centralFuncao) values('10.225.0.10', 'Central do Palácio-mãe', 'Mãe');
insert into central(ip, centralNome, centralFuncao) values('10.203.0.10', 'Central dos Anexos', 'Anexo');
insert into central(ip, centralNome, centralFuncao) values('10.140.3.10', 'Central da Granja do Torto', 'Torto');
insert into central(ip, centralNome, centralFuncao) values('10.134.3.10', 'Central Palácio Alvorada', 'Alvorada');
insert into central(ip, centralNome, centralFuncao) values('10.135.3.10', 'Central Palácio Jaburu', 'Jaburu');
insert into central(ip, centralNome, centralFuncao) values('172.18.5.245', 'Central Escritório do Rio de Janeiro', 'Escritório');
insert into central(ip, centralNome, centralFuncao) values('172.18.141.245', 'Central de viagem 1', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.142.245', 'Central de viagem 2', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.143.245', 'Central de viagem 3', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.144.245', 'Central de viagem 4', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.145.245', 'Central de viagem 5', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.146.245', 'Central de viagem 6', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.147.245', 'Central de viagem 7', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.148.245', 'Central de viagem 8', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.149.245', 'Central de viagem 9', 'Viagem');
insert into central(ip, centralNome, centralFuncao) values('172.18.150.245', 'Central de viagem 10', 'Viagem');

insert into lotacao(id, lotacaoNome, Endereco) values(0, 'SECRETARIA-GERAL', 'Palácio do Planalto-4º andar-sala 412');
insert into lotacao(id, lotacaoNome, Endereco) values(1, 'DIRETORIA DE TECNOLOGIA', 'Palácio do Planalto-AnexoIV-sala 01');
insert into lotacao(id, lotacaoNome, Endereco) values(2, 'CASA CIVIL', 'Palácio do Planalto-4º andar-sala 401');
insert into lotacao(id, lotacaoNome, Endereco) values(3, 'SECRETARIA DE GOVERNO', 'Palácio do Planalto-4º andar-sala 431');
insert into lotacao(id, lotacaoNome, Endereco) values(4, 'GABINETE DE SEGURANÇA INSTITUCIONAL', 'Palácio do Planalto-2º andar-sala 211');
insert into lotacao(id, lotacaoNome, Endereco) values(5, 'IMPRENSA NACIONAL', 'SIG, Brasília DF');

insert into observacao(id, obsDescricao) values(0,'Presidente da República');
insert into observacao(id, obsDescricao) values(1,'Ministro de Estado');
insert into observacao(id, obsDescricao) values(2,'Secretário Executivo');
insert into observacao(id, obsDescricao) values(3,'Assessor');
insert into observacao(id, obsDescricao) values(4,'Servidor');

insert into funcao(id, funcaoDescricao) values(0,'DAS');
insert into funcao(id, funcaoDescricao) values(1,'GR');
insert into funcao(id, funcaoDescricao) values(2,'CCE');
insert into funcao(id, funcaoDescricao) values(3,'FCE');
insert into funcao(id, funcaoDescricao) values(4,'NE');

insert into usuario(pr, usuarioNome, dataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID) values('634982', 'William Xavier dos Santos', '2017-08-10', 3, 1, 4);
insert into usuario(pr, usuarioNome, dataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID) values('213493', 'Henrique Mariano Pedrosa', '2019-05-28', 2, 3, 3);
insert into usuario(pr, usuarioNome, dataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID) values('768021', 'Caio Cesar Linhares', '2015-03-12', 4, 5, 1);
insert into usuario(pr, usuarioNome, dataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID) values('733958', 'Adriano Cardoso Feliciano', '2013-06-13', 0, 4, 2);
insert into usuario(pr, usuarioNome, dataContratacao, Observacao_ID, Lotacao_ID, Funcao_ID) values('942398', 'Pedro Campos Dellonder', '2020-11-24', 1, 2, 0);

insert into atendimento(atendimentoNumero, DataInicio, DataTermino) values(237, '2022-03-15 19:36:04', '2022-03-15 20:09:53');
insert into atendimento(atendimentoNumero, DataInicio, DataTermino) values(983, '2022-03-17 18:41:03', '2022-03-17 19:23:02');
insert into atendimento(atendimentoNumero, DataInicio, DataTermino) values(284, '2022-03-29 09:13:23', '2022-03-29 11:27:21');
insert into atendimento(atendimentoNumero, DataInicio, DataTermino) values(192, '2022-04-09 08:06:00', '2022-04-09 09:10:17');
insert into atendimento(atendimentoNumero, DataInicio, DataTermino) values(456, '2022-04-27 16:02:54', '2022-04-27 18:14:33');

insert into servidor_has_atendimento(Servidor_PR, Atendimento_Numero) values('213493', 237);
insert into servidor_has_atendimento(Servidor_PR, Atendimento_Numero) values('634982', 983);
insert into servidor_has_atendimento(Servidor_PR, Atendimento_Numero) values('942398', 284);
insert into servidor_has_atendimento(Servidor_PR, Atendimento_Numero) values('733958', 192);
insert into servidor_has_atendimento(Servidor_PR, Atendimento_Numero) values('768021', 456);

insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(1123, 0, '768021', '10.225.0.10', 4, 3, 0);
insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(2234, 0, '213493', '10.203.0.10', 2, 0, 2);
insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(3435, 1, '634982', '10.203.0.10', 0, 4, 3);
insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(4543, 0, '942398', '10.203.0.10', 3, 1, 1);
insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(5774, 1, '733958', '10.134.3.10', 1, 2, 4);
insert into ramal(Numero, Filtro, Servidor_PR, Central_IP, Categoria_ID, TipoRamal_ID, TipoAparelho_id) values(6800, 0, '634982', '172.18.5.245', 5, 0, 2);
