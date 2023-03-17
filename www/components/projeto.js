var htc1 = "", htc2 = "", htc3 = "", htc4 = "", htc5 = "";

function calcular(){
    
    var primeirovalor = document.getElementById("1valor").value
    var segundovalor = document.getElementById("2valor").value
    var terceirovalor = document.getElementById("3valor").value
    var resultado
        
    resultado = (segundovalor * terceirovalor ) / primeirovalor
        
    document.getElementById('resultado').value = resultado
    alert(resultado)

    htc5 = htc4 
    htc4 = htc3 
    htc3 = htc2 
    htc2 = htc1
    htc1 = resultado

    document.getElementById("htc1").textContent = htc1
    document.getElementById("htc2").textContent = htc2
    document.getElementById("htc3").textContent = htc3
    document.getElementById("htc4").textContent = htc4
    document.getElementById("htc5").textContent = htc5
    

}

