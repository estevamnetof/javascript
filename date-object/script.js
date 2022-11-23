const agora = new Date();

agora.getDate(); // Dia
agora.getDay(); // Dia da semana ex: 5 = Fri
agora.getMonth(); // Número do mês. começa em 0
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes(); // Minutos
agora.getTime(); // ms desde 1970
agora.getUTCHours() - 3; // Brasília


const agora1 = new Date();
const promocao = new Date('December 24 2022 23:59');

function converterEmDias(time) {
    return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora1);
const diasPromocao = converterEmDias(promocao);

const faltam = parseInt(diasPromocao - diasAgora)