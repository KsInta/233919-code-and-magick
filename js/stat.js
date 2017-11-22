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

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40;
  var barIndent = 50;
  var initialX = 120;
  var initialY = 250;

  var drawRectangle = function (rectangleInitialX, rectangleInitialY, width, height) {
    ctx.fillRect(rectangleInitialX, rectangleInitialY, width, height);
  };

  var chooseTextColor = function (color1, color2) {
    ctx.fillStyle = (names[i] === 'Вы') ? color1 : color2;
  };

  var writeText = function (text, textInitialX, textInitialY) {
    ctx.fillText(text, textInitialX, textInitialY);
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawRectangle(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  drawRectangle(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  writeText('Ура вы победили!', 120, 40);
  writeText('Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    chooseTextColor('rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, ' + Math.random() + ')');
    drawRectangle(initialX + (barWidth + barIndent) * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    writeText(names[i], initialX + (barWidth + barIndent) * i, initialY + 20);
    writeText(Math.floor(times[i]), initialX + (barWidth + barIndent) * i, initialY - times[i] * step - 10);
  }
};
