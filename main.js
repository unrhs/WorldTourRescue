var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//probamos que todo funcione:
//ctx.fillRect(0,0,50,50); Se generó el cuadro


// Insertamos todas las imágenes que ocuparemos en el juego Backgrounds y enemigos
// Nótese  que se insertan como variables.


var imagen1 = './Images/back1.jpg'
var imagen2 = './Images/back2.jpg'
var imagen3 = './Images/back3.jpg'
var imagen4 = './Images/back4.jpg'
var mommy = 'https://vignette.wikia.nocookie.net/pokeespectaculos/images/6/68/Momia_.png/revision/latest?cb=20120330203246&path-prefix=es'
var warrior = './Images/warrior.png'
var hindu = './Images/hindu.png'
var elepaphant = './Images/elephant.png'
var gasPremium = './Images/gas.png'
var enemies = [];
var enemiesA = [];
var enemiesB = [];
var enemiesC = [];
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
    this.width = 54
    this.height = 54
    this.imagen = new Image()
    this.imagen.src = mommy
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

//GASOLINE
function NotEnemy(x){
    this.x = x
    this.y = 0
    this.width = 54
    this.height = 54
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
    this.x = x
    this.y = 0
    this.width = 54
    this.height = 54
    this.imagen = new Image()
    this.imagen.src = warrior
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y++
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}
function EnemyB(x){
    this.x = x
    this.y = 0
    this.width = 54
    this.height = 54
    this.imagen = new Image()
    this.imagen.src = hindu
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
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

class EnemyC {
    constructor(x=canvas.width){
        this.x = x;
        this.y = 475;
        this.width = 100
        this.height = 80
        this.imagen = new Image()
        this.imagen.src = elepaphant
    }
    
    draw(){
        if(frames % 30) this.x -= 5;
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
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
    ctx.font = "bold 14px Arial";
    ctx.fillText("Gasoline Premium:"+gasoline, 80, 20);
}



// para el background necesito un arreglo de imágenes que tomaran las variables ya descritas. 


var misBackground = [imagen1,imagen2,imagen3,imagen4]
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


newBackground=()=>{            

}
var theGood = new Thegood("Space");

var frames = 0;
var interval = setInterval(function(){
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
    generateEnemyA();
    drawEnemiesA();
    generateEnemyB();
    drawEnemiesB();
    generateEnemyC();
    drawEnemiesC();
    generateFog();
    drawFog();
    checkCollition();
    gasolineDisplay();
}, 1000/80)

// Declaramos la cantidad de enemigos que queremos. 

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
    if(frames % 64 === 0 && frames >= 900 && frames <= 1800){
        const x = Math.floor(Math.random() * 8)
        notEnemies.push(new NotEnemy(x * 164))
    }
}





function generateEnemyA(){
    if(frames % 64 === 0 && frames <= 900 ){
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
    if(frames % 64 === 0 && frames >= 1800){
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
    if (frames % 2500 == 0 || frames % 550 == 0 && frames >= 900 && frames <= 1800) {
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
        /*if(ship.collision(crater)){
            craters.splice(index, 1); 
            impacts++;
        }*/
    })
}

/*function generateEnemyC(){
    if(frames % 64 === 0){
        enemiesC.push(enemyC1)
    }
}

function drawEnemiesC(){
    enemiesC.forEach(function(enemyC1){
        enemyC1.draw()
    })
}*/

// function checkCollition(){
//     enemies.forEach(enemy=>{
//         if(theGoods.checkIfTouch(enemy)){
//             gameOver()
//         }
//     })
// }

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
}
function checkCollition(){
    enemies.forEach(enemy=>{
        if(theGood.collision(enemy)){
            gameOver()
        }
    
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
}

function restart(){
    frames = 0;
    interval = undefined;
    fogs=[];
   
}



addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        if(theGood.x <= 0) return
        theGood.x -= 50;
    }
    if(e.keyCode === 39){
        if(theGood.x >= canvas.width - 64) return
        theGood.x += 50;
    }
    if(e.keyCode === 38){
        theGood.y -= 16;
               
             }
    if(e.keyCode === 32){
                theGood.y -= 140;
                     }  
    
})

 start()

