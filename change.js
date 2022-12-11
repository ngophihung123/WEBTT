var index = 1;
function changeImage(){
    var imgs1 = ["down1.jpg","down2.jpg","down3.jpg"]
    document.getElementById('img').src = imgs1[index];
   
    index++;
    if(index==3){
        index = 0;
    }
}
    setInterval(changeImage,1000);