import React, { useEffect, useRef, useState } from "react";

const Sort = React.memo(function Sort({ items, sortType, activeSortType }) {
  const [visibleOption, setVisibleOption] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const sortRef = useRef();
  const activeLabelSort = items.find((item) => item.type === activeSortType).name;

  const onSelectSort = (index) => {
    if (sortType) {
      sortType(index);
    }
    setVisibleOption(false);
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
      <span className="sort-by">Sort: </span>
      <div onClick={toggleVisibleOption}>
        <div className="select-sort">
          <span className="change-option">{activeLabelSort}</span>
        </div>
      </div>

      {visibleOption && (
        <div className="open-window-sort">
          {items &&
            items.map((obj, index) => (
              <div
                onClick={() => onSelectSort(obj)}
                key={`${obj.type}_${index}`}
              >
                <div
                  className={
                    activeSortType === obj.type
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
});

export default Sort;
