import { FC } from "react";
import EmojiCard, { EmojiCardProps } from "./EmojiCard";

export interface EmojiListProps {
  emojis: EmojiCardProps[];
}

const EmojiList: FC<EmojiListProps> = ({ emojis }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {emojis.map((emoji, index) => (
          <EmojiCard key={index} {...emoji} />
        ))}
      </div>
    </>
  );
};
export default EmojiList;
