let a = 0
let b = 0
let c = 0
let d = 0
let f = 0
let mus_1 = new Audio("o.mp3")
let mus_2 = new Audio("y.mp3")
let mus_3 = new Audio("l.mp3") 
let mus_4 = new Audio("r.mp3") 
let mus_5 = new Audio("i.mp3")  
let play_1 = document.querySelector(".play")
let play_2 = document.querySelector(".pla")
let play_3 = document.querySelector(".pl")
let play_4 = document.querySelector(".p")
let play_5 = document.querySelector(".plays")
play_1.onclick = function(){
    a++
    if(a % 2 == 1){
        play_1.src = "pause.png"
        mus_1.play()
    }else{
        play_1.src = "play.png"
        mus_1.pause()
    }
}
play_2.onclick = function(){
    b++
    if(b % 2 == 1){
        play_2.src = "pause.png"
        mus_2.play()
    }else{
        play_2.src = "play.png"
        mus_2.pause()
    }
}
play_3.onclick = function(){
    c++
    if(c % 2 == 1){
        play_3.src = "pause.png"
        mus_3.play()
    }else{
        play_3.src = "play.png"
        mus_3.pause()
    }
}
play_4.onclick = function(){
    d++
    if(d % 2 == 1){
        mus_4.play()
        play_4.src = "pause.png"
    }else{
        play_4.src = "play.png"
        mus_4.pause()
    }
}
play_5.onclick = function(){
    f++
    if(f % 2 == 1){
        play_5.src = "pause.png"
        mus_5.play()
    }else{
        play_5.src = "play.png"
        mus_5.pause()
    }
}