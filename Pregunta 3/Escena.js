//==========================
var clock = new THREE.Clock();
//preparar el render
//Render
var Render = new THREE.WebGLRenderer();
//Eseceanrio
var Escenario = new THREE.Scene();
//Figura
var Particula;

var controls;
var ancho = window.innerWidth;
var alto = window.innerHeight;
var angulo = 45;
var aspecto = ancho/alto;
var cerca = 0.001;
var lejos = 10000;

//Camara
var Camara = new THREE.PerspectiveCamera(angulo,aspecto,cerca,lejos);
var ambientLight = new THREE.AmbientLight( 0x111111 );
//THREEx.WindowResize(Render,Camara);

/******************************Funciones*****************************/

try {
    inicio();
    animation();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}

/********************************** Inicio **************************/

function inicio(){
    Render.setSize(ancho,alto);
    document.getElementById('container').appendChild(Render.domElement);
    Camara.position.z = 120;
    Camara.position.y = 100;
    Escenario.add(Camara);
    //crear_plano();
    cargar_suelo();
    cargar_pared();
    cargar_pizarra();
    cargar_pc();
    cargar_centro();
    
    Escenario.add(ambientLight);
    controls = new THREE.OrbitControls(Camara,Render.domElement);

}
function cargar_suelo(){
    Geometria_piso = new THREE.PlaneGeometry(200,200,20,20);
    textura_piso = new THREE.ImageUtils.loadTexture('textures/azulejo.jpg');
    textura_piso.wrapS = textura_piso.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(1,1);

    Material_piso = new THREE.MeshBasicMaterial({map:textura_piso, side:THREE.DoubleSide});
    Terrirotio_piso = new THREE.Mesh(Geometria_piso,Material_piso);
    // Terrirotio_piso.rotation.y = 0.5;
    Terrirotio_piso.rotation.x = Math.PI/2;
    Escenario.add(Terrirotio_piso);
}
function cargar_pared(){
    //atras - adelante
    Geometria = new THREE.PlaneGeometry(200,20);
    textura = new THREE.ImageUtils.loadTexture('textures/pared3.jpg');
    Material = new THREE.MeshBasicMaterial({map: textura, side: THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.position.set(0, 10, -70);
    Escenario.add(Terrirotio); 
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(0, 10, 70);
    Escenario.add(Terrirotio);
    //izquierda - derecha
    textura2 = new THREE.ImageUtils.loadTexture('textures/pared.jpeg');
    Material = new THREE.MeshBasicMaterial({map: textura2, side: THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(-70, 10, 0);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(70, 10, 0);
    Escenario.add(Terrirotio);
    //puerta
    Geometria = new THREE.BoxGeometry( 15, 20, 2 );
    textura = new THREE.ImageUtils.loadTexture('textures/pue.jpeg');
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(1,1);
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);

    Terrirotio.rotation.z = Math.PI;
    Terrirotio.position.set(40, 10, 70);
    Escenario.add(Terrirotio);

}
function cargar_pizarra(){
    Geometria = new THREE.BoxGeometry( 40, 15,1);
    textura = new THREE.ImageUtils.loadTexture('textures/pizarra.jpg');
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;    
    //textura.repeat.set(1,1);
    var initialX = (30 + 1) / 2; // Considerando el ancho de la pizarra y el espacio entre ellas

// Obtener la posición original en el eje z
    var originalZ = 33; 
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
   
   Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(49, 15, 25);
    Escenario.add(Terrirotio);
   

    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(49, 15, -25);
    Escenario.add(Terrirotio);


    //tarima
   
}
function cargar_pc(){
   
    mueble(40,0,-55);
    mueble(-55,0,-55);
    mueble(-55,0,-45);
    mueble(-55,0,-35);
    mueble(-55,0,-25);
    mueble(-55,0,-15);
   
   
    mueble(-35,0,-55);
    mueble(-35,0,-45);
    mueble(-35,0,-35);
    mueble(-35,0,-25);
    mueble(-35,0,-15);
    
    mueble(-15,0,-55);
    mueble(-15,0,-45);
    mueble(-15,0,-35);
    mueble(-15,0,-25);
    mueble(-15,0,-15);

    mueble(5,0,-55);
    mueble(5,0,-45);
    mueble(5,0,-35);
    mueble(5,0,-25);
    mueble(5,0,-15);

    mueble(25,0,-55);
    mueble(25,0,-45);
    mueble(25,0,-35);
    mueble(25,0,-25);
    mueble(25,0,-15);
    //
    mueble(-35,0,55);
    mueble(-35,0,45);
    mueble(-35,0,35);
    mueble(-35,0,25);
    mueble(-35,0,15);

    mueble(-15,0,55);
    mueble(-15,0,45);
    mueble(-15,0,35);
    mueble(-15,0,25);
    mueble(-15,0,15);

    mueble(5,0,55);
    mueble(5,0,45);
    mueble(5,0,35);
    mueble(5,0,25);
    mueble(5,0,15);

    mueble(25,0,55);
    mueble(25,0,45);
    mueble(25,0,35);
    mueble(25,0,25);
    mueble(25,0,15);

    mueble(-55,0,55);
    mueble(-55,0,45);
    mueble(-55,0,35);
    mueble(-55,0,25);
    mueble(-55,0,15);
}
function mueble(x, y, z){
    Geometria = new THREE.BoxGeometry( 8, 10,1);
    textura = new THREE.ImageUtils.loadTexture('textures/mesa2.jpeg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x, y+5, z+5);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x, y+5, z-5);
    Escenario.add(Terrirotio);
    Geometria = new THREE.BoxGeometry( 8, 1,10);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x, y+9, z);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x, y+4, z);
    Escenario.add(Terrirotio);
    //monitor
    Geometria = new THREE.BoxGeometry( 1, 4,8);
    textura = new THREE.ImageUtils.loadTexture('textures/fonfop.jpeg');
    Material = new THREE.MeshBasicMaterial({color:0x222222, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+2, y+13, z);
    Escenario.add(Terrirotio);
    Geometria = new THREE.BoxGeometry( 1, 1,1);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+2, y+10.5, z);
    Escenario.add(Terrirotio);
    Geometria = new THREE.BoxGeometry( 1, 1,3);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+2, y+9.5, z);
    Escenario.add(Terrirotio);
    Geometria = new THREE.PlaneGeometry(8,4);
    Material = new THREE.MeshBasicMaterial({map:textura, side: THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);  
    Terrirotio.rotation.y = Math.PI/2;
    Terrirotio.position.set(x+1.5, y+13, z);
    Escenario.add(Terrirotio); 
}
function cargar_centro(){  
   
    
    silla(5,0,5,-1); 

    silla(25,0,5,-1);

   
}
function mesa(x){
    Geometria = new THREE.BoxGeometry( 30, 2, 10);
    textura = new THREE.ImageUtils.loadTexture('textures/escritorio.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+0, 10, 0);
    Escenario.add(Terrirotio);
    Geometria = new THREE.BoxGeometry( 1, 10, 1);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+14, 5, 4);
    Escenario.add(Terrirotio);

    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+14, 5, -4);
    Escenario.add(Terrirotio);
    
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-14, 5, 4);
    Escenario.add(Terrirotio);
  
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set(x+-14, 5, -4);
    Escenario.add(Terrirotio);
}
function silla(x,y,z,w){
    Geometria = new THREE.BoxGeometry( 1, 10, 0.5);
    textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({map:textura, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material);   
    Terrirotio.position.set((x+2)*w, y+5,(z+3.5));
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+2)*w, y+5, (z-3.5));
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 1, 5, 0.5);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+-2)*w, y+2.5, (z+-3.5));
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.position.set((x+-2)*w, y+2.5, (z+3.5));
    Escenario.add(Terrirotio);

    Geometria = new THREE.BoxGeometry( 7, 0.5, 4);
    //textura = new THREE.ImageUtils.loadTexture('textures/metalico.jpg');
    Material = new THREE.MeshBasicMaterial({color:0x222222, side:THREE.DoubleSide});
    Terrirotio = new THREE.Mesh(Geometria,Material); 
    Terrirotio.rotation.y = Math.PI/2;  
    Terrirotio.position.set(x*w, y+5,z);
    Escenario.add(Terrirotio);
    Terrirotio = new THREE.Mesh(Geometria,Material);
    Terrirotio.rotation.x = Math.PI/2;
    Terrirotio.rotation.z = Math.PI/2;
    Terrirotio.position.set((x+2)*w, y+8, (z));
    Escenario.add(Terrirotio);

}
function silla2() {
    // Dibujar respaldo
    const respaldoGeometry = new THREE.BoxGeometry(0.5, 10, 2);
    const respaldoMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const respaldo = new THREE.Mesh(respaldoGeometry, respaldoMaterial);
    respaldo.position.set(5, 5, 0);
    Escenario.add(respaldo);

    // Dibujar asiento
    const asientoGeometry = new THREE.BoxGeometry(5, 5, 5);
    const asientoMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const asiento = new THREE.Mesh(asientoGeometry, asientoMaterial);
    asiento.position.set(2.5, 0.5, 0);
    Escenario.add(asiento);

    // Dibujar patas
    const pataGeometry = new THREE.BoxGeometry(0.5, 10, 0.5);
    const pataMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const pataTraseraIzquierda = new THREE.Mesh(pataGeometry, pataMaterial);
    pataTraseraIzquierda.position.set(4.5, 0, -2);
    Escenario.add(pataTraseraIzquierda);

    const pataTraseraDerecha = new THREE.Mesh(pataGeometry, pataMaterial);
    pataTraseraDerecha.position.set(4.5, 0, 2);
    Escenario.add(pataTraseraDerecha);

    const pataDelanteraIzquierda = new THREE.Mesh(pataGeometry, pataMaterial);
    pataDelanteraIzquierda.position.set(0.5, 0, -2);
    Escenario.add(pataDelanteraIzquierda);

    const pataDelanteraDerecha = new THREE.Mesh(pataGeometry, pataMaterial);
    pataDelanteraDerecha.position.set(0.5, 0, 2);
    Escenario.add(pataDelanteraDerecha);
}






function animation(){
    requestAnimationFrame(animation);
    render_modelo();
}
function render_modelo(){
    var delta = clock.getDelta();
	controls.update(delta);
    //Particula.rotation.y = Particula.rotation.y + 0.01;
    Render.render(Escenario,Camara);
}