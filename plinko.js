class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0
      }
      this.r=10
      this.body = Bodies.circle(x,y,this.r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };