import React, { useEffect, useState } from "react";
import TypingAnimation from "./TypingAnimation";

const Animation = () => {
  const [selectedItem, setSelectedItem] = useState("item1");
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);

  const sampleText = "Faire une demande d’admission";
  const sampleText2 =
    "Soutien et accompagnement pour les proffesseurs charges de cours";
  const sampleText3 = "Votre reussite en un seul clic";

  const handleOnChange = (item) => {
    setSelectedItem(item);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartY(e.clientY);
    setInitialOffset(verticalOffset);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY - dragStartY;
      setVerticalOffset(initialOffset + deltaY);

      if (verticalOffset < -250) {
        setDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);

    if (selectedItem === "item1" && verticalOffset <= -200) {
      setSelectedItem("item2");
      setVerticalOffset(0);
    }
    if (selectedItem === "item1" && verticalOffset >= -200) {
      setSelectedItem("item1");
      setVerticalOffset(0);
    }
    if (selectedItem === "item2" && verticalOffset < -200) {
      setSelectedItem("item3");
      setVerticalOffset(0);
    }
    if (selectedItem === "item2" && verticalOffset > -200) {
      setSelectedItem("item1");
      setVerticalOffset(0);
    }
    if (selectedItem === "item3" && verticalOffset < -200) {
      setSelectedItem("item3");
      setVerticalOffset(0);
    }
    if (selectedItem === "item3" && verticalOffset > -200) {
      setSelectedItem("item2");
      setVerticalOffset(0);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [verticalOffset, selectedItem]);

  return (
    <div className="app__animation">
      <div className="app__animation-container">
        <div className="container-items">
          <div
            className={selectedItem === "item1" ? "item active" : "item"}
            onClick={() => handleOnChange("item1")}
          >
            Admission Hiver 2024
          </div>
          <div
            className={selectedItem === "item2" ? "item active" : "item"}
            onClick={() => handleOnChange("item2")}
          >
            Ressource Pedagogiques
          </div>
          <div
            className={selectedItem === "item3" ? "item active" : "item"}
            onClick={() => handleOnChange("item3")}
          >
            Outils pour les étudiants
          </div>
        </div>
        <div className="app__animation-container_text">
          <div
            className="wrapper-text"
            style={{ transform: `translateY(${verticalOffset}px)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {selectedItem === "item1" && (
              <div className="wrapper-text-component">
                <TypingAnimation text={sampleText} />
              </div>
            )}
            {selectedItem === "item2" && (
              <div>
                <TypingAnimation text={sampleText2} />
              </div>
            )}
            {selectedItem === "item3" && (
              <div>
                <TypingAnimation text={sampleText3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
