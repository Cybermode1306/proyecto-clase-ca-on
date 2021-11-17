class ammo_canon{
  constructor(x,y){
  var opptions= {
  isStatic=true  
  }
  this. x= x;
  this. y= y; 
  this. r=30;
  this. body=Bodyes.circle(x,y,this.r)
  this.ammo=loadimage("assets/ammo.jpg")
  World.add(world,this.body)
} 
  display () {
  var angle=this.body.angle;
  var position=this.body.position
  push();
  imageMode(CENTER)
  image(this.ammo,position.x,position.y,position.r,angle);
  pop()
}
    
} 