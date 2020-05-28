function update() {
    var select = document.getElementById('language');
    var option = select.options[select.selectedIndex];

    document.getElementById('value').value = option.value;
    document.getElementById('text').value = option.text;

    var valor

    console.log(option.value)

    //Fazer os jogos

    //Array que armazenará os times
    times = []
    botoes = []
    clubes = [];

    //Início do algoritmo de oitavas
    if (option.value === "oitavas") {

        //Cria os campos para inserir os times e os respectivos IDs
        for (var i = 0; i < 16; i++) {
            times[i] = document.createElement("INPUT");
            times[i].setAttribute("type", "text");
            times[i].setAttribute("id", "clube" + i);
            document.getElementById('time' + i).appendChild(times[i]);
        }
        //Fim da criação de inputs e buttons

        //Criando botao para iniciar jogos de oitavas
        botao = document.createElement("BUTTON");
        botao.innerText = "JOGAR";
        botao.setAttribute("id", "jogar");
        document.getElementById('botao-jogar').appendChild(botao);

        //Criando botao para recarregar a pagina
        botaoatualizar = document.createElement("BUTTON");
        botaoatualizar.innerText = "JOGAR COM TIMES DIFERENTES";
        botaoatualizar.setAttribute("id", "update");
        document.getElementById('botao-atualiza').appendChild(botaoatualizar);

        botaoatualizar.onclick = function () {
            location.reload();
        }
        //Fim do botao para recarregar a pagina

        //Ao clicar inicia os jogos
        botao.onclick = function jogar() {

            for (var i = 0; i < 16; i++) {
                clubes[i] = document.getElementById('clube' + i).value;
                console.log(clubes[i]);
            }

            //Início jogos de oitavas
            venceu = 0;
            venceuOitavas = [8]
            timeOitavas = [16]
            placar = [16]
            for (var i = 0; i < 16; i++) {
                num1 = Math.floor(Math.random() * 5);
                num2 = Math.floor(Math.random() * 5);

                timeOitavas[i] = document.createElement("SPAN");
                timeOitavas[i].innerText = clubes[i];
                document.getElementById('oitavas' + i).appendChild(timeOitavas[i]);

                placar[i] = document.createElement("SPAN")
                placar[i].innerText = num1;
                document.getElementById('placar' + i).appendChild(placar[i]);

                timeOitavas[i + 1] = document.createElement("SPAN")
                timeOitavas[i + 1].innerText = clubes[i + 1];
                document.getElementById('oitavas' + (i + 1)).appendChild(timeOitavas[i + 1]);

                placar[i + 1] = document.createElement("SPAN")
                placar[i + 1].innerText = num2;
                document.getElementById('placar' + (i + 1)).appendChild(placar[i + 1]);

                //console.log(clubes[i] + " " + num1 + " x " + num2 + " " + clubes[i + 1])

                if (num1 > num2) {
                    venceuOitavas[venceu] = clubes[i];
                    venceu++;
                } else {
                    venceuOitavas[venceu] = clubes[i + 1];
                    venceu++;
                }
                console.log(venceuOitavas[venceu - 1])

                i++
            }
            //Fim jogos de oitavas

            //Início jogos de quartas
            venceu = 0;
            venceuQuartas = [4];
            timeQuartas = [8];
            placarQuartas = [8];
            for (var i = 0; i < 8; i++) {

                num1 = Math.floor(Math.random() * 5);
                num2 = Math.floor(Math.random() * 5);

                timeQuartas[i] = document.createElement("SPAN");
                timeQuartas[i].innerText = venceuOitavas[i];
                document.getElementById('quartas' + i).appendChild(timeQuartas[i]);

                placarQuartas[i] = document.createElement("SPAN")
                placarQuartas[i].innerText = num1;
                document.getElementById('placar2' + i).appendChild(placarQuartas[i]);

                timeQuartas[i + 1] = document.createElement("SPAN")
                timeQuartas[i + 1].innerText = venceuOitavas[i + 1];
                document.getElementById('quartas' + (i + 1)).appendChild(timeQuartas[i + 1]);

                placarQuartas[i + 1] = document.createElement("SPAN")
                placarQuartas[i + 1].innerText = num2;
                document.getElementById('placar2' + (i + 1)).appendChild(placarQuartas[i + 1]);

                //console.log(venceuOitavas[i] + " " + num1 + " x " + num2 + " " + venceuOitavas[i + 1])

                if (num1 > num2) {
                    venceuQuartas[venceu] = venceuOitavas[i];
                    venceu++;
                } else {
                    venceuQuartas[venceu] = venceuOitavas[i + 1];
                    venceu++;
                }
                console.log(venceuQuartas[venceu - 1]);
                i++;
            }
            //Fim dos jogos de quartas

            //Início jogos de semis
            venceu = 0;
            venceuSemis = [2]
            timeSemi = [4];
            placarSemi = [4];

            for (var i = 0; i < 4; i++) {
                num1 = Math.floor(Math.random() * 5);
                num2 = Math.floor(Math.random() * 5);

                timeSemi[i] = document.createElement("SPAN");
                timeSemi[i].innerText = venceuQuartas[i];
                document.getElementById('semi' + i).appendChild(timeSemi[i]);

                placarSemi[i] = document.createElement("SPAN")
                placarSemi[i].innerText = num1;
                document.getElementById('placar3' + i).appendChild(placarSemi[i]);

                timeSemi[i + 1] = document.createElement("SPAN")
                timeSemi[i + 1].innerText = venceuQuartas[i + 1];
                document.getElementById('semi' + (i + 1)).appendChild(timeSemi[i + 1]);

                placarSemi[i + 1] = document.createElement("SPAN")
                placarSemi[i + 1].innerText = num2;
                document.getElementById('placar3' + (i + 1)).appendChild(placarSemi[i + 1]);

                //console.log(venceuQuartas[i] + " " + num1 + " x " + num2 + " " + venceuQuartas[i + 1])

                if (num1 > num2) {
                    venceuSemis[venceu] = venceuQuartas[i];
                    venceu++;
                } else {
                    venceuSemis[venceu] = venceuQuartas[i + 1];
                    venceu++;
                }
                console.log(venceuSemis[venceu - 1]);
                i++;
            }
            //Fim jogos de semis

            //Início da Final
            venceu = 0;
            timeFinal = [2];
            placarFinal = [2]

            for (var i = 0; i < 2; i++) {
                num1 = Math.floor(Math.random() * 5);
                num2 = Math.floor(Math.random() * 5);

                timeFinal[i] = document.createElement("SPAN");
                timeFinal[i].innerText = venceuSemis[i];
                document.getElementById('final' + i).appendChild(timeFinal[i]);

                placarFinal[i] = document.createElement("SPAN")
                placarFinal[i].innerText = num1;
                document.getElementById('placar4' + i).appendChild(placarFinal[i]);

                timeFinal[i + 1] = document.createElement("SPAN")
                timeFinal[i + 1].innerText = venceuSemis[i + 1];
                document.getElementById('final' + (i + 1)).appendChild(timeFinal[i + 1]);

                placarFinal[i + 1] = document.createElement("SPAN")
                placarFinal[i + 1].innerText = num2;
                document.getElementById('placar4' + (i + 1)).appendChild(placarFinal[i + 1]);

                //console.log(venceuSemis[i] + " " + num1 + " x " + num2 + " " + venceuSemis[i + 1])

                if (num1 > num2) {
                    campeao = venceuSemis[i];
                } else {
                    campeao = venceuSemis[i + 1];
                }
                console.log(campeao);
                i++;
            }
            //Fim final

            champion = document.createElement("SPAN");
            champion.innerText = campeao;
            document.getElementById('campeao').appendChild(champion);
        }
        //Jogo encerrado																	
    }
    //Fim do Algoritomo de oitavas

}

update();