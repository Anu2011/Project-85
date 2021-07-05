canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width = 100;
car1_height = 90;

background_image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F01%2F05%2F31%2F03%2F360_F_105310319_e3WEPbC2xrzII3mNkW55yQzuevpT99Dd.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Ffi%2Fsearch%2Fimages%3Fk%3Dracecar%2520background&tbnid=u6NoP_mzCFQjeM&vet=12ahUKEwiGiYmSvMzxAhUoheAKHeARB-sQMygCegUIARC-AQ..i&docid=XIXC_M47oLDx8M&w=540&h=360&itg=1&q=racecar%20background%20image&ved=2ahUKEwiGiYmSvMzxAhUoheAKHeARB-sQMygCegUIARC-AQ";
car1_image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Froar24-2018-friday-marshallpruett-258-1609356367.jpg&imgrefurl=https%3A%2F%2Fwww.roadandtrack.com%2Fnews%2Fa35099646%2Frace-car-frauds-beware-of-competitors-with-no-sponsors%2F&tbnid=67dl9r3gUU5j7M&vet=12ahUKEwiChuvavMzxAhWMrnIEHXhuDIAQMygAegUIARCnAg..i&docid=lvdfvbUkLh9TcM&w=2000&h=1000&q=racecar%20image&ved=2ahUKEwiChuvavMzxAhWMrnIEHXhuDIAQMygAegUIARCnAg";

car1_x = 10;
car1_y = 10;

function add() {
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car1_imgTag= new Image();
car1_imgTag.onload= uploadrover;
car1_imgTag.src= car1_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    }

window.addEventListener("keyDown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){

up();
console.log("up");
}
if(keyPressed == '40'){

    down();
    console.log("down");
    }
    if(keyPressed == '37'){

        left();
        console.log("left");
        }
        if(keyPressed == '39'){

            right();
            console.log("right");
            }
}

function up() {
if(car1_y >=0){
car1_y = car1_y - 10;
console.log ("When up arrow is pressed, x = " + car1_x + "| y = " + car1_y);
uploadBackground();
uploadcar1();
}
}

function down() {
    if(car1_y <=500){
    car1_y = car1_y + 10;
    console.log ("When down arrow is pressed, x = " + car1_x + "| y = " + car1_y);
    uploadBackground();
    uploadcar1();
    }
    }

    function left() {
        if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log ("When left arrow is pressed, x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadcar1();
        }
        }

        function right() {
            if(car1_x <=700){
            car1_x = car1_x + 10;
            console.log ("When right arrow is pressed, x = " + car1_x + "| y = " + car1_y);
            uploadBackground();
            uploadcar1();
            }
            }
            canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car2_width = 100;
car2_height = 90;

background_image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F01%2F05%2F31%2F03%2F360_F_105310319_e3WEPbC2xrzII3mNkW55yQzuevpT99Dd.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Ffi%2Fsearch%2Fimages%3Fk%3Dracecar%2520background&tbnid=u6NoP_mzCFQjeM&vet=12ahUKEwiGiYmSvMzxAhUoheAKHeARB-sQMygCegUIARC-AQ..i&docid=XIXC_M47oLDx8M&w=540&h=360&itg=1&q=racecar%20background%20image&ved=2ahUKEwiGiYmSvMzxAhUoheAKHeARB-sQMygCegUIARC-AQ";
car2_image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F5%2F2017%2F08%2FChevrolet-Camaro-ZL1-RaceCar-Monster-Energy-NASCAR-Cup-Series-04.jpg&imgrefurl=https%3A%2F%2Fwww.motortrend.com%2Fnews%2Fchevrolets-new-nascar-race-car-will-look-like-camaro-zl1%2F&tbnid=rxZGQciseexZFM&vet=12ahUKEwiChuvavMzxAhWMrnIEHXhuDIAQMygTegUIARDTAg..i&docid=ZAe7xVcB6a5gbM&w=2048&h=1360&q=racecar%20image&ved=2ahUKEwiChuvavMzxAhWMrnIEHXhuDIAQMygTegUIARDTAg";

car2_x = 10;
car2_y = 10;

function add() {
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car2_imgTag= new Image();
car2_imgTag.onload= uploadrover;
car2_imgTag.src= car2_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }

window.addEventListener("keyDown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){

up();
console.log("up");
}
if(keyPressed == '40'){

    down();
    console.log("down");
    }
    if(keyPressed == '37'){

        left();
        console.log("left");
        }
        if(keyPressed == '39'){

            right();
            console.log("right");
            }
}

function up() {
if(car2_y >=0){
car2_y = car2_y - 10;
console.log ("When up arrow is pressed, x = " + car2_x + "| y = " + car2_y);
uploadBackground();
uploadcar1();
}
}

function down() {
    if(car2_y <=500){
    car2_y = car2_y + 10;
    console.log ("When down arrow is pressed, x = " + car2_x + "| y = " + car2_y);
    uploadBackground();
    uploadcar2();
    }
    }

    function left() {
        if(car2_x >=0){
        car2_x = car2_x - 10;
        console.log ("When left arrow is pressed, x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadcar2();
        }
        }

        function right() {
            if(car2_x <=700){
            car2_x = car2_x + 10;
            console.log ("When right arrow is pressed, x = " + car2_x + "| y = " + car2_y);
            uploadBackground();
            uploadcar2();
            }
            }
            