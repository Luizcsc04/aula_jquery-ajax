function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json" ;
    console.log(url);
    $.ajax({
        url: url, 
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
           /* console.log(response);
            alert(response.logradouro);*/
           /* document.getElementById("logradouro").
            innerHTML = response.logradouro;
           
            document.getElementById("localidade").
            innerHTML = response.localidade;
            
            document.getElementById("bairro").innerHTML = response.bairro;

            document.getElementById("uf").innerHTML = response.uf;*/
        }
    }

    )
}