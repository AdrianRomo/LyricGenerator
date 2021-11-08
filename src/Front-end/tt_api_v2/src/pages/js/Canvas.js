import React from "react";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Canvas = ({
  canvasId,
  className,
  type,
  onClick,
  width,
  height,
  isEnabled
}) => {
  React.useEffect(() => {
    var  size= 120;
    var _halfSize= size/2;
    var pi = Math.PI;
    var doublePi = pi * 2;
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(_halfSize, _halfSize, _halfSize - (4 / 2), 0, doublePi);
    ctx.closePath();
    ctx.fillStyle = "rgba(124,189,30,.2)";
    ctx.fill();

    // draw border
    // our active path is already the full circle, so just stroke it
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#7cbd1e";
    ctx.stroke();

    var iconSize = size / 2;
    var playLeft = Math.cos(pi / 3 * 2) * (iconSize / 2) + _halfSize;
    var playRight = iconSize / 2 + _halfSize;
    var playHalf = (playRight - playLeft) / 2 + playLeft;
    var top = _halfSize - Math.sin(pi / 3 * 2) * (iconSize / 2);
    var bottom = size - top;

    var icons = {
      play: [
        [
          [playLeft, top],
          [playHalf, (_halfSize - top) / 2 + top],
          [playHalf, (_halfSize - top) / 2 + _halfSize],
          [playLeft, bottom]
        ],
        [
          [playHalf, (_halfSize - top) / 2 + top],
          [playRight, _halfSize],
          [playRight, _halfSize],
          [playHalf, (_halfSize - top) / 2 + _halfSize]
        ]
      ]
    }
    
    var iconColor= "#ffffff";
    ctx.fillStyle = iconColor;
    ctx.beginPath();
    
    var icon = icons.play;
    for (var i = 0; i < icon.length; i++) {
      ctx.moveTo(icon[i][0][0], icon[i][0][1]);

      for (var j = 1; j < icon[i].length; j++) {
        ctx.lineTo(icon[i][j][0], icon[i][j][1]);
      }
    }

    // ctx.closePath();
    ctx.fill();
    // stroke to fill in for retina
    ctx.strokeStyle = iconColor;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'miter';
    ctx.stroke();
  }, []);

  return (
    <>
      <canvas id='myCanvas' className={className} width={width} height={height} onClick={onClick}>
      </canvas>
    </>
  );
};

export default Canvas;