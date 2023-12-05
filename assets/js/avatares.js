const imgObjetivos = document.getElementsByClassName("imgObjetivo")
for (const imgObjetivo of imgObjetivos){
    imgObjetivo.addEventlistener("mouseover",function(){
        imgObjetivo.style.transform="rotate(20deg)"
    })
    
    imgObjetivo.addEventlistener("mouseout", function(){
        imgObjetivo.style.transform="rotate(0deg)"
    })
}