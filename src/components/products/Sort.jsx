import React, { useEffect, useRef, useState } from "react";

function Sort({ items }) {
  const [visibleOption, setVisibleOption] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const sortRef = useRef();
  const activeLabelSort = items[activeSort].name;

  const onSelectSort = (index) => {
    setActiveSort(index);
    setVisibleOption(false)
  };

  const toggleVisibleOption = () => {
    setVisibleOption(!visibleOption);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisibleOption(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <span className="sort-by">Sort</span>
      <div onClick={toggleVisibleOption}>
        <div className="select-sort">
          <span className="change-option">{activeLabelSort}</span>
        </div>
      </div>

      {visibleOption && (
        <div className="open-window-sort">
          {items &&
            items.map((obj, index) => (
              <div onClick={() => onSelectSort(index)} key={`${obj.type}_${index}`}>
                <div
                  className={
                    activeSort === index
                      ? "active-sort change-option button-sort"
                      : "change-option button-sort"
                  }
                >
                  {obj.name}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Sort;
