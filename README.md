# ASCII Studio

A modern terminal-inspired web application that converts images into colored ASCII art.

## Features

- Upload images and convert them into ASCII art
- Preserves original image colors
- btop-inspired terminal interface
- Copy ASCII output
- Runs locally using Flask
- Fast image processing using Pillow

## Tech Stack

- Python
- Flask
- Pillow
- HTML
- CSS
- JavaScript

## Installation

Clone the repository:

```bash
git clone https://github.com/presvy1-beep/imagetoascii.git
```

Navigate into the project directory:

```bash
cd imagetoascii
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open the application in your browser:

```
http://localhost:5000
```

## Project Structure

```
imagetoascii/
│
├── app.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
└── static/
    ├── script.js
    └── style.css
```

## License

This project is open source and available under the MIT License.
