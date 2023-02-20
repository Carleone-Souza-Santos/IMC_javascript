function calcula_imc() {
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;
  
    var quadrado = altura * altura;
    var calculo = peso / quadrado;
  
    if (calculo < 18.5) {
      document.write(
        "IMC: " + calculo + " | Você está abaixo do seu peso ideal!"
      );
    } else if (calculo >= 18.5 && calculo < 24.9) {
       document.write("IMC: " + calculo + " | Você está em seu peso normal!");
      
    } else if (calculo >= 25 && calculo < 29.9) {
      document.write("IMC: " + calculo + " | Obesidade Grau 1!");
      
    } 
    
    else if (calculo >= 30 && calculo < 39.9) {
    document.write("IMC: " + calculo + " | Obesidade Grau 2!");
    }
    
    else if (calculo > 40)
     document.write("IMC: " + calculo + " | Obesidade Grau 3!");
    
  }