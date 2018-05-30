function Popup(sketch, font)
{
  this.questionText = 'If 1 gate takes 5 seconds to \ncheck a single car, how many gates \nneed to be open in order to \nhave 10 cars pass through \nthe gate in 1 minuite '

  this.value1Units = "gates";
  this.value2Units = "test";
  this.value3Units = "gates";

  this.value1Max = 10;
  this.value1Min = 0;

  this.value2Max = 10;
  this.value2Min = 0;

  this.value3Max = 4;
  this.value3Min = 0;

  this.xLoc = 200;
  this.yLoc = 400;

  this.useValue1 = false;
  this.useValue2 = false;
  this.useValue3 = true;

  this.height = 250;
  this.width = 300;
  this.popupVisible = true;

  this.value1 = 5;
  this.value2 = 5;
  this.value3 = 1;

  this.val1X = this.xLoc - 95;
  this.val2X = this.xLoc - 40;
  this.val3X = this.xLoc + 20;
  //this.popupGroup = new Group();

  this.popupSprite = sketch.createSprite( this.xLoc, this.yLoc, this.width, this.height);
  this.popupSprite.shapeColor="DarkGray";

  this.okBtnSprite = sketch.createSprite( this.xLoc+100, this.yLoc+75);
  this.okBtnSprite.addImage(sketch.loadImage("../images/game/play.png"));
  this.okBtnSprite.depth = 200;

  this.value1UpSprite = sketch.createSprite( this.val1X, this.yLoc-20, 20, 20);
  this.value1UpSprite.addImage(sketch.loadImage("../images/game/roadChevronUp.png"));

  this.value1DownSprite = sketch.createSprite( this.val1X, this.yLoc+50, 20, 20);
  this.value1DownSprite.addImage(sketch.loadImage("../images/game/roadChevronDown.png"));

  this.value2UpSprite = sketch.createSprite( this.val2X, this.yLoc-20, 20, 20);
  this.value2UpSprite.addImage(sketch.loadImage("../images/game/roadChevronUp.png"));

  this.value2DownSprite = sketch.createSprite( this.val2X, this.yLoc+50, 20, 20);
  this.value2DownSprite.addImage(sketch.loadImage("../images/game/roadChevronDown.png"));

  this.value3UpSprite = sketch.createSprite( this.val3X, this.yLoc-20, 20, 20);
  this.value3UpSprite.addImage(sketch.loadImage("../images/game/roadChevronUp.png"));

  this.value3DownSprite = sketch.createSprite( this.val3X, this.yLoc+50, 20, 20);
  this.value3DownSprite.addImage(sketch.loadImage("../images/game/roadChevronDown.png"));



  //this.popupGroup.addToGroup(this.popupSprite);
  //this.popupGroup.addToGroup(this.okBtnSprite);

  this.showPopup = function()
  {
    if(this.popupVisible == true)
    {
      this.clickOpen();
    }
  }

  this.clickUpValue1 = function()
  {
    if(this.value1 < this.value1Max)
      this.value1++;
  }

  this.clickDownValue1 = function()
  {
    if(this.value1 > this.value1Min)
      this.value1--;
  }

  this.clickUpValue2 = function()
  {
    if(this.value2 < this.value2Max)
      this.value2++;
  }

  this.clickDownValue2 = function()
  {
    if(this.value2 > this.value2Min)
      this.value2--;
  }

  this.clickUpValue3 = function()
  {
    if(this.value3 < this.value3Max)
      this.value3++;
  }

  this.clickDownValue3 = function()
  {
    if(this.value3 > this.value3Min)
      this.value3--;
  }

  this.clickOpen = function()
  {
    this.popupVisible = true;
    this.popupSprite.visible = true;
    this.okBtnSprite.visible = true;

    this.value1UpSprite.visible = this.useValue1;
    this.value2UpSprite.visible = this.useValue2;
    this.value3UpSprite.visible = this.useValue3;

    this.value1DownSprite.visible = this.useValue1;
    this.value2DownSprite.visible = this.useValue2;
    this.value3DownSprite.visible = this.useValue3;

    sketch.fill(255, 255, 0);
    sketch.textFont(font);
    sketch.textSize(12);

    sketch.text(this.questionText, this.xLoc - 130, this.yLoc - 100);


    if(this.useValue1)
    {
      sketch.textSize(30);
      sketch.text(this.value1, this.xLoc - 110, this.yLoc + 25);
      sketch.textSize(15);
      sketch.text(this.value1Units, this.xLoc - 110, this.yLoc + 80);

    }

    if(this.useValue2)
    {
      sketch.textSize(30);
      sketch.text(this.value2, this.xLoc - 55, this.yLoc + 25);
      sketch.textSize(15);
      sketch.text(this.value2Units, this.xLoc - 55, this.yLoc + 80);
    }

    if(this.useValue3)
    {
      sketch.textSize(30);
      sketch.text(this.value3, this.xLoc, this.yLoc + 25);
      sketch.textSize(15);
      sketch.text(this.value3Units, this.xLoc, this.yLoc + 80);
    }
  }

  this.clickClose = function()
  {
    this.popupVisible = false;
    this.popupSprite.visible = false;
    this.okBtnSprite.visible = false;

    this.value1UpSprite.visible = false;
    this.value2UpSprite.visible = false;
    this.value3UpSprite.visible = false;

    this.value1DownSprite.visible = false;
    this.value2DownSprite.visible = false;
    this.value3DownSprite.visible = false;

  }
}
