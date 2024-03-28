import { useState } from "react";
import ResMenuCategoryItem from "./ResMenuCategoryItem";

const ResMenuCategory = (props) => {
  const { category, showItems, setShowItemIndex, setOpen } = props;
  const itemCards = category?.card?.card?.itemCards;
  return (
    <div className="p-4 mb-2 shadow-2xl">
      {/* Category Heading */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowItemIndex()}
      >
        <div className="font-bold">
          {category?.card?.card?.title} ({itemCards.length})
        </div>
        <div className="font-bold">🔽</div>
      </div>
      {/* Category Body */}
      <div>
        {showItems &&
          itemCards.map((itemCard) => {
            return (
              <ResMenuCategoryItem
                key={itemCard?.card?.info?.id}
                itemCard={itemCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ResMenuCategory;
