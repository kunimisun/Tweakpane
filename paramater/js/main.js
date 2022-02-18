'use strict';

const params = {
  width: 100,
  height: 100,
  depth: 100,
  backgroundColor:'#f00',
};

function setup() {
  createCanvas(400, 200, WEBGL);

  const pane = new Tweakpane({
    title: 'Parameters',
  });
  pane.addInput(params, 'width',{min:0,max:200,});
  pane.addInput(params, 'height',{min:0,max:200,});
  pane.addInput(params, 'depth',{min:0,max:200,});
  pane.addInput(params,'backgroundColor');
}

function draw() {
  background(color(params.backgroundColor));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  noFill();
  stroke(255);
  box(params.width, params.height, params.depth);
}




















