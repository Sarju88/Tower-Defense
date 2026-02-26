

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["de36ec48-fd9f-484e-93a1-ff2629af779c","0c9b1f4a-0044-462c-920f-f6003c5d64d4","475bd066-9163-490a-9bf1-3c4c0338841c","0ca017f6-848e-44b3-959d-a6e5992d146f","77aefeab-1f00-4331-ae17-dd6bccf05487","72e323d2-0c2a-4732-8e3e-9763075c71ee","d373c180-83b0-48d9-9efe-631539c460fc","986e9ee3-f385-441d-bd36-48d525e2c999","ebbca90b-c739-4349-b92d-3ffb31bc1323","75fed7ac-0fd2-4d36-96e3-740b897e8e9e","5a1328cc-7239-4180-87c4-9dab213cb8c7","c139744c-b7aa-49ae-a165-fbfb7c26234a","28f748de-5769-448e-9ddc-160e318534e6","351d791e-2b3c-4cb3-833d-6bf08408ced5","813eab7d-cd1f-41c0-8f78-edf163e3e959","ba29e6ee-558c-43b4-be38-45821b754107","602beb4e-32b6-41c6-93fe-12e73dd83702","589050ad-194d-49c3-801a-210d298b3d2f"],"propsByKey":{"de36ec48-fd9f-484e-93a1-ff2629af779c":{"name":"flash","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/de36ec48-fd9f-484e-93a1-ff2629af779c.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"4mAYFl01Ix8MnquJ5hYPDNMgXmChQWD7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/de36ec48-fd9f-484e-93a1-ff2629af779c.png"},"0c9b1f4a-0044-462c-920f-f6003c5d64d4":{"name":"rocket","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/0c9b1f4a-0044-462c-920f-f6003c5d64d4.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"_7UBHWlsIm9_UzYrQw1XR8aKYSFDMW_e","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/0c9b1f4a-0044-462c-920f-f6003c5d64d4.png"},"475bd066-9163-490a-9bf1-3c4c0338841c":{"name":"enemy_soldier","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/475bd066-9163-490a-9bf1-3c4c0338841c.png","frameSize":{"x":28,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"B9waBl5k6BZNHOvy7Ys4NVBHF0pNdhrO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":20},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/475bd066-9163-490a-9bf1-3c4c0338841c.png"},"0ca017f6-848e-44b3-959d-a6e5992d146f":{"name":"double-turret","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/0ca017f6-848e-44b3-959d-a6e5992d146f.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"7sDHCs7W3WAfVJJ2hfOqJ4cdKCj8fQDu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/0ca017f6-848e-44b3-959d-a6e5992d146f.png"},"77aefeab-1f00-4331-ae17-dd6bccf05487":{"name":"map","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/77aefeab-1f00-4331-ae17-dd6bccf05487.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"ga5uw9fe4PY9RTjahK4Q9J6NCDs3aowU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/77aefeab-1f00-4331-ae17-dd6bccf05487.png"},"72e323d2-0c2a-4732-8e3e-9763075c71ee":{"name":"tower_build","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/72e323d2-0c2a-4732-8e3e-9763075c71ee.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"O04qTuSbkIBpHnuLm4U3efgCQqQi4ORm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/72e323d2-0c2a-4732-8e3e-9763075c71ee.png"},"d373c180-83b0-48d9-9efe-631539c460fc":{"name":"tower_base","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/d373c180-83b0-48d9-9efe-631539c460fc.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"t6d1wFAxScqqQ6dOt8AoqC7WIOf_BGf7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/d373c180-83b0-48d9-9efe-631539c460fc.png"},"986e9ee3-f385-441d-bd36-48d525e2c999":{"name":"anti_air_tower","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/986e9ee3-f385-441d-bd36-48d525e2c999.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"olu42yih5TasLRsT0uqvJipfatrVEbTo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/986e9ee3-f385-441d-bd36-48d525e2c999.png"},"ebbca90b-c739-4349-b92d-3ffb31bc1323":{"name":"towerDefense_tile205.png_2","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/ebbca90b-c739-4349-b92d-3ffb31bc1323.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"v9RfetCUn22Qzqf7oJDU.CwEdOz3eNIg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/ebbca90b-c739-4349-b92d-3ffb31bc1323.png"},"75fed7ac-0fd2-4d36-96e3-740b897e8e9e":{"name":"game_screen.jpg_1","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/75fed7ac-0fd2-4d36-96e3-740b897e8e9e.png","frameSize":{"x":460,"y":458},"frameCount":1,"looping":true,"frameDelay":4,"version":"6JjfmGno0U0unDLF4.0T_eJR19M1i1j.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":460,"y":458},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/75fed7ac-0fd2-4d36-96e3-740b897e8e9e.png"},"5a1328cc-7239-4180-87c4-9dab213cb8c7":{"name":"start_game","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/5a1328cc-7239-4180-87c4-9dab213cb8c7.png","frameSize":{"x":285,"y":74},"frameCount":1,"looping":true,"frameDelay":4,"version":"F6mfT3qdme7F3rYISf01XbGq_W2S8cjR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":285,"y":74},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/5a1328cc-7239-4180-87c4-9dab213cb8c7.png"},"c139744c-b7aa-49ae-a165-fbfb7c26234a":{"name":"turret","sourceUrl":null,"frameSize":{"x":64,"y":96},"frameCount":3,"looping":true,"frameDelay":12,"version":"Dzs066Dqw0iJLeTxK.FTPnBFufEUkPeS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":192},"rootRelativePath":"assets/c139744c-b7aa-49ae-a165-fbfb7c26234a.png"},"28f748de-5769-448e-9ddc-160e318534e6":{"name":"towerDefense_tile251.png_1","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/28f748de-5769-448e-9ddc-160e318534e6.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"WkPaFG2re.zgNBhqdKsMMpTgU9FeTDxs","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/28f748de-5769-448e-9ddc-160e318534e6.png"},"351d791e-2b3c-4cb3-833d-6bf08408ced5":{"name":"missile","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"IacxVV0UhZ_V_QGYzYiAt18r6fvHOFDM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/351d791e-2b3c-4cb3-833d-6bf08408ced5.png"},"813eab7d-cd1f-41c0-8f78-edf163e3e959":{"name":"explosion","sourceUrl":null,"frameSize":{"x":64,"y":63},"frameCount":5,"looping":false,"frameDelay":4,"version":"z5IduqaBlqA3yZpo6yq.QxOxC27oYwfH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":189},"rootRelativePath":"assets/813eab7d-cd1f-41c0-8f78-edf163e3e959.png"},"ba29e6ee-558c-43b4-be38-45821b754107":{"name":"planeGreen1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4mFa.jM6Smmg6K9wq4hGG.m_F5JZ5..i/category_vehicles/planeGreen1.png","frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"4mFa.jM6Smmg6K9wq4hGG.m_F5JZ5..i","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4mFa.jM6Smmg6K9wq4hGG.m_F5JZ5..i/category_vehicles/planeGreen1.png"},"602beb4e-32b6-41c6-93fe-12e73dd83702":{"name":"bunny1_1","sourceUrl":null,"frameSize":{"x":122,"y":209},"frameCount":2,"looping":true,"frameDelay":10,"version":"A_mp.im9eZcy1tWtv6G9lZisvqX4etYX","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":209},"rootRelativePath":"assets/602beb4e-32b6-41c6-93fe-12e73dd83702.png"},"589050ad-194d-49c3-801a-210d298b3d2f":{"name":"gameover","sourceUrl":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/589050ad-194d-49c3-801a-210d298b3d2f.png","frameSize":{"x":463,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"KpUNFjkLY1ujF0cgRFdtzynER4nk0_kL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":463,"y":400},"rootRelativePath":"assets/v3/animations/Ppmzt2Wlt0y4G4cgyThYSLjBPqEwgiIL3oc4fiLH04M/589050ad-194d-49c3-801a-210d298b3d2f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Flag for debugging soldier collisions
var debugEverything = true;
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
      playSound("assets/gun-1736313719663.mp3");
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
      playSound("assets/woosh_northern87-91714.mp3");
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
  
  if(keyWentUp("d")) {
    debugEverything = !debugEverything;
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
      playSound("assets/small-explosion-129477.mp3");
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

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
