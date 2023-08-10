import React, { useState, useRef } from 'react';

const NotepadComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragComponentRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });

  const isInsideDragArea = (e: React.DragEvent<HTMLElement>) => {
    const left = e.target instanceof HTMLElement ? e.target.offsetLeft : 0;
    const top = e.target instanceof HTMLElement ? e.target.offsetTop : 0;
    const bottom =
      e.target instanceof HTMLElement ? top + e.target.offsetHeight : top;
    const right =
      e.target instanceof HTMLElement ? left + e.target.offsetWidth : left;

    const isValid = (num: number) => {
      if (num >= 300 || num <= 0) return false;
      return true;
    }

    if (isValid(left) && isValid(top) && isValid(bottom) && isValid(right)) return true;
    return false;
  };

  const dragHandler = (e: React.DragEvent<HTMLElement>) => {
    const posTemp = { ...pos };
    posTemp['left'] =
      e.target instanceof HTMLElement
        ? e.target.offsetLeft + e.clientX - current.x
        : origin.x;
    posTemp['top'] =
      e.target instanceof HTMLElement
        ? e.target.offsetTop + e.clientY - current.y
        : origin.y;

    setPos(posTemp);

    const currentPosTemp = { ...current };
    currentPosTemp['x'] = e.clientX;
    currentPosTemp['y'] = e.clientY;

    setCurrent(currentPosTemp);
  };

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const blankCanvas = document.createElement('canvas');
    blankCanvas.classList.add('canvas');
    e.dataTransfer.setDragImage(blankCanvas, 0, 0);
    document.body.appendChild(blankCanvas);
    e.dataTransfer.effectAllowed = 'move';
    const originPosTemp = { ...origin };
    originPosTemp['x'] =
      e.target instanceof HTMLElement ? e.target.offsetLeft : origin.x;
    originPosTemp['y'] =
      e.target instanceof HTMLElement ? e.target.offsetTop : origin.y;
    setOrigin(originPosTemp);

    const currentPosTemp = { ...current };
    currentPosTemp['x'] = e.clientX;
    currentPosTemp['y'] = e.clientY;
    setCurrent(currentPosTemp);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const dragEndHandler = (e: React.DragEvent<HTMLElement>) => {
    if (!isInsideDragArea(e)) {
      const posTemp = { ...pos };
      posTemp['left'] = origin.x;
      posTemp['top'] = origin.y;
      setPos(posTemp);
    }

    const canvases = document.getElementsByClassName('canvas');
    for (let i = 0; i < canvases.length; i++) {
      const canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }
    document.body.removeAttribute('style');
  };

  return (
      <div className="absolute container w-300 h-300 z-50" ref={containerRef}>
        <div
          className="relative drag-component w-10 h-10 bg-slate-400"
          ref={dragComponentRef}
          draggable
          onDrag={(e) => dragHandler(e)}
          onDragStart={(e) => dragStartHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          style={{ left: pos.left, top: pos.top }}
        >
          <textarea className="bg-yellow-200 resize">hi</textarea>
        </div>
      </div>
  );
};

export default NotepadComponent;
