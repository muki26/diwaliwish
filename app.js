var fname ;
var button = document.getElementById('button');
button.addEventListener('click', ()=>{
    var muki;
   
   fname = document.getElementById('name').value;
    console.log('your output is' + fname);
    muki = fname.length;
    if(fname == ""){
        alert("Peru Adida Venna..!");
    }
    else if(fname <= 1000000000000000000000000000000000000000000000000000000){
        alert("Un Peru Adida Tousser uhh...!");
    }
    else if(muki == 1 )
    alert("IAS Velaya Paakura ... ? Un Pera Adida");
    else if(muki == 2 )
    alert("Adinguu.... Pambara Katta Mandaya");
    else if(muki == 3)
    alert("Nambura Mathiri Ilayae...! ");
    else {
        location = "https://muki26.github.io/dw1/";
    }

    
});


