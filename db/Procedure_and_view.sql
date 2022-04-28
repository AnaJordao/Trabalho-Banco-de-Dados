-- PROCEDURE PARA CALCULAR A PORCENTAGEM DE UM CERTO TIPO DE RAMAL
DELIMITER $$
create procedure porcentTipoRamal (IN IDtipoRamal INT, OUT porcentagem DECIMAL(4, 2))
begin

declare quant_ramais int default 0;
declare quant_tipo_ramais int default 0;

select COUNT(*) into quant_tipo_ramais 
from trabalhofinal.ramal
where TipoRamal_ID = IDtipoRamal;

select COUNT(*) into quant_ramais 
from trabalhofinal.ramal;

set porcentagem = (quant_tipo_ramais / quant_ramais) * 100;

end $$
DELIMITER ;

-- CHAMANDO A PROCEDURE
call trabalhofinal.porcentTipoRamal(0, @porcentagem);
select @porcentagem;

-- VIEW PARA RELACIONAR OS USUÁRIOS AOS TIPO DE RAMAIS
create view relacaoUsuarioTipoRamal as
select ramal.Numero, tiporamal.ramalDescricao, usuario.pr, usuario.usuarioNome
from usuario, ramal, tiporamal
where usuario.pr = ramal.Servidor_PR
and ramal.TipoRamal_ID = tiporamal.id;

-- CHAMANDO A VIEW
SELECT * FROM trabalhofinal.relacaoUsuarioTipoRamal;

-- VIEW PARA MOSTRAR QUAIS USUÁRIOS FIZERAM CADA ATENDIMENTO
create view atendimentoUsuarios as
select usuario.pr, usuario.usuarioNome, atendimento.atendimentoNumero, atendimento.DataInicio, atendimento.DataTermino
from usuario, servidor_has_atendimento, atendimento
where usuario.pr = servidor_has_atendimento.Servidor_PR
and servidor_has_atendimento.Atendimento_Numero = atendimento.atendimentoNumero;

-- CHAMANDO A VIEW
SELECT * FROM trabalhofinal.atendimentoUsuarios;