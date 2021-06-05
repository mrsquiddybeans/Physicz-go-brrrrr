class Ground{
constructor(x,y,width,height){
    var options={
     isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world, this.body)
}
display () {
var gamecube=this.body.position
rectMode(CENTER)
rect (gamecube.x, gamecube.y,this.width,this.height)
}
}