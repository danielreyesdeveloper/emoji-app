import { FC } from "react";

interface CategoryProps {
  emoji: string;
  group: string;
  handleFilter: (group: string) => void;
}

const CategoryCard: FC<CategoryProps> = ({ emoji, group, handleFilter }) => {
  return (
    <>
      <button
        onClick={() => handleFilter(group)}
        className="flex items-baseline justify-start pl-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100"
      >
        <span className="text-xl mr-4" role={"img"} aria-label={emoji}>
          {emoji}
        </span>
        <p>{group}</p>
      </button>
    </>
  );
};
export default CategoryCard;
