class Pumpkin extends BaseClass{
    constructor(x, y){
        super(x, y, 70, 70);
        this.image = loadImage("./sprites/pumpkin.png");
    }
    
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}
