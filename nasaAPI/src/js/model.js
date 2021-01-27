let input = document.getElementById("date");
let data = new Date();
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=8HtGtmyBcbny7b3QLAQTRZXzud5bOadLbMlt9oWh&date=${pegaData()}`);                                            
      xhr.send();
      xhr.onload = function(){
        let result = JSON.parse(xhr.responseText);      
        
        var imagem = document.getElementById("apodImg");
        imagem.src = result.url;

        data = result.date;
        var dataParagrafo = document.getElementById("apodData");
        dataParagrafo.textContent = data;
        dataParagrafo.style.fontWeight= "bold";
        dataParagrafo.style.color= "white";

        copyright = result.copyright;
        var copyrightParagrafo = document.getElementById("apodCopyright");
        copyrightParagrafo.textContent = `Autor: ${copyright}`;
        copyrightParagrafo.style.fontWeight= "bold";
        copyrightParagrafo.style.color= "white";

        titulo = result.title;
        var tituloParagrafo = document.getElementById("apodTitulo");
        tituloParagrafo.textContent = titulo;
        tituloParagrafo.style.fontWeight= "bold";
        tituloParagrafo.style.color= "white";
        
        explicacao = result.explanation;
        var explicacaoParagrafo = document.getElementById("apodExp");
        explicacaoParagrafo.textContent = `Explicação: ${explicacao}`;
        explicacaoParagrafo.style.fontSize = "20px"
        explicacaoParagrafo.style.color= "white";



      }

