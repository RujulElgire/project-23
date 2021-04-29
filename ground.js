class Ground {
    constructor(x,y,width,height,isStatic) {
      var options = {
          'density':10,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,isStatic,options);
      this.width = width;
      
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push ()
      fill(255,0,0);
      rect(pos.x, pos.y, this.width, this.height);
      pop ()
    }
  };