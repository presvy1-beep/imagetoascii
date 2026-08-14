from flask import Flask, render_template, request, jsonify
from PIL import Image

app = Flask(__name__)


ASCII_CHARS = "@%#*+=-:. "


def image_to_ascii(image, width=100):

    image = image.convert("RGB")

    ratio = image.height / image.width

    height = int(width * ratio * 0.45)

    image = image.resize((width, height))


    ascii_output = []


    for y in range(height):

        line = ""

        for x in range(width):

            r, g, b = image.getpixel((x, y))


            brightness = (r + g + b) // 3


            char = ASCII_CHARS[
                brightness * (len(ASCII_CHARS)-1) // 255
            ]


            line += (
                f'<span style="color:rgb({r},{g},{b})">'
                f'{char}'
                f'</span>'
            )


        ascii_output.append(line)


    return "<br>".join(ascii_output)



@app.route("/")
def home():
    return render_template("index.html")



@app.route("/convert", methods=["POST"])
def convert():

    file = request.files["image"]

    image = Image.open(file)

    ascii_art = image_to_ascii(image)


    return jsonify({
        "ascii": ascii_art
    })



if __name__ == "__main__":
    app.run(debug=True)