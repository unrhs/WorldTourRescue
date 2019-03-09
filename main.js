var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//probamos que todo funcione:
//ctx.fillRect(0,0,50,50); Se generó el cuadro


// Insertamos todas las imágenes que ocuparemos en el juego Backgrounds y enemigos
// Nótese  que se insertan como variables.

//var loaded = false;
var music = new Audio();
// music.addEventListener('loadeddata', function()
// {
//     loaded=true;
//     start();
// },false);

music.src = './Sounds/gmusic.mp3'
music.loop = true;

var dun = new Audio();
    dun.src = "./Sounds/dun-dun-dun.mp3"
var eleph = new Audio();
    eleph.src = "./Sounds/elephant.mp3"
var takeOff = new Audio();
    takeOff.src = "./Sounds/takeOff.mp3"
var fillGas = new Audio();
    fillGas.src = "./Sounds/fillGas.mp3"
var gong = new Audio();
    gong.src = "./Sounds/gong.mp3"
var mummy = new Audio();
    mummy.src = "./Sounds/mummy.mp3"
var indian = new Audio();
    indian.src = "./Sounds/indian.mp3"
var tank = new Audio();
    tank.src = "./Sounds/tank.mp3"
var launch = new Audio();
    launch.src = "./Sounds/launch.mp3"


var imagen1 = './Images/back1.jpg'
var imagen2 = './Images/back2.jpg'
var imagen3 = './Images/back3.jpg'
var imagen4 = './Images/back4.jpg'
var imagen5 = './Images/back5.jpg'
var imagen6 = './Images/back6.jpg'
var mommy = './Images/mummy.png'
var warrior = './Images/warrior.png'
var hindu = './Images/hindu.png'
var elepaphant = './Images/elephant.png'
var elepaphant2 = './Images/elephant2.png'
var gasPremium = './Images/gas.png'
var f16air = './Images/F-16.png'
var parachute = './Images/parachute1.png'
var enemies = [];
var enemiesA = [];
var enemiesB = [];
var enemiesC = [];
var enemiesD = [];
var enemiesE = [];
var fogs = [];
var gasoline = 1000;
var notEnemies = [];


// Generamos la clase de los buenos que en realidad es uno
// Agregamos las imágenes para hacer el efecto de movimiento con la nave. 


class Thegood{
    constructor(good){
        this.good = good
        this.imagen1 = new Image()
        this.imagen1.src = './Images/spaceship1.png'
        this.imagen2 = new Image()
        this.imagen2.src = './Images/spaceship2.png'
        this.imagen = this.imagen1;
        this.x = 0;
        this.y = 470;
        this.width = 60;
        this.height = 80;
    }

// Al momento del choque está ya definido

    collision =function(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

// Se imprime el personaje 

    draw(){
        if(this.y < 475) this.y += 4;
        if(frames % 10 === 0){
             this.imagen = this.imagen == this.imagen1 ? this.imagen2 : this.imagen1;
        }
        ctx.drawImage(this.imagen, this.x, this.y, this.width,this.height);
    }
    
}

// el enemigo a vencer es en primera instancia las momias.
// El enemigo estará declarado en una función. 

function Enemy(x){
    this.x = x
    this.y = 0
    this.width = 32
    this.height = 72
    this.imagen = new Image()
    this.imagen.src = mommy
    this.imagen.onload = function(){
        this.draw()
        
    }.bind(this)
    mummy.play()
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

//GASOLINE
function NotEnemy(x){
    this.ene= false
    this.x = x
    this.y = 0
    this.width = 75
    this.height = 75
    this.imagen = new Image()
    this.imagen.src = gasPremium
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

function NotEnemyb(x){
    this.ene= false
    this.x = x
    this.y = 0
    this.width = 75
    this.height = 75
    this.imagen = new Image()
    this.imagen.src = gasPremium
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}


function EnemyA(x){
    this.ene= true
    this.x = x
    this.y = 0
    this.width = 72
    this.height = 72
    this.imagen = new Image()
    this.imagen.src = warrior
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    gong.play()
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function EnemyB(x){
    this.ene= true
    this.x = x
    this.y = 0
    this.width = 54
    this.height = 54
    this.imagen = new Image()
    this.imagen.src = hindu
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    indian.play()
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
/*function EnemyC(x=canvas.width){
    this.x = x
    this.y = 550
    this.width = 200
    this.height = 200
    this.imagen = new Image()
    this.imagen.src = elepaphant
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.x--
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}*/
function EnemyE(x){
    this.ene= true
    this.x = x
    this.y = 0
    this.width = 28
    this.height = 54
    this.imagen = new Image()
    this.imagen.src = parachute
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    launch.play()
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}



class EnemyC {
    constructor(x=canvas.width){
        this.ene= true
        this.x = x;
        this.y = 475;
        this.width = 120
        this.height = 90
        this.imagen = new Image()
        this.imagen.src = elepaphant
        // this.imagen2 = new Image()
        // this.imagen2.src = elepaphant2
        // elepaphant = elepaphant2
    }
    
    draw(){
        if(frames % 20) this.x -= 5;
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
        eleph.play();
    }
}

class EnemyD {
    constructor(x=canvas.width){
        this.ene= true
        this.x = x;
        this.y = 475;
        this.width = 120
        this.height = 90
        this.imagen = new Image()
        this.imagen.src = f16air
    }
    
    draw(){
        if(frames % 20) this.x -= 5;
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
        tank.play();
    }
}

//FOG

class Fog{
    constructor(pos, y, height){
        this.x = canvas.width;  // que las pipes vayan de afuera a adentro
        this.y = y; // lo pasamos desde el exterior cuando tengamos una instancia
        this.width = 1199; 
        this.height = height; 
        this.image = new Image();
        this.image.src = "./Images/fog-7.png" && "./Images/fog-8.png"                        //si la variable pos es igual top entonces regreso la imagen top antes de ? operador ternario
    }
    draw(){
        this.x -= 12;  //los pipes se dibujan fuera del canvas
        ctx.globalCompositeOperation='source-over';
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function gasolineDisplay() {
    //health
    ctx.font = "bold 24px Arial";
    ctx.fillText("Gasoline Premium:" + gasoline, 80, 20);
}

// para el background necesito un arreglo de imágenes que tomaran las variables ya descritas. 


var misBackground = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6]
class Background{
    constructor(imagen,secondImage){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.imagen = new Image()
        this.imagen.src = imagen
        this.level = 0
        this.imagen1 = new Image()
        this.imagen1.src = secondImage
    }       

  //Imprimimos las imágenes de background.  

    draw(image,secondImage){
        this.x;
        this.level
        this.imagen.src = image
        this.imagen1.src = secondImage
       if(this.x-- < -canvas.width){this.x = 0; this.level ++};

       ctx.drawImage(this.imagen,this.x,this.y,this.width,this.height);          
       ctx.drawImage(this.imagen,this.x + this.width,this.y,this.width,this.height); 
       ctx.drawImage(this.imagen1,this.x + this.width,this.y,this.width,this.height); 
     }
}



var fondo = new Background();
var enemy1 = new Enemy(0)
var enemy2 = new Enemy(128)
var enemy3 = new Enemy(384)
var enemyA1 = new EnemyA(0)
var enemyA2 = new EnemyA(128)
var enemyA3 = new EnemyA(384)
var enemyB1 = new EnemyB(0)
var enemyB2 = new EnemyB(128)
var enemyB3 = new EnemyB(384)
var notEnemy1 = new NotEnemy(0)
var notEnemy2 = new NotEnemy(128)
var notEnemy3 = new NotEnemy(384)
var notEnemyb1 = new NotEnemyb(0)
var notEnemyb2 = new NotEnemyb(128)
var notEnemyb3 = new NotEnemyb(384)
var enemyE1 = new EnemyE(0)
var enemyE2 = new EnemyE(128)
var enemyE3 = new EnemyE(384)

newBackground=()=>{            
}
var theGood = new Thegood("Space");

var frames = 0;
var interval;


//ARREGLO DE START

function start(){
    music.play();
    clearInterval(interval); 
    interval = setInterval(update, 1000/80)
}



function update(){
    // sumamos cada cuadro que dibujamos
    frames++
    // borramos el canvas
    var new_image = misBackground[fondo.level]
    var new_second = misBackground[fondo.level +1]
    // Dibujamos el background
    fondo.draw(new_image,new_second);
    theGood.draw();
    generateEnemy();
    drawEnemies();
    generateNotEnemy();
    drawNotEnemies();
    generateNotEnemyb();
    drawNotEnemiesb();
    generateEnemyA();
    drawEnemiesA();
    generateEnemyB();
    drawEnemiesB();
    generateEnemyC();
    drawEnemiesC();
    generateEnemyD();
    drawEnemiesD();
    generateEnemyE();
    drawEnemiesE();
    generateFog();
    drawFog();
    checkCollition();
    gasolineDisplay();
    drainGasoline();
   }

// Declaramos la cantidad de enemigos que queremos. 
function drainGasoline(){
    if(frames % 64 === 0){
       gasoline -= 20
    }
    if (gasoline <= 0) 
    gameOver()
}
function generateEnemy(){
    if(frames % 64 === 0 && frames >= 900 && frames <= 1800){
        const x = Math.floor(Math.random() * 8)
        enemies.push(new Enemy(x * 164))
    }
}
function drawEnemies(){
    enemies.forEach(function(enemy){
        enemy.draw()
    })
}

function drawNotEnemies(){
    notEnemies.forEach(function(notEnemy){
        notEnemy.draw()
    })
}

function generateNotEnemy(){
    if(frames % 64 === 0 && frames >= 900 && frames <= 1800 ){
        const x = Math.floor(Math.random() * 8)
        notEnemies.push(new NotEnemy(x * 164))
    }
}
function drawNotEnemiesb(){
    notEnemies.forEach(function(notEnemy){
        notEnemy.draw()
    })
}

function generateNotEnemyb(){
    if(frames % 64 === 0 && frames >= 3600 && frames <= 4800 ){
        const x = Math.floor(Math.random() * 8)
        notEnemies.push(new NotEnemy(x * 164))
    }
}


function generateEnemyA(){
    if(frames % 120 === 0 && frames <= 900 ){
        const x = Math.floor(Math.random() * 8)
        enemiesA.push(new EnemyA(x * 164))
    }
}

function drawEnemiesA(){
    enemiesA.forEach(function(enemyA){
        enemyA.draw()
    })
}

function generateEnemyB(){
    if(frames % 64 === 0 && frames >= 1800 && frames <= 2700){
        const x = Math.floor(Math.random() * 8)
        enemiesB.push(new EnemyB(x * 164))
    }
}

function drawEnemiesB(){
    enemiesB.forEach(function(enemyB){
        enemyB.draw()
    })
}

function generateEnemyC() {
    if (frames % 2300 == 0 || frames % 1550 == 0 && frames >= 1000 && frames <= 1600) {
        let enemyC = new EnemyC();
        enemiesC.push(enemyC);
    }
}

function drawEnemiesC() {
    enemiesC.forEach((enemyC, index) => {
        if(enemyC.x < -canvas.width){
        return enemiesC.splice(index, 1);  
        } 
        enemyC.draw();

    })
}

function generateEnemyD() {
    if (frames % 2500 == 0 || frames % 550 == 0 && frames >= 3800 && frames <= 4800) {
        let enemyD = new EnemyD();
        enemiesD.push(enemyD);
    }
}

function drawEnemiesD() {
    enemiesD.forEach((enemyD, index) => {
        if(enemyD.x < -canvas.width){
        return enemiesD.splice(index, 1);  
        } 
        enemyD.draw();

    })
}

function generateEnemyE(){
    if(frames % 64 === 0 && frames >= 3600 && frames <= 4500){
        const x = Math.floor(Math.random() * 8)
        enemiesE.push(new EnemyE(x * 164))
    }
}
function drawEnemiesE(){
    enemiesE.forEach(function(enemyE){
        enemyE.draw()
    })
}


function generateFog(){
    //definir cada cuando creo pipes
    if(!(frames % 100 === 0)) return;
    let height = Math.floor((Math.random() * canvas.height * .6) + 0) 
    let fog1 = new Fog("top", 0, height);
    let fog2 = new Fog(null, fog1.height + 0, canvas.height - 120 );
   fogs.push(fog1);
   fogs.push(fog2);
   console.log(fogs)
   }

   function drawFog(){
    fogs.forEach((fog, index) =>{ 
        if(fog.x < -canvas.width-30) return fogs.splice(index, 1);// 
        fog.draw();     //para dibujar las instancias en el  arreglo
      
    })
}

function gameOver(){
    clearInterval(interval)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText('GAME OVER',490,100)
    ctx.fillText(fogs.length, 630,150)
    music.pause();
    takeOff.pause();
    eleph.pause();
    dun.play();
    interval = null;
}
function checkCollition(){
    enemies.forEach(enemy=>{
        if(theGood.collision(enemy)){
            gameOver()
        }
    
    })

    notEnemies.forEach(gas=>{
        if(theGood.collision(gas)){
            gasoline += 50
            notEnemies.splice(gas,1)
            fillGas.play()
        }
        console.log('gasolina',gasoline)
    })

    enemiesA.forEach(enemyA=>{
        if(theGood.collision(enemyA)){
            gameOver()
        }
    
    }) 

    enemiesB.forEach(enemyB=>{
        if(theGood.collision(enemyB)){
            gameOver()
        }
    
    })  
    enemiesC.forEach(enemyC=>{
        if(theGood.collision(enemyC)){
            gameOver()
        }
           
    })

    enemiesD.forEach(enemyD=>{
        if(theGood.collision(enemyD)){
            gameOver()
        }
           
    })
    
    enemiesE.forEach(enemyE=>{
        if(theGood.collision(enemyE)){
            gameOver()
        }
           
    })


}

function restart(){
    frames = 0;
    interval = undefined;
    fogs=[];
    music.currentTime = 0
}



addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        if(theGood.x <= 0) return
        theGood.x -= 40;
    }
    if(e.keyCode === 39){
        if(theGood.x >= canvas.width - 64) return
        theGood.x += 40;
    }
    if(e.keyCode === 38){
        theGood.y -= 16;
        takeOff.volume = .1;
        takeOff.play();
             }
    if(e.keyCode === 32){
                theGood.y -= 140;
                takeOff.play();
                     }  
})

start()

