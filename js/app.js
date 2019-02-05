var display = document.getElementById("display")
var operandos ={
  operador: "",
  operadorAnt:"",
  numAnt: 0,
  numSig: 0
}

function numero(valor){
  if(display.textContent.length<8)
   {
    if(operandos.operador==""){
      operandos.numAnt = display.innerHTML;
      if( operandos.numAnt =="0" && valor=="0"){
        document.getElementById("display").innerHTML = "0";

      }else if(operandos.numAnt=="0" && valor!="0" ){

        document.getElementById("display").innerHTML = valor;
        operandos.numAnt = valor;
        return

      }else{
        if(valor=="." && !display.innerHTML.includes("."))
        {
          operandos.numAnt = display.innerHTML+".";
          display.innerHTML = operandos.numAnt;
          return;
        }else if(valor=="." && display.innerHTML.includes(".")){


        }else{
          document.getElementById("display").innerHTML = operandos.numAnt+valor;
          operandos.numAnt = operandos.numAnt+valor;
        }
      }

    }else{
      operandos.numSig = display.innerHTML;
      if( operandos.numSig =="0" && valor=="0"){
        document.getElementById("display").innerHTML = "0";

      }else if(operandos.numSig=="0" && valor!="0" ){

        document.getElementById("display").innerHTML = valor;

      }else{
        if(valor=="punto" && !display.innerHTML.includes("."))
        {
          operandos.numSig = display.innerHTML+".";
          display.innerHTML = operandos.numSig;
          return;
        }else if(valor=="punto" && display.innerHTML.includes(".")){


        }else{
          document.getElementById("display").innerHTML = operandos.numSig+valor;
          operandos.numSig = operandos.numSig+valor;
        }
      }
      switch(operandos.operador.toString()){
        case "+":
            operandos.numAnt=parseFloat(operandos.numAnt)+parseFloat(operandos.numSig);

        break;
        case "-":
            operandos.numAnt=parseFloat(operandos.numAnt)-parseFloat(operandos.numSig);

        break;
        case "*":
            operandos.numAnt=parseFloat(operandos.numAnt)*parseFloat(operandos.numSig);

        break;
        case "/":
            operandos.numAnt=parseFloat(operandos.numAnt)/parseFloat(operandos.numSig);
          
        break;

      }
    }
  }
}

  function operar(operacion){
    if(display.textContent.length<8)
     {
      switch(operacion){
        case 'raiz':
          document.getElementById("display").innerHTML = Math.sqrt(operandos.numAnt);
          break;
        case 'on':
          document.getElementById("display").innerHTML = "0";
          operandos.numAnt = 0;
          operandos.operador ="";
          break;
        case 'igual':

          document.getElementById("display").innerHTML =  operandos.numAnt

          break;
        case 'sign':
          if(display.innerHTML.includes("-")){
            document.getElementById("display").innerHTML =  "" + operandos.numAnt
            operandos.numAnt= -1 * parseFloat(operandos.numAnt)
          }else{
            document.getElementById("display").innerHTML =  - + operandos.numAnt
            operandos.numAnt= -1 * parseFloat(operandos.numAnt)
          }
          break;
      }
    }
  }


var calculadora = {
  init: function(){
    var cero = document.getElementById("0")
    var uno = document.getElementById("1")
    var dos = document.getElementById("2")
    var tres = document.getElementById("3")
    var cuatro = document.getElementById("4")
    var cinco = document.getElementById("5")
    var seis = document.getElementById("6")
    var siete = document.getElementById("7")
    var ocho = document.getElementById("8")
    var nueve = document.getElementById("9")
    var punto = document.getElementById("punto")
    var on = document.getElementById("on")
    var sign = document.getElementById("sign")
    var raiz = document.getElementById("raiz")
    var div = document.getElementById("dividido")
    var por = document.getElementById("por")
    var menos = document.getElementById("menos")
    var mas = document.getElementById("mas")
    var igual = document.getElementById("igual")
   cero.addEventListener("click",function(){
     if(display.textContent.length<8)
      {
        self.numero("0")
      }
    })
    cero.addEventListener("mousedown",function(){
      cero.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cero.addEventListener("mouseout",function(){
      cero.setAttribute("style","transform:scale(1,1)")
    })
     uno.addEventListener("click",function(){
       if(display.textContent.length<8)
        {
          self.numero("1")
        }
      })
    uno.addEventListener("mousedown",function(){
      uno.setAttribute("style","transform:scale(0.95,0.95)")
    })
    uno.addEventListener("mouseout",function(){
      uno.setAttribute("style","transform:scale(1,1)")
    })
    dos.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("2")
       }
    })
    dos.addEventListener("mousedown",function(){
      dos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    dos.addEventListener("mouseout",function(){
      dos.setAttribute("style","transform:scale(1,1)")
    })
    tres.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("3")
       }
    })
    tres.addEventListener("mousedown",function(){
      tres.setAttribute("style","transform:scale(0.95,0.95)")
    })
    tres.addEventListener("mouseout",function(){
      tres.setAttribute("style","transform:scale(1,1)")
    })
    cuatro.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("4")
       }
    })
    cuatro.addEventListener("mousedown",function(){
      cuatro.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cuatro.addEventListener("mouseout",function(){
      cuatro.setAttribute("style","transform:scale(1,1)")
    })
    cinco.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("5")
       }
    })
    cinco.addEventListener("mousedown",function(){
      cinco.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cinco.addEventListener("mouseout",function(){
      cinco.setAttribute("style","transform:scale(1,1)")
    })
    seis.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("6")
       }
    })
    seis.addEventListener("mousedown",function(){
      seis.setAttribute("style","transform:scale(0.95,0.95)")
    })
    seis.addEventListener("mouseout",function(){
      seis.setAttribute("style","transform:scale(1,1)")
    })
    siete.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("7")
       }
    })
    siete.addEventListener("mousedown",function(){
      siete.setAttribute("style","transform:scale(0.95,0.95)")
    })
    siete.addEventListener("mouseout",function(){
      siete.setAttribute("style","transform:scale(1,1)")
    })
    ocho.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("8")
       }
    })
    ocho.addEventListener("mousedown",function(){
      ocho.setAttribute("style","transform:scale(0.95,0.95)")
    })
    ocho.addEventListener("mouseout",function(){
      ocho.setAttribute("style","transform:scale(1,1)")
    })
    nueve.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.numero("9")
       }
    })
    nueve.addEventListener("mousedown",function(){
      nueve.setAttribute("style","transform:scale(0.95,0.95)")
    })
    nueve.addEventListener("mouseout",function(){
      nueve.setAttribute("style","transform:scale(1,1)")
    })
    punto.addEventListener("click",function(){
      self.numero(".")
    })
    punto.addEventListener("mousedown",function(){
      punto.setAttribute("style","transform:scale(0.95,0.95)")
    })
    punto.addEventListener("mouseout",function(){
      punto.setAttribute("style","transform:scale(1,1)")
    })
    on.addEventListener("click",function(){
      self.operar("on")
    })
    on.addEventListener("mousedown",function(){
      on.setAttribute("style","transform:scale(0.95,0.95)")
    })
    on.addEventListener("mouseout",function(){
      on.setAttribute("style","transform:scale(1,1)")
    })
    sign.addEventListener("click",function(){
      if(display.textContent.length<8)
       {
         self.operar("sign")
       }
    })
    sign.addEventListener("mousedown",function(){
      sign.setAttribute("style","transform:scale(0.95,0.95)")
    })
    sign.addEventListener("mouseout",function(){
      sign.setAttribute("style","transform:scale(1,1)")
    })
    raiz.addEventListener("click",function(){
      self.operar("raiz")
    })
    raiz.addEventListener("mousedown",function(){
      raiz.setAttribute("style","transform:scale(0.95,0.95)")
    })
    raiz.addEventListener("mouseout",function(){
      raiz.setAttribute("style","transform:scale(1,1)")
    })
    div.addEventListener("click",function(){
      display.innerHTML="";
      operandos.operador="/";
    })
    div.addEventListener("mousedown",function(){
      div.setAttribute("style","transform:scale(0.95,0.95)")
    })
    div.addEventListener("mouseout",function(){
      div.setAttribute("style","transform:scale(1,1)")
    })
    por.addEventListener("click",function(){
      display.innerHTML="";
      operandos.operador="*";
    })
    por.addEventListener("mousedown",function(){
      por.setAttribute("style","transform:scale(0.95,0.95)")
    })
    por.addEventListener("mouseout",function(){
      por.setAttribute("style","transform:scale(1,1)")
    })
    menos.addEventListener("click",function(){
      display.innerHTML="";
      operandos.operador="-";
    })
    menos.addEventListener("mousedown",function(){
      menos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    menos.addEventListener("mouseout",function(){
      menos.setAttribute("style","transform:scale(1,1)")
    })
    mas.addEventListener("click",function(){
      display.innerHTML="";
      operandos.operador="+";
    })
    mas.addEventListener("mousedown",function(){
      mas.setAttribute("style","transform:scale(0.95,0.95)")
    })
    mas.addEventListener("mouseout",function(){
      mas.setAttribute("style","transform:scale(1,1)")
    })
    igual.addEventListener("click",function(){
      self.operar("igual")
    })
    igual.addEventListener("mousedown",function(){
      igual.setAttribute("style","transform:scale(0.95,0.95)")
    })
    igual.addEventListener("mouseout",function(){
      igual.setAttribute("style","transform:scale(1,1)")
    })


}




}

calculadora.init()
