let fantasmaRojo = new FantasmaRojo(100,100,1,255,0,0);
let fantasmaVerde = new FantasmaVerde(200,100,0,0,255,0);
let fantasmaAmarisho = new FantasmaAmarisho(300,100,1,255,255,0);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fantasmaRojo.mostrar();
  fantasmaRojo.mover();
  
  fantasmaVerde.mostrar();
  fantasmaVerde.mover();

  fantasmaAmarisho.mostrar();
  fantasmaAmarisho.mover();

}


