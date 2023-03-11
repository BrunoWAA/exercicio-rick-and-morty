// 0 - Adicionar evento em botão para executar contexto da função
async function executar(){
    
    // 1 - Pegar id do input
    // 2 - Buscar personagem da api
    const input = document.getElementById("idPersonagem").value
    if ((input >0 && input <827))
    {
        
        const id = input
        const personagem = await buscarPersonagemDaAPI(id)
        document.getElementById("nomeDoPersonagem").innerHTML = ("Nome: " + personagem.name)
        document.getElementById("imagemDoPersonagem").src = ( personagem.image);
        document.getElementById("localDoPersonagem").innerHTML = ("Local: " + personagem.location.name);
        document.getElementById("origemPersonagem").innerHTML = ("Origem: " + personagem.origin.name);
        let sexoPersonagem = personagem.gender
        
        if (sexoPersonagem == "Male")
        {
            let sexo = "Masculino"
            document.getElementById("sexoPersonagem").innerHTML = ("Sexo: " + sexo);
        }
        else if (sexoPersonagem == "Female")
        {
            let sexo = "Feminino"
            document.getElementById("sexoPersonagem").innerHTML = ("Sexo: " + sexo);
        }
        else if (sexoPersonagem == "Unknow")
        {
            let sexo = "Desconhecido"
            document.getElementById("sexoPersonagem").innerHTML = ("Sexo: " + sexo);
        }

        

        document.getElementById('resultado').style.backgroundColor = 'rgb(79, 79, 79)'; 
        document.getElementById('resultado').style.color = 'white';
        console.log(personagem)
    }
    else
    {

        document.getElementById("nomeDoPersonagem").innerHTML = "Não encontrado"
        document.getElementById("imagemDoPersonagem").src = ""
        document.getElementById("localDoPersonagem").innerHTML = ""
        document.getElementById("origemPersonagem").innerHTML = ""
        document.getElementById("sexoPersonagem").innerHTML = ""
        document.getElementById('resultado').style.backgroundColor = 'white';
        document.getElementById('resultado').style.color = 'black';

    }



    
    /* MONTAR ABAIXO HTML COM O VALOR RETORNADO DA API */
    // 3 - Pegar elemento de resultado do HTML
    // 4 - Atribuir valores do personagem na tela

    /* Dica:
        Dar console.log na variável 'personagem'
        para visualizar o objeto;
        Olhar a documentação de como o objeto é retornado
        https://rickandmortyapi.com/documentation/#character-schema
    */
}


/* Função para fazer uma request GET para a API utilizando o JS 
   Veremos logo em seguida! Foquem na leitura do Objeto na função acima.
*/
async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}