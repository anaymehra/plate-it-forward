
var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", ()=>{
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
