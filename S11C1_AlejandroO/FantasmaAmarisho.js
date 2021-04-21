class FantasmaAmarisho extends Fantasmas{
    constructor(x, y,dir,r,g,b){
        super(x,y,dir,r,g,b);
    }

    especial(){
        this.saltar();
    }

    saltar(){
        if(this.y>400){
            this.y = 0; 
        }
    }
    mover(){
        if(this.dir === 1){            
            this.y++;
        }
    }
}
