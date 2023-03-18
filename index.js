const images = [
    "./images/pic-1.jpg",
    "./images/pic-2.jpg",
    "./images/pic-3.jpg",
    "./images/pic-4.jpg",
    "./images/pic-5.jpg",
    "./images/pic-6.jpg",
    "./images/pic-7.jpg",
    "./images/pic-8.jpg",
    "./images/pic-9.jpg",

];
let setIndex = 0;
const elementImage = document.getElementById('element-Image');
setInterval(()=>{
    if(setIndex === images.length){
        setIndex = 0;
    }
    const imageUrl = images[setIndex];
    elementImage.setAttribute('src',imageUrl ) 
    // console.log(imageUrl)

        setIndex ++;
},1000)