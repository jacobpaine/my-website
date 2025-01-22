import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[]; // Array of phrases to type out
  typingSpeed?: number; // Speed of typing in ms
  deletingSpeed?: number; // Speed of deleting in ms
  delayBetweenPhrases?: number; // Delay before starting the next phrase
  loop?: boolean; // Whether the animation should loop
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500,
  loop = true,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = texts[currentIndex];

      if (isDeleting && loop) {
        // Deleting text one character at a time
        setCurrentText((prev) => fullText.slice(0, prev.length - 1));

        // When text is fully deleted, move to the next phrase
        if (currentText.length === 0) {
          setIsDeleting(false);
          const nextIndex = currentIndex + 1;

          // Handle looping or stopping after the last phrase
          if (nextIndex >= texts.length) {
            if (loop) {
              setCurrentIndex(0); // Reset to the first phrase if looping
            }
          } else {
            setCurrentIndex(nextIndex);
          }
        }
      } else {
        // Typing text one character at a time
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));

        // When the full text is typed, start the deletion phase after a delay
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      }
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [
    currentText,
    isDeleting,
    currentIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenPhrases,
    loop,
  ]);

  return <span>{currentText}</span>;
};

export default Typewriter;
