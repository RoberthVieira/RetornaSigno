let colecaoSignos = [
    {"Nome": "Aquario", "DataInicio": "01-20", "DataFim": "02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20"},
    {"Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19"},
    {"Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23"},
    {"Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22"},
    {"Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19"},
]

const retornaSigno = (signos, data) => {

    let ano = data.getFullYear();

    for(const signo of signos){

        let dataInicioSigno = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let dataFimSigno = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        if( data >= dataInicioSigno && data <= dataFimSigno ){
            return signo["Nome"];
        }
    }

}

let dataApp = new Date("2020-07-28 00:00:00");

const nomeSigno = retornaSigno(colecaoSignos, dataApp);

console.log("O signo do dia é: " + nomeSigno);