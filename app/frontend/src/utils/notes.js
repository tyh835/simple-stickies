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
