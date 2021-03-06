class Plinko {
    constructor(x,y,radius) {
      var options = {
          restitution:1,
          friction:0,
          isStatic: true
      }
      this.radius =10;
      this.body = Bodies.rectangle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill("white");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };
