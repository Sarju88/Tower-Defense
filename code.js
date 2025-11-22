// Flag for debugging soldier collisions
var debugEverything = false;
// Home screen grooup
var homeScreen = createGroup();
// Start game button declaration
var startGame = null;
// Game screen group declaration
var gameScreen = createGroup();
// game over screen group
var gameOverScreen = createGroup();
// Build plates in the game
var buildSpot = createGroup();
// Turrets in the game
var turrets = createGroup();
// Enemies in the game
var enemiesGroup = createGroup();
var missileGroup = createGroup();
// Game state
var gameState = {screen: homeScreen, funds: 1000, lives: 10};
// Invisible collision boxes that allow soldiers to go along the path. Set debugEverything = true to see them
var checkpoints = [];
// Heads up display items on bottom right showing the turrets that can be dropped
var hudItems = [];
var mouseDragging = false;
var dragProxy = null;
/// Define turrets

// Setup the screens
setupGameScreen();
setupHomeScreen();
setupGameOverScreen();

// Factory for Turret
function SingleTurret(x, y, isDummy) {
  var turret = createSprite(x, y);
  turret.isDummy = isDummy;
  turret.cost = 400;
  turret.attack = 10;
  turret.base = createSprite(x, y);
  turret.base.setAnimation("tower_base");
  turret.base.scale = 0.5;
  turret.scale = 0.5;
  turret.setAnimation("turret");
  turret.pause();
  turrets.add(turret);
  turrets.add(turret.base);
  turret.depth = turret.base.depth + 2;
  turret.setCollider("circle", 0, 0, 160);
  turret.firedAt = 0;
  turret.fireTurret = function (enemy) {
    if(World.frameCount - this.firedAt > 15) {
      enemy.health = enemy.health - this.attack;
      this.play();
      this.firedAt = World.frameCount;
      playSound("gun-1736313719663.mp3");
    }
  }
  return turret;
}

// Factory for Rocket
function RocketTurret(x, y) {
  var turret = createSprite(x, y);
  turret.cost = 800;
  turret.attack = 20;
  turret.base = createSprite(x, y);
  turret.base.setAnimation("tower_base");
  turret.base.scale = 0.5;
  turret.scale = 0.5;
  turret.setAnimation("anti_air_tower");
  turret.setFrame(1);
  turret.pause();
  turret.firedAt = 0;
  turret.depth = turret.base.depth + 2;
  turrets.add(turret);
  turrets.add(turret.base);
  turret.setCollider("circle", 0, 0, 160);
  turret.fireTurret = function(enemy) {
    if(World.frameCount - this.firedAt > 25) {
      var missile = createSprite(this.x , this.y);
      missile.rotation = 90
      missile.scale = 0.5;
      missile.setAnimation("missile");
      missile.rotateToDirection = true;
      missile.target = enemy;
      missile.lifetime = 80;
      missile.attack = this.attack;
      missileGroup.add(missile);
      this.firedAt = World.frameCount;
      flyTo(missile, enemy, 0);
      playSound("woosh_northern87-91714.mp3");
    }
    
  }
  
  return turret;
}

// Factory for soldier
function Soldier(x, y) {
  var soldier = createSprite(x, y);
  soldier.health = 100;
  soldier.setAnimation("enemy_soldier");
  soldier.scale = 0.5;
  soldier.speed = 0.5 + Math.min(0.2 * World.seconds/25, 1.5 + 5);
  soldier.velocityY = -1 * soldier.speed;
  
  enemiesGroup.add(soldier);
  enemies.push(soldier);
}



var enemies = [];



function draw() {
  background("white");
  updateGame();
  drawSprites();
  showScore();
}

function getInput() {
  // This starts the game
  if(mouseWentUp("leftButton") && mouseIsOver(startGame)) {
    gameState.screen = gameScreen;
    return;
  }
  
  for(var i = 0; i < hudItems.length; i++) {
    var item = hudItems[i];
    if(mouseIsOver(item)) {
      item.tint = "#888888";
    } else {
      item.tint = "#FFFFFF";
    }
  }
  // This drags and drops the turret
  if (mouseWentDown("leftButton") && (mousePressedOver(hudItems[0]) || mousePressedOver(hudItems[1]))) {
    
    mouseDragging = true;
    
    if(mousePressedOver(hudItems[0])) {
      
      dragProxy = SingleTurret(World.mouseX, World.mouseY);
      
    } else if(mousePressedOver(hudItems[1])) {
      
      dragProxy = RocketTurret(World.mouseX, World.mouseY);
    }
  }
 
  // Stop dragging when mouse is released
  if (mouseWentUp("leftButton")) {
    mouseDragging = false;
    for(var i = 0; i < buildSpot.length; i++) {
      var spot = buildSpot.get(i);
      //console.log(gameState.funds > dragProxy.cost);
      if(dragProxy != null && spot.isTouching(dragProxy.base) && gameState.funds > dragProxy.cost) {
        //console.log("touching base");
        dragProxy.base.x = spot.x;
        dragProxy.base.y = spot.y;
        dragProxy.x = spot.x;
        dragProxy.y = spot.y;
        dragProxy.isDummy = false;
        gameState.funds -= dragProxy.cost;
        //console.log("turret deployed");
        //dragProxy = null;
      }
    }
  }
 
  if(mouseDragging) {
    dragProxy.x = World.mouseX;
    dragProxy.base.x = World.mouseX;
    dragProxy.y = World.mouseY;
    dragProxy.base.y = World.mouseY;
  }
  
  // Show feedback of where turret can be deployed and where it cannot
  if(mouseDragging && buildSpot.isTouching(dragProxy.base)) {
    dragProxy.base.tint = "white";
    dragProxy.tint = "white";
  } else if(mouseDragging) {
    dragProxy.base.tint = "red";
    dragProxy.tint = "red";
  }

  // Keyboard input
  if(keyWentUp("a")) {
    gameState.screen = gameScreen;
  }
}

// This does the transitions between screens
function updateScreen() {
  
  if(gameState.screen == homeScreen) {
    homeScreen.visible = true;
    gameScreen.visible = false;
    gameOverScreen.visible = false;
  } else if(gameState.screen == gameScreen) {
    homeScreen.setVisibleEach(false);
    gameScreen.setVisibleEach(true);
    gameOverScreen.setVisibleEach(false);
  } else if(gameState.screen == gameOverScreen) {
    homeScreen.setVisibleEach(false);
    gameScreen.setVisibleEach(false);
    gameOverScreen.setVisibleEach(true);
    turrets.setVisibleEach(false);
    missileGroup.setVisibleEach(false);
    enemiesGroup.setVisibleEach(false);
  }
  
}

function manageEnemy() {
  var deleteEnemy = [];
  for(var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    for(var p = 0; p < checkpoints.length; p++) {
      var path = checkpoints[p];
      if(enemy.isTouching(path)) {
        switch(p) {
          case 0: 
                  enemy.velocityX = enemy.speed;
                  enemy.velocityY =0;
                  enemy.rotation = 90;
                  break;
          case 1:
                  
                  enemy.velocityX = 0;
                  enemy.velocityY = -1 * enemy.speed;
                  enemy.rotation = 0;
                  break;
          case 2:
                  
                  enemy.velocityX = enemy.speed;
                  enemy.velocityY = 0;
                  enemy.rotation = 90;
                  break;
          case 3:
                  
                  enemy.velocityX = 0;
                  enemy.velocityY = enemy.speed;
                  enemy.rotation = 180;
                  break;
          case 4:
                  
                  enemy.velocityX = enemy.speed;
                  enemy.velocityY = 0;
                  enemy.rotation = 90;
                  break;
          case 5:
                  gameState.lives -= 1;
                  if(gameState.lives == 0) {
                    gameState.screen = gameOverScreen;
                  }
                  deleteEnemy.push(enemy);
                 
        }
       
        //console.log(enemy.velocityX + ", "+ enemy.velocityY);
      }
    }
  }
  for(var i =0; i < deleteEnemy.length; i++) {
    enemies.splice(enemies.indexOf(deleteEnemy[i]), 1);
    deleteEnemy[i].lifetime = 2;
  }
}

function fireTurrets() {
  for(var t = 0; t < turrets.length; t++) {
    var turret = turrets.get(t);
    for(var e = 0; e < enemiesGroup.length; e++) {
      var enemy = enemiesGroup.get(e);
      // Check if the enemy is detected by the collider
      if(turret.isTouching(enemy) && turret.isDummy == false) {
        rotateSprite(turret, enemy, 90);
        turret.fireTurret(enemy);
        //console.log(enemy.health);
        if (enemy.health <= 0) {
          enemy.destroy();
          gameState.funds += 100;
          turret.pause();
        }
      }
    }
  }
  
  for(var m = 0; m < missileGroup.length; m++) {
    // get the missile
    var missile = missileGroup.get(m);
    // Check if the missile is hitting the target
    if(missile.isTouching(missile.target)) {
      // set the lifetime to make it disappear
      missile.lifetime = 1;
      // create the explosion animation
      var explosion = createSprite(missile.target.x, missile.target.y);
      explosion.setAnimation("explosion");
      explosion.alpha = 0.8;
      explosion.scale = 1;
      explosion.lifetime = 10;
      explosion.play();
      playSound("small-explosion-129477.mp3");
      // Apply the damage from the missile
      missile.target.health -= missile.attack;
      // destroy the missile
      missileGroup.remove(missile);
      // if the target is dead, remove it and apply the rewards
      if(missile.target.health <= 0) {
        missile.target.lifetime = 1;
        gameState.funds += 100;
      }
    }
  }
}

function updateGame() {
  updateScreen();
  
  getInput();
  manageEnemy();
  // enemy turret check
  fireTurrets();
  addEnemy();
}

// Setup heads up display
function setupHUD() {
  var box = createSprite(346, 376, 96, 40);
  gameScreen.add(box);
 
  var item = SingleTurret(320, 377, true);
  item.scale = 0.5;
  item.rotation = -90;
  item.setAnimation("turret");
  item.setCollider("rectangle");
  hudItems.push(item);
  gameScreen.add(item);
  
  item = RocketTurret(365, 377);
  item.scale = 0.5;
  item.rotation = -90;
  item.setAnimation("anti_air_tower");
  item.pause();
  item.setFrame(1);
  item.setCollider("rectangle");
  gameScreen.add(item);
  hudItems.push(item);
 
}

// Setup background
function setupBackground() {
  var background = createSprite(200, 200, 400, 400);
  background.setAnimation("map");
  gameScreen.add(background);
}

// Setup home screen
function setupHomeScreen() {
  var homeBackground = createSprite(200, 200);
  homeBackground.setAnimation("game_screen.jpg_1");
  homeScreen.add(homeBackground);
  startGame = createSprite(208, 276, 270, 70);
  startGame.setAnimation("start_game");
  homeScreen.add(startGame);
}

function setupGameScreen() {
  setupBackground();
  setupPath();
  setupBuildSpots();
  setupHUD();
}

// Send wave of enemies
function addEnemy() {
  if(World.frameCount % 50 == 0 && gameState.screen == gameScreen) {
    Soldier(47, 410);
  }
  
}

// Setup build plates
function setupBuildSpots() {
  var spots = [{x: 97, y: 342}, {x: 143, y: 342}, {x: 57, y: 244}, {x: 108, y: 244},
  {x: 126, y: 194}, {x: 126, y: 140}, {x: 126, y: 90}, {x: 160, y: 40}, {x: 126, y: 90},
  {x: 228, y: 148}, {x: 200, y: 40}, {x: 250, y: 40}, {x: 300, y: 40}, {x: 340, y: 88},
  {x: 340, y: 138}, {x: 340, y: 188}, {x: 340, y: 238}];
  for(var i = 0; i < spots.length; i++) {
    var spot = spots[i];
    var spotSprite = createSprite(spot.x, spot.y, 32, 32);
    spotSprite.scale = 0.5;
    spotSprite.setAnimation("tower_build");
    buildSpot.add(spotSprite);
    gameScreen.add(spotSprite);
  }
}

// Add the invisible collision boxes for the enemies to collide and turn on
function setupPath() {
  var checkpoint1 = createSprite(54, 262, 32, 32);
  checkpoint1.visible = debugEverything;
  checkpoints.push(checkpoint1);
  var checkpoint2 = createSprite(190, 288, 32, 32);
  checkpoint2.visible = debugEverything;
  checkpoints.push(checkpoint2);
  var checkpoint3 = createSprite(170, 60, 32, 32);
  checkpoint3.visible = debugEverything;
  checkpoints.push(checkpoint3);
  var checkpoint4 = createSprite(314, 88, 32, 32);
  checkpoint4.visible = debugEverything;
  checkpoints.push(checkpoint4);
  var checkpoint5 = createSprite(295, 328, 32, 32);
  checkpoint5.visible = debugEverything;
  checkpoints.push(checkpoint5);
  var checkpoint6 = createSprite(420, 310, 32, 32);
  checkpoint6.visible = debugEverything;
  checkpoints.push(checkpoint6);
}

function setupGameOverScreen() {
 
   var gameOver = createSprite(200, 200);
   gameOver.setAnimation("gameover");
   gameOverScreen.add(gameOver);
   gameOverScreen.setVisibleEach(false);
}

// Utility function to rotate turrets towards enemies
function rotateSprite(source, target, initial) {
  // Complicated Math Alert!!!
  var angleInRadians = Math.atan2(target.y - source.y, target.x - source.x); // Trignometry
  var angleInDegrees = angleInRadians * 180 / Math.PI; // Convert radians to degrees
  source.rotation = angleInDegrees + initial;
}

// Utility function to make rockets fly towards target
function flyTo(source, target, initial) {
  var angleInRadians = Math.atan2(target.y - source.y, target.x - source.x); // Trignometry
  var angleInDegrees = angleInRadians * 180 / Math.PI; // Convert radians to degrees
  source.setSpeedAndDirection(4, angleInDegrees + initial);
}

// Show the score and sprites
function showScore() {
  if(gameState.screen == gameScreen) {
    fill("black");
    text("FUNDS:",320,20);
    text(gameState.funds, 365, 20);
    text("LIVES:",260,20);
    text(gameState.lives, 300, 20);
    fill("black");
  text("Drag and Drop Turrets onto build plate", 90, 380);
  text("Turrets", 310, 350);
  }
  
}
