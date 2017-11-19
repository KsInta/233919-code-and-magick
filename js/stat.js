'use strict';

var getMaxElement = function(array) {
  var max = 0;

  for (var i = 0; i < array.length; i++) {
    var time = array[i];
    if (time > max) {
      max = time;
    }
  }

  return max;
};

window.renderStatistics = function(ctx, names, times) {
  var histogramHeight = 150;
  var step = histogramHeight / (getMaxElement(times) - 0);
  var barWidth = 40;
  var barIndent = 50;
  var initialX = 120;
  var initialY = 250;

  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(initialX + (barWidth + barIndent) * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (barWidth + barIndent) * i, initialY + 20);
    ctx.fillText(Math.floor(times[i]), initialX + (barWidth + barIndent) * i, initialY - times[i] * step - 10);
  }
};
