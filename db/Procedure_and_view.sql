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