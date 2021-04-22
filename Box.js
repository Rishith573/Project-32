class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution : 0,
        friction : 0.25,
        density : 0.001
    };
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed<5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(135, 206, 234));
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      World.remove(world, this.body);
    }
  }
}
