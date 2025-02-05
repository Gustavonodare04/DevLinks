function toggleMode() {
    const html = document.documentElement
     html.classList.toggle('light')

     // pegar tag img
    const img = document.querySelector("#profile img")
    //trocar a imagem em light e dark mode
 if(html.classList.contains('light')){

    img.setAttribute("src", "./assets/baixados.jpg")
    } else {

        img.setAttribute("src", "./assets/baixados.png")

    }



   
}