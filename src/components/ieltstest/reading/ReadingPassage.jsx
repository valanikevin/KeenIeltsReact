import React from "react";
import parse from "html-react-parser";
import "./ReadingModule.css";

const ReadingPassage = ({ section }) => {
  if (!section || !section.passage) {
    return null;
  }

  const toggleHighlight = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText.length === 0) return;

    const parentElement = range.commonAncestorContainer.parentElement;

    // Check if the selection is already highlighted
    if (parentElement && parentElement.className === "highlighted-text") {
      // Remove highlight by replacing the highlighted span with its inner contents
      while (parentElement.firstChild) {
        parentElement.parentNode.insertBefore(
          parentElement.firstChild,
          parentElement
        );
      }
      parentElement.parentNode.removeChild(parentElement);
    } else {
      // Add highlight
      const span = document.createElement("span");
      span.className = "highlighted-text";
      range.surroundContents(span);
    }

    selection.removeAllRanges();
  };

  return (
    <div
      className="text-black reading-passage "
      onMouseUp={toggleHighlight}
      onTouchEnd={toggleHighlight}
    >
      {parse(section.passage)}
    </div>
  );
};

export default ReadingPassage;
