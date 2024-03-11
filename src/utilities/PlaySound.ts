export const playSound = (soundFile: string) => {
  const audio = new Audio(soundFile);
  audio.play();
  setTimeout(() => {
    audio.pause(); // Stop playback
    audio.currentTime = 0; // Optionally, rewind to start
  }, 2050); // 1 second expressed in milliseconds
}