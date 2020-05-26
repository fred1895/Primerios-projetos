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
            console.log(times[i])

            //Cria os botoes para armazenar o valor
            botoes[i] = document.createElement("BUTTON");
            botoes[i].innerText = "OK";
            botoes[i].setAttribute("id", "botao" + i);
            document.getElementById('send' + i).appendChild(botoes[i]);
            console.log(botoes[i])
        }
        //Fim da criação de inputs e buttons

        //Atribuindo valor na mão ;(
        botoes[0].onclick = function armazenaValor() {
            document.getElementById('clube0').value
            clubes[0] = document.getElementById('clube0').value
            console.log(clubes[0])
        }

        botoes[1].onclick = function armazenaValor() {
            document.getElementById('clube1').value
            clubes[1] = document.getElementById('clube1').value
            console.log(clubes[1])
        }

        botoes[2].onclick = function armazenaValor() {
            document.getElementById('clube2').value
            clubes[2] = document.getElementById('clube2').value
            console.log(clubes[2])
        }

        botoes[3].onclick = function armazenaValor() {
            document.getElementById('clube3').value
            clubes[3] = document.getElementById('clube3').value
            console.log(clubes[3])
        }

        botoes[4].onclick = function armazenaValor() {
            document.getElementById('clube4').value
            clubes[4] = document.getElementById('clube4').value
            console.log(clubes[4])
        }

        botoes[5].onclick = function armazenaValor() {
            document.getElementById('clube5').value
            clubes[5] = document.getElementById('clube5').value
            console.log(clubes[5])
        }

        botoes[6].onclick = function armazenaValor() {
            document.getElementById('clube6').value
            clubes[6] = document.getElementById('clube6').value
            console.log(clubes[6])
        }

        botoes[7].onclick = function armazenaValor() {
            document.getElementById('clube7').value
            clubes[7] = document.getElementById('clube7').value
            console.log(clubes[7])
        }

        botoes[8].onclick = function armazenaValor() {
            document.getElementById('clube8').value
            clubes[8] = document.getElementById('clube8').value
            console.log(clubes[8])
        }

        botoes[9].onclick = function armazenaValor() {
            document.getElementById('clube9').value
            clubes[9] = document.getElementById('clube9').value
            console.log(clubes[9])
        }

        botoes[10].onclick = function armazenaValor() {
            document.getElementById('clube10').value
            clubes[10] = document.getElementById('clube10').value
            console.log(clubes[10])
        }

        botoes[11].onclick = function armazenaValor() {
            document.getElementById('clube11').value
            clubes[11] = document.getElementById('clube11').value
            console.log(clubes[11])
        }

        botoes[12].onclick = function armazenaValor() {
            document.getElementById('clube12').value
            clubes[12] = document.getElementById('clube12').value
            console.log(clubes[12])
        }

        botoes[13].onclick = function armazenaValor() {
            document.getElementById('clube13').value
            clubes[13] = document.getElementById('clube13').value
            console.log(clubes[13])
        }

        botoes[14].onclick = function armazenaValor() {
            document.getElementById('clube14').value
            clubes[14] = document.getElementById('clube14').value
            console.log(clubes[14])
        }

        botoes[15].onclick = function armazenaValor() {
            document.getElementById('clube15').value
            clubes[15] = document.getElementById('clube15').value
            console.log(clubes[15])
        }
        //Fim atribuição de valor do botão para os inputs pela ID



        //Criando botao para iniciar jogos de oitavas
        botao = document.createElement("BUTTON");
        botao.innerText = "JOGAR";
        botao.setAttribute("id", "jogar");
        document.getElementById('botao-jogar').appendChild(botao);

        //Ao clicar inicia os jogos
        botao.onclick = function jogar() {

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