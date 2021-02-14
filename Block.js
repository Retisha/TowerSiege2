class Block{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'restitution':0.4,
            'friction':0,
        
        }
        this.x = x;
        this.y = y;
       this.width = width;
       this.height = height;
        
        //this.image = loadImage('paper.png')
    this.visibily = 255;
    
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)

    World.add(world,this.body);
}
display()
{
    if(this.body.speed >3){
        World.remove(world,this.body)
    }
    else{
    var posPaper = this.body.position;
    //imageMode(CENTER)
   // image(this.image,posPaper.x,posPaper.y,100,100)
    rectMode(CENTER)
    rect(posPaper.x,posPaper.y,this.width,this.height)
    }
}
}