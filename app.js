document.getElementById("Toggle").addEventListener("click", accionR)

          function  accionR (){
                    var menuContenido = document.getElementById("container-menu");

                    if(menuContenido.className == "container-menu"){
                              menuContenido.className = "menuDesplegable"
                    }
                    else{
                              menuContenido.className = "container-menu"
                    }
          }
