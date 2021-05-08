canvas = new fabric.Canvas("Canvas");
block_imgwidth = 30;
block_imgheight = 30;
heroX = 10;
heroY = 10;

hero_object = "";
blockimg_object = "";

function playerUpdate() {
    fabric.Image.fromUrl("thor.png",function(img){
        hero_object = img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top:heroY,
            left:heroX

        });

        canvas.add(hero_object)
    })
}

function newImage(getImage) {
    fabric.Image.fromUrl(getImage,function (img) {
        blockimg_object = img;
        blockimg_object.scaleToWidth(block_imgwidth);
        block_imgheight.scaleToHeight(block_imgheight);
        blockimg_object.set({
            top:heroY,
            left:heroX
        });

        canvas.add(blockimg_object)
    })
}