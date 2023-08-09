import React, { useState, useRef } from 'react';

const NotepadComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragComponentRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });
  
  const isInsideDragArea = (e: React.DragEvent<HTMLElement>) => {
    const left = (e.target instanceof HTMLElement) ? e.target.offsetLeft : 0;
    const top = (e.target instanceof HTMLElement) ? e.target.offsetTop : 0;
    const bottom = (e.target instanceof HTMLElement) ? top + e.target.offsetHeight : 0;
    const right = (e.target instanceof HTMLElement) ? left + e.target.offsetWidth : 0;

    console.log(containerRef.current?.offsetWidth)

    console.log(left, top, bottom, right);

    const containerLeft = containerRef.current?.offsetLeft != undefined ? containerRef.current?.offsetLeft : 0;
    const containerTop = containerRef.current?.offsetTop != undefined ? containerRef.current?.offsetTop : 0;
    const containerBottom = containerRef.current?.offsetHeight != undefined ? containerTop - containerRef.current?.offsetHeight : containerTop + 0;
    const containerRight = containerRef.current?.offsetWidth != undefined ? containerLeft + containerRef.current?.offsetWidth : containerLeft + 0;
    
    console.log({ containerLeft, containerTop, containerBottom, containerRight })
    
    if (left < containerLeft || top > containerTop || bottom < containerBottom || right > containerRight) return false;
    return true;
  }

  const dragHandler = (e: React.DragEvent<HTMLElement>) => {
    const posTemp = { ...pos };
    posTemp['left'] = (e.target instanceof HTMLElement) ? e.target.offsetLeft + e.clientX - client.x : 0;
    posTemp['top'] = (e.target instanceof HTMLElement) ? e.target.offsetTop + e.clientY - client.y : 0;

    setPos(posTemp);

    const clientPosTemp = { ...client };
    clientPosTemp['x'] = e.clientX;
    clientPosTemp['y'] = e.clientY;

    setClient(clientPosTemp);
  }

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const blankCanvas = document.createElement('canvas');
    blankCanvas.classList.add('canvas');
    e.dataTransfer.setDragImage(blankCanvas, 0, 0);
    document.body.appendChild(blankCanvas);
    e.dataTransfer.effectAllowed = 'move';
    const originPosTemp = { ...origin };
    originPosTemp['x'] = (e.target instanceof HTMLElement) ? e.target.offsetLeft : 0;
    originPosTemp['y'] = (e.target instanceof HTMLElement) ? e.target.offsetTop : 0;
    console.log('originPosTemp: ', originPosTemp);
    setOrigin(originPosTemp);

    const clientPosTemp = { ...client };
    clientPosTemp['x'] = e.clientX;
    clientPosTemp['y'] = e.clientY;
    setClient(clientPosTemp);
    console.log('clientPosTemp: ', clientPosTemp);
  }

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  }

  const dragEndHandler = (e: React.DragEvent<HTMLElement>) => {
    if (isInsideDragArea(e)) {
      const posTemp = { ...pos };
      posTemp['left'] = origin.x;
      posTemp['top'] = origin.y;
      setPos(posTemp);
    } else {
      console.log(pos);
    }

    const canvases = document.getElementsByClassName('canvas');
    for (let i = 0; i < canvases.length; i++) {
      const canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }
    document.body.removeAttribute('style');
  }

  return (
    <div className="container w-screen h-screen z-50" ref={containerRef}>
      <div
        className="drag-component w-10 h-10 bg-slate-400"
        ref={dragComponentRef}
        draggable
        onDrag={(e) => dragHandler(e)}
        onDragStart={(e) => dragStartHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        style={{ left: pos.left, top: pos.top }}
      >
        {/* <textarea className="bg-yellow-200 resize">hi</textarea> */}
      </div>
    </div>
  );
};

export default NotepadComponent;
