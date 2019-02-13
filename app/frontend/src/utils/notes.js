import tinycolor from 'tinycolor2';

export const getLayerStyle = (initialOffset, currentOffset) => {
  const layerStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0
  };

  if (!initialOffset || !currentOffset) {
    return {
      ...layerStyle,
      display: 'none'
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    ...layerStyle,
    transform
  };
};

export const getNoteStyle = (note, isDragging) => {
  const { color, positionX, positionY } = note;
  const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
  const shadowColor = tinycolor(color)
    .saturate(35)
    .darken(35)
    .spin(-5)
    .setAlpha(0.7)
    .toString();

  return {
    backgroundColor: color,
    boxShadow: `0 2px 4px ${shadowColor}, 0 1px 2px ${shadowColor}`,
    position: 'absolute',
    transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
};

export const getNotePreviewStyle = note => {
  const { color } = note;
  const shadowColor = tinycolor(color)
    .saturate(35)
    .darken(35)
    .spin(-5)
    .setAlpha(0.45)
    .toString();

  return {
    backgroundColor: color,
    boxShadow: ` 0 14px 28px ${shadowColor},
    0 10px 10px ${shadowColor}, 0 1px 2px ${shadowColor}`,
    position: 'absolute',
    transform: 'translateY(-4px)'
  };
};

export const noteHasChanges = (currentNote, cachedNote) => {
  return !(
    currentNote.id === cachedNote.id &&
    currentNote.deleted === cachedNote.deleted &&
    currentNote.positionX === cachedNote.positionX &&
    currentNote.positionY === cachedNote.positionY &&
    currentNote.content === cachedNote.content &&
    currentNote.title === cachedNote.title
  );
};
