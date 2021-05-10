canvas = new fabric.Canvas("Canvas");
bodypart_imgwidth = 30;
bodypart_imgheight = 30;
heroX = 10;
heroY = 10;

hero_object = "";
bodypartimg_object = "";

function heroUpdate() {
    fabric.Image.fromURL("thor.png", function (img) {
        hero_object = img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top: heroY,
            left: heroX

        });

        canvas.add(hero_object)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (img) {
        bodypartimg_object = img;
        bodypartimg_object.scaleToWidth(bodypart_imgwidth);
        bodypartimg_object.scaleToHeight(bodypart_imgheight);
        bodypartimg_object.set({
            top: heroY,
            left: heroX
        });

        canvas.add(bodypartimg_object)
    })
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;

    

    if (keypressed == 38) {
        up();
    }

    if (keypressed == 40) {
        down();
    }

    if (keypressed == 37) {
       left() ;
    }

    if (keypressed == 39) {
        right();
    }






    if (keypressed == 70 ) {
        newImage("spiderman_face.png")
    }

    if (keypressed == 66) {
        newImage("hulkd_body.png")
    }

    if (keypressed == 76) {
        newImage("hulk_legs.png")
    }

    if (keypressed == 82) {
        newImage("thor_right_hand.png")
    }

    if (keypressed == 72) {
        newImage("ironman_left_hand.png")
    }

    if (e.shiftKey == true && keypressed == 80) {
        console.log(e.shiftKey)
        bodypart_imgwidth = bodypart_imgwidth + 10;
        bodypart_imgheight = bodypart_imgheight + 10 ;
        document.getElementById("Width_ofbodypart").innerHTML = bodypart_imgwidth;
        document.getElementById("Height_ofbodypart").innerHTML = bodypart_imgheight;
        console.log("increase")
    }

    if (e.shiftKey == true && keypressed == 77) {
        bodypart_imgwidth = bodypart_imgwidth - 10;
        bodypart_imgheight = bodypart_imgheight - 10 ;
        document.getElementById("Width_ofbodypart").innerHTML = bodypart_imgwidth;
        document.getElementById("Height_ofbodypart").innerHTML = bodypart_imgheight;
    }
}


function up() {
    if (heroY >= 0) {
        heroY = heroY - bodypart_imgheight;
        canvas.remove(hero_object);
        heroUpdate();
    }
}

function down() {
    if (heroY <= 500) {
        heroY = heroY + bodypart_imgheight;
        canvas.remove(hero_object);
        heroUpdate();
    }
}

function left() {
    if (heroX >= 0) {
        heroX = heroX - bodypart_imgwidth;
        canvas.remove(hero_object);
        heroUpdate();
    }
}

function right() {
    if (heroX <= 900) {
        heroX = heroX + bodypart_imgwidth;
        canvas.remove(hero_object);
        heroUpdate();
    }
}