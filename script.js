const chars = "@%#*+=-:. ";

let selectedImage = null;


document
    .getElementById("imageInput")
    .addEventListener("change", function () {

        selectedImage = this.files[0];

        if (selectedImage) {
            document.getElementById("fileName").innerText =
                selectedImage.name;
        }

    });



function convertImage() {

    if (!selectedImage) {
        alert("Select an image first!");
        return;
    }


    const img = new Image();

    img.onload = function () {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");


        const width = 100;
        const height = Math.floor(
            img.height / img.width * width * 0.45
        );


        canvas.width = width;
        canvas.height = height;


        ctx.drawImage(
            img,
            0,
            0,
            width,
            height
        );


        const pixels = ctx.getImageData(
            0,
            0,
            width,
            height
        ).data;


        let ascii = "";


        for (let y = 0; y < height; y++) {

            for (let x = 0; x < width; x++) {

                const index =
                    (y * width + x) * 4;


                const r = pixels[index];
                const g = pixels[index + 1];
                const b = pixels[index + 2];


                const brightness =
                    (r + g + b) / 3;


                const char =
                    chars[
                        Math.floor(
                            brightness / 255 *
                            (chars.length - 1)
                        )
                    ];


                ascii +=
                    `<span style="color:rgb(${r},${g},${b})">${char}</span>`;

            }


            ascii += "<br>";

        }


        document.getElementById("ascii").innerHTML = ascii;

    };


    img.src = URL.createObjectURL(selectedImage);

}




function copyASCII() {

    const output =
        document.getElementById("ascii")
        .innerText;


    navigator.clipboard.writeText(output);

    alert("ASCII copied!");

}