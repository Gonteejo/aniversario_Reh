AOS.init();

const dataDoEvento = new Date("Oct 30, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const constaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);
    
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    
    if (distanciaAteOEvento < 0) {
        clearInterval(constaAsHoras);
        document.getElementsByClassName("hero__text")[0].innerHTML = "Para esse ano você chegou atrasado, tente ano que vem!";
    }
}, 500);