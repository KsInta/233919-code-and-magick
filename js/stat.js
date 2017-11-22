'use strict';

var getMaxElement = function (array) {
  var max = 0;

  for (var i = 0; i < array.length; i++) {
    var time = array[i];
    if (time > max) {
      max = time;
    }
  }

  return max;
};

var drawRectangle = function (canvasItem, ctxContext, rectangleInitialX, rectangleInitialY, width, height) {
  var canvas = document.querySelector(canvasItem);
  var ctx = canvas.getContext(ctxContext);
  ctx.fillRect(rectangleInitialX, rectangleInitialY, width, height);
};

var chooseTextColor = function (canvasItem, ctxContext, color1, color2, arrayItem) {
  var canvas = document.querySelector(canvasItem);
  var ctx = canvas.getContext(ctxContext);
  ctx.fillStyle = (arrayItem === 'Вы') ? color1 : color2;
};

var writeText = function (canvasItem, ctxContext, text, textInitialX, textInitialY) {
  var canvas = document.querySelector(canvasItem);
  var ctx = canvas.getContext(ctxContext);
  ctx.fillText(text, textInitialX, textInitialY);
};

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40;
  var barIndent = 50;
  var initialX = 120;
  var initialY = 250;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawRectangle('canvas', ('2d'), 110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  drawRectangle('canvas', ('2d'), 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  writeText('canvas', ('2d'), 'Ура вы победили!', 120, 40);
  writeText('canvas', ('2d'), 'Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    chooseTextColor('canvas', ('2d'), 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, ' + Math.random() + ')', names[i]);
    drawRectangle('canvas', ('2d'), initialX + (barWidth + barIndent) * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    writeText('canvas', ('2d'), names[i], initialX + (barWidth + barIndent) * i, initialY + 20);
    writeText('canvas', ('2d'), Math.floor(times[i]), initialX + (barWidth + barIndent) * i, initialY - times[i] * step - 10);
  }
};
