


/*function presionarTecla(elemento) {
document.querySelectorAll("[class^='teclado'] img")[12].style.width = "27%";
 document.querySelectorAll("[class^='teclado'] img")[12].style.height = "60.91px";
}
function soltarTecla(elemento){
  document.querySelectorAll("[class^='teclado'] img")[12].style.width = "29%";
  document.querySelectorAll("[class^='teclado'] img")[12].style.height = "62.91px";
}*/
/*function tecla(event) {

  var numOp = event.target.id;
  console.log(numOp);
  document.getElementById(numOp.toString()).style.transform= "translateY(4px)";

}*/








var calculadora = {

  init: function(){
    var numeroOperacion = ""
  document.getElementById("calculadoraFondo").addEventListener('click',function(event){
    numeroOperacion = event.target.id;
    numeroOperacion.addEventListener("mousedown",function(){
        numeroOperacion.setAttribute("style","transform:scale(0.95,0.95)")
      })
      numeroOperacion.addEventListener("mouseout",function(){
        numeroOperacion.setAttribute("style","transform:scale(1,1)")
      })

  })

/*  numeroOperacion.addEventListener("mousedown",function(){
    numeroOperacion.setAttribute("style","transform:scale(0.95,0.95)")
  })
  numeroOperacion.addEventListener("mouseout",function(){
    numeroOperacion.setAttribute("style","transform:scale(1,1)")
  })*/
  /*  document.getElementById("id").onmouseover = presionarTecla; // aca capturar el id del elemento
    document.getElementById(id).onmouseout = soltarTecla; */

}




}

calculadora.init()
