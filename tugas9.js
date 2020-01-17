// learn how to use for in loop
function panggilObject() {
    var jimshoney = {
        nama : "ellen",
        warna : ["pink", "coklat", "ungu"],
        ukuran : ["medium", "small", "large"]
    }
    for(var x in jimshoney){
        console.log(jimshoney[x]);
    }   
    }
    panggilObject();