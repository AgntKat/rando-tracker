/* This is a web tracker for The Minish Cap made by cubesolver111
   For any suggestions or questions, dm me on discord*/

//This section consists of variables for marking the items.
//If a variable has the word 'has' in it, it is a true/false variable
//that gets taoggled when clicked.
//If the variable is a number, there are multiple upgrades to the item or
//it is treated as a counter that is incremented on click, then reset after a certain point.
//The variables are broken up into 8 groups of 8 as they appear in the rows on the tracker.

//Color choices #453C3C, #877373
var color='#877373';

var sword = 0;
var hasJar = false;
var hasCane = false;
var boomerang = 0;
var wallet = 0;

var shield = 0;
var hasMitts = false;
var hasLantern = false;
var bombs = 0;
var stonesWilds = 0;

var hasBoots = false;
var hasCape = false;
var hasFlute = false;
var bow = 0;
var stonesClouds = 0;

var bottles = 0;
var hasJabber = false;
var hasMushroom = false;
var hasLLRKey = false;
var hasStonesFalls = false;

var hasGripRing = false;
var hasBracelets = false;
var hasFlippers = false;
var hasGraveKey = false;
var hasCarlov = false;

var hasEarth = false;
var hasFire = false;
var hasWater = false;
var hasWind = false;
var hasRed3 = false;

var hasSpin = false;
var hasRock = false;
var hasDash = false;
var hasThrust = false;
var hasLights = false;

var hasRoll = false;
var hasSwordBeam = false;
var hasPerilBeam = false;
var hasGreatSpin = false;

//This section handles the toggling and incrementing of each item.
//Like the variables, it is split up into 8 groups of 8 as the items appear
//in each row on the tracker.
//I could make every item with multiple upgrades use the same type of function as
//the kinstones and small keys, but I prefer the more descriptive image names.
//The only one I am considering changing to fit this style is the bow.

//Row 1
function changeSword() {
  if (sword==0) {
    $('#swords').css({filter:'grayscale(0%)'});
    sword++;
  }
  else if (sword==1) {
    $('#swords').attr('src', 'images/item sprites/Green Sword.png');
    sword++;
  }
  else if (sword==2) {
    $('#swords').attr('src', 'images/item sprites/Red Sword.png');
    sword++;
  }
  else if(sword==3) {
    $('#swords').attr('src', 'images/item sprites/Blue Sword.png');
    sword++;
  }
  else if (sword==4) {
    $('#swords').attr('src', 'images/item sprites/Four Sword.png');
    sword++;
  }
  else {
    $('#swords').attr('src', "images/item sprites/Smith's Sword.png");
    $('#swords').css({filter:'grayscale(100%)'});
    sword=0;
  }
}
function changeJar() {
  if(hasJar==false) {
    $('#jar').css({filter:'grayscale(0%)'});
    hasJar=true;
  }
  else {
    $('#jar').css({filter:'grayscale(100%)'});
    hasJar=false;
  }
}
function changeCane() {
  if(hasCane==false) {
    $('#cane').css({filter:'grayscale(0%)'});
    hasCane=true;
  }
  else {
    $('#cane').css({filter:'grayscale(100%)'});
    hasCane=false;
  }
}
function changeRang() {
  if(boomerang==0) {
    $('#rang').css({filter:'grayscale(0%)'});
    boomerang=1;
  }
  else if(boomerang==1) {
    $('#rang').attr('src', 'images/item sprites/Magical Boomerang.png');
    boomerang=2;
  }
  else {
    $('#rang').attr('src', 'images/item sprites/Boomerang.png');
    $('#rang').css({filter:'grayscale(100%)'});
    boomerang=0;
  }
}
function changeWallet() {
  if(wallet==0) {
    $('#wallet').attr('src', 'images/item sprites/Wallet300alt.png');
    $('#wallet').css({filter:'grayscale(0%)'});
    wallet++;
  }
  else if(wallet==1) {
    $('#wallet').attr('src', 'images/item sprites/Wallet500alt.png');
    wallet++;
  }
  else if(wallet==2) {
    $('#wallet').attr('src', 'images/item sprites/Wallet999alt.png');
    wallet++;
  }
  else {
    $('#wallet').attr('src', 'images/item sprites/Wallet300.png');
    $('#wallet').css({filter:'grayscale(100%)'});
    wallet=0;
  }
}

//Row 2
function changeShield() {
  if(shield==0) {
    $('#shields').css({filter:'grayscale(0%)'});
    shield++;
  }
  else if (shield==1) {
    $('#shields').attr('src','images/item sprites/Mirror Shield.png');
    shield++;
  }
  else {
    $('#shields').attr('src','images/item sprites/Small Shield.png');
    $('#shields').css({filter:'grayscale(100%)'});
    shield=0;
  }
}
function changeMitts() {
  if(hasMitts==false) {
    $('#mitts').css({filter:'grayscale(0%)'});
    hasMitts=true;
  }
  else {
    $('#mitts').css({filter:'grayscale(100%)'});
    hasMitts=false;
  }
}
function changeLantern() {
  if(hasLantern==false) {
    $('#lantern').css({filter:'grayscale(0%)'});
    $('#lantern').attr('src','images/item sprites/Flame Lantern (Lit).png');
    hasLantern=true;
  }
  else {
    $('#lantern').css({filter:'grayscale(100%)'});
    $('#lantern').attr('src','images/item sprites/Flame Lantern.png');
    hasLantern=false;
  }
}
function changeBombs() {
  if(bombs==0) {
    $('#bomb').css({filter:'grayscale(0%)'});
    $('#bomb').attr('src','images/item sprites/Bomb10.png');
    bombs++;
  }
  else if(bombs==1) {
    $('#bomb').attr('src','images/item sprites/Bomb30.png');
    bombs++;
  }
  else if(bombs==2) {
    $('#bomb').attr('src','images/item sprites/Bomb50.png');
    bombs++;
  }
  else if(bombs==3) {
    $('#bomb').attr('src','images/item sprites/Bomb99.png');
    bombs++;
  }
  else {
    $('#bomb').attr('src','images/item sprites/Bomb.png');
    $('#bomb').css({filter:'grayscale(100%)'});
    bombs=0;
  }
}
function changeStonesWilds() {
  if (stonesWilds<3) {
    stonesWilds++;
    $('#goldWilds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Wilds)' + stonesWilds +'.png');
    $('#goldWilds').css({filter:'grayscale(0%)'});
  }
  else {
    $('#goldWilds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Wilds).png');
    $('#goldWilds').css({filter:'grayscale(100%)'});
    stonesWilds=0;
  }

}

//Row 3
function changeBoots() {
 if(hasBoots==false) {
   $('#boots').css({filter:'grayscale(0%)'});
   hasBoots=true;
 }
 else {
   $('#boots').css({filter:'grayscale(100%)'});
   hasBoots=false;
 }
}
function changeCape() {
  if(hasCape==false) {
    $('#cape').css({filter:'grayscale(0%)'});
    hasCape=true;
  }
  else {
    $('#cape').css({filter:'grayscale(100%)'});
    hasCape=false;
  }
}
function changeFlute() {
  if(hasFlute==false) {
    $('#ocarina').css({filter:'grayscale(0%)'});
    hasFlute=true;
  }
  else {
    $('#ocarina').css({filter:'grayscale(100%)'});
    hasFlute=false;
  }
}
function changeBow() {
  if(bow==0) {
    $('#bow').css({filter:'grayscale(0%)'});
    $('#bow').attr('src','images/item sprites/Bow30.png');
    bow++;
  }
  else if (bow==1) {
    $('#bow').attr('src','images/item sprites/Bow50.png');
    bow++;
  }
  else if (bow==2) {
    $('#bow').attr('src','images/item sprites/Bow70.png');
    bow++;
  }
  else if (bow==3) {
    $('#bow').attr('src','images/item sprites/Bow99.png');
    bow++;
  }
  else {
    $('#bow').attr('src','images/item sprites/Bow.png');
    $('#bow').css({filter:'grayscale(100%)'});
    bow=0;
  }
}
function changeStonesClouds() {
  if(stonesClouds<5) {
    stonesClouds++;
    $('#goldClouds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Clouds)' + stonesClouds + '.png');
    $('#goldClouds').css({filter:'grayscale(0%)'});
  }
  else {
    $('#goldClouds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Clouds).png');
    $('#goldClouds').css({filter:'grayscale(100%)'});
    stonesClouds=0;
  }
}

//Row 4
function changeBottle() {
  if(bottles<4) {
    bottles++;
    $('#bottle').css({filter:'grayscale(0%)'});
    $('#bottle').attr('src','images/item sprites/Empty Bottle' + bottles + '.png');
  }
  else {
    $('#bottle').css({filter:'grayscale(100%)'});
    $('#bottle').attr('src','images/item sprites/Empty Bottle.png');
    bottles=0;
  }
}
function changeJabber() {
  if(hasJabber==false) {
    $('#jabber').css({filter:'grayscale(0%)'});
    hasJabber=true;
  }
  else {
    $('#jabber').css({filter:'grayscale(100%)'});
    hasJabber=false;
  }
}
function changeMushroom() {
  if(hasMushroom==false) {
    $('#mushroom').css({filter:'grayscale(0%)'});
    hasMushroom=true;
  }
  else {
    $('#mushroom').css({filter:'grayscale(100%)'});
    hasMushroom=false;
  }
}
function changeLLRKey() {
  if(hasLLRKey==false) {
    $('#llrKey').css({filter:'brightness(120%)'});
    hasLLRKey=true;
  }
  else {
    $('#llrKey').css({filter:'grayscale(100%)'});
    hasLLRKey=false;
  }
}
function changeStonesFalls() {
  if(hasStonesFalls==false) {
    $('#goldFalls').css({filter:'grayscale(0%)'});
    hasStonesFalls=true;
  }
  else {
    $('#goldFalls').css({filter:'grayscale(100%)'});
    hasStonesFalls=false;
  }
}

//Row 5
function changeGripRing() {
  if(hasGripRing==false) {
    $('#gripRing').css({filter:'grayscale(0%)'});
    hasGripRing=true;
  }
  else {
    $('#gripRing').css({filter:'grayscale(100%)'});
    hasGripRing=false;
  }
}
function changeBracelets() {
  if(hasBracelets==false) {
    $('#bracelets').css({filter:'grayscale(0%)'});
    hasBracelets=true;
  }
  else {
    $('#bracelets').css({filter:'grayscale(100%)'});
    hasBracelets=false;
  }
}
function changeFlippers() {
  if(hasFlippers==false) {
    $('#flippers').css({filter:'grayscale(0%)'});
    hasFlippers=true;
  }
  else {
    $('#flippers').css({filter:'grayscale(100%)'});
    hasFlippers=false;
  }
}
function changeGraveKey() {
  if(hasGraveKey==false) {
    $('#graveKey').css({filter:'grayscale(0%)'});
    hasGraveKey=true;
  }
  else {
    $('#graveKey').css({filter:'grayscale(100%)'});
    hasGraveKey=false;
  }
}
function changeCarlov() {
  if(hasCarlov==false) {
    $('#carlovMedal').css({filter:'grayscale(0%)'});
    hasCarlov=true;
  }
  else {
    $('#carlovMedal').css({filter:'grayscale(100%)'});
    hasCarlov=false;
  }
}

//Row 6
function changeEarth() {
  if(hasEarth==false) {
    $('#earth').css({filter:'grayscale(0%)'});
    hasEarth=true;
  }
  else {
    $('#earth').css({filter:'grayscale(100%)'});
    hasEarth=false;
  }
}
function changeFire() {
  if(hasFire==false) {
    $('#fire').css({filter:'grayscale(0%)'});
    hasFire=true;
  }
  else {
    $('#fire').css({filter:'grayscale(100%)'});
    hasFire=false;
  }
}
function changeWater() {
  if(hasWater==false) {
    $('#water').css({filter:'grayscale(0%)'});
    hasWater=true;
  }
  else {
    $('#water').css({filter:'grayscale(100%)'});
    hasWater=false;
  }
}
function changeWind() {
  if(hasWind==false) {
    $('#wind').css({filter:'grayscale(0%)'});
    hasWind=true;
  }
  else {
    $('#wind').css({filter:'grayscale(100%)'});
    hasWind=false;
  }
}
function changeRed3() {
  if(hasRed3==false) {
    $('#r3').css({filter:'grayscale(0%)'});
    hasRed3=true;
  }
  else {
    $('#r3').css({filter:'grayscale(100%)'});
    hasRed3=false;
  }
}

//Row 7
function changeSpinAttack() {
  if(hasSpin==false) {
    $('#spinAttack').css({filter:'grayscale(0%)'});
    hasSpin=true;
  }
  else {
    $('#spinAttack').css({filter:'grayscale(100%)'});
    hasSpin=false;
  }
}
function changeRockBreaker() {
  if(hasRock==false) {
    $('#rockBreaker').css({filter:'grayscale(0%)'});
    hasRock=true;
  }
  else {
    $('#rockBreaker').css({filter:'grayscale(100%)'});
    hasRock=false;
  }
}
function changeDashAttack() {
  if(hasDash==false) {
    $('#dashAttack').css({filter:'grayscale(0%)'});
    hasDash=true;
  }
  else {
    $('#dashAttack').css({filter:'grayscale(100%)'});
    hasDash=false;
  }
}
function changeDownThrust() {
  if(hasThrust==false) {
    $('#downThrust').css({filter:'grayscale(0%)'});
    hasThrust=true;
  }
  else {
    $('#downThrust').css({filter:'grayscale(100%)'});
    hasThrust=false;
  }
}
function changeLights() {
  if(hasLights==false) {
    $('#lights').css({filter:'grayscale(0%)'});
    hasLights=true;
  }
  else {
    $('#lights').css({filter:'grayscale(100%)'});
    hasLights=false;
  }
}

//Row 8
function changeRollAttack() {
  if(hasRoll==false) {
    $('#rollAttack').css({filter:'grayscale(0%)'});
    hasRoll=true;
  }
  else {
    $('#rollAttack').css({filter:'grayscale(100%)'});
    hasRoll=false;
  }
}
function changeSwordBeam() {
  if(hasSwordBeam==false) {
    $('#swordBeam').css({filter:'grayscale(0%)'});
    hasSwordBeam=true;
  }
  else {
    $('#swordBeam').css({filter:'grayscale(100%)'});
    hasSwordBeam=false;
  }
}
function changePerilBeam() {
  if(hasPerilBeam==false) {
    $('#perilBeam').css({filter:'grayscale(0%)'});
    hasPerilBeam=true;
  }
  else {
    $('#perilBeam').css({filter:'grayscale(100%)'});
    hasPerilBeam=false;
  }
}
function changeGreatSpinAttack() {
  if(hasGreatSpin==false) {
    $('#greatSpinAttack').css({filter:'grayscale(0%)'});
    hasGreatSpin=true;
  }
  else {
    $('#greatSpinAttack').css({filter:'grayscale(100%)'});
    hasGreatSpin=false;
  }
}

function changeTransparency() {
  var trans = ($('#transparency').val());
  if (trans==0) {
    items.setAttribute("style","background-color:" + color);
  }
  else if(trans==10) {
    items.setAttribute("style","background-color: " + color + "E6");
  }
  else if (trans==20) {
    items.setAttribute("style","background-color: " + color + "CC");
  }
  else if (trans==30) {
    items.setAttribute("style","background-color: " + color + "B3");
  }
  else if (trans==40) {
    items.setAttribute("style","background-color: " + color + "99");
  }
  else if (trans==50) {
    items.setAttribute("style","background-color: " + color + "80");
  }
  else if (trans==60) {
    items.setAttribute("style","background-color: " + color + "66");
  }
  else if (trans==70) {
    items.setAttribute("style","background-color: " + color + "4D");
  }
  else if (trans==80) {
    items.setAttribute("style","background-color: " + color + "33");
  }
  else if (trans==90) {
    items.setAttribute("style","background-color: " + color + "1A");
  }
  else {
    items.setAttribute("style","background-color: " + color + "00");
  }
}

function changeColor() {
  color = ($('#colorField').val());
  items.setAttribute("style","background-color:" + color);
}
//This function sets up the listeners for when a user clicks on each item.
//As with the rest of the code, it is split up into 8 groups of 8.
function setUp() {
  $('#swords').click(changeSword);
  $('#jar').click(changeJar);
  $('#cane').click(changeCane);
  $('#rang').click(changeRang);
  $('#wallet').click(changeWallet);

  $('#shields').click(changeShield);
  $('#mitts').click(changeMitts);
  $('#lantern').click(changeLantern);
  $('#bomb').click(changeBombs);
  $('#goldWilds').click(changeStonesWilds);

  $('#boots').click(changeBoots);
  $('#cape').click(changeCape);
  $('#ocarina').click(changeFlute);
  $('#bow').click(changeBow);
  $('#goldClouds').click(changeStonesClouds);

  $('#bottle').click(changeBottle);
  $('#jabber').click(changeJabber);
  $('#mushroom').click(changeMushroom);
  $('#llrKey').click(changeLLRKey);
  $('#goldFalls').click(changeStonesFalls);

  $('#gripRing').click(changeGripRing);
  $('#bracelets').click(changeBracelets);
  $('#flippers').click(changeFlippers);
  $('#graveKey').click(changeGraveKey);
  $('#carlovMedal').click(changeCarlov);

  $('#earth').click(changeEarth);
  $('#fire').click(changeFire);
  $('#water').click(changeWater);
  $('#wind').click(changeWind);
  $('#r3').click(changeRed3);

  $('#spinAttack').click(changeSpinAttack);
  $('#rockBreaker').click(changeRockBreaker);
  $('#dashAttack').click(changeDashAttack);
  $('#downThrust').click(changeDownThrust);
  $('#lights').click(changeLights);

  $('#rollAttack').click(changeRollAttack);
  $('#swordBeam').click(changeSwordBeam);
  $('#perilBeam').click(changePerilBeam);
  $('#greatSpinAttack').click(changeGreatSpinAttack);

  $('#change').click(changeTransparency);
  $('#changeColor').click(changeColor);
}

$(document).ready(setUp);
