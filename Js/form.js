class Form{
    constructor(){
        this.title = createElement("h1")
        this.selection = loadImage("Images/Selection.png");


    }

    display(){
        imageMode(CENTER)
        image(this.selection,width/2,height/2)
    }
}