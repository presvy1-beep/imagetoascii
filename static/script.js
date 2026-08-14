const imageInput =
document.getElementById("imageInput");


const fileName =
document.getElementById("fileName");



imageInput.addEventListener(
"change",
()=>{

if(imageInput.files.length){

fileName.textContent =
imageInput.files[0].name;

}
else{

fileName.textContent =
"NO FILE SELECTED";

}

});





async function convertImage(){


const file =
imageInput.files[0];



if(!file){

alert(
"Select an image first"
);

return;

}



const formData =
new FormData();


formData.append(
"image",
file
);



const response =
await fetch(
"/convert",
{

method:"POST",

body:formData

}
);



const data =
await response.json();



document.getElementById(
"ascii"
).innerHTML =
data.ascii;


}





function copyASCII(){


const ascii =
document.getElementById(
"ascii"
).innerText;



navigator.clipboard.writeText(
ascii
);



alert(
"ASCII copied"
);

}