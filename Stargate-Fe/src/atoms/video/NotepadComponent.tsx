import React from "react";

const NotepadComponent = () => {
  let posX = 0;
  let posY = 0;

  let originalX = 0;
  let originalY = 0;

  const dragStartHandler = (e: React.DragEvent<HTMLElement>) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;

    originalX = (e.target instanceof HTMLElement) ? e.target.offsetLeft : 0;
    originalY = (e.target instanceof HTMLElement) ? e.target.offsetTop : 0;
  }

  const dragHandler = (e: React.DragEvent<HTMLElement>) => {
    originalX = (e.target instanceof HTMLElement) ? e.target.offsetLeft : 0;
    originalY = (e.target instanceof HTMLElement) ? e.target.offsetTop : 0;
    
    if (e.target instanceof HTMLElement) 
      e.target.style.left = `${originalX + e.clientX - posX}px`;
    if (e.target instanceof HTMLElement) 
      e.target.style.top = `${originalY + e.clientY - posY}px`;

    posX = e.clientX;
    posY = e.clientY;
  }

  return (
    <div draggable onDragStart={dragStartHandler} onDrag={dragHandler}>
      <textarea className="bg-yellow-200 resize">
        hi
      </textarea>
    </div>
  );
}

export default NotepadComponent;