class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
    if(this.body.speed < 3){
      push();
      rectMode(CENTER);
     // fill("aqua");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       //fill("aqua");
        
       pop();
     }
    
        

    }

    score(){
        if(this.Visibility<0&&this.Visibility>-105){
      score++
        }
        
      
        }
}