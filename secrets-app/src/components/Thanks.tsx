import { FC } from "react";

type Props = {
  name: string;
  isLocked: boolean;
};
export const Thanks: FC<Props> = ({ name, isLocked }) => {
  return (
    <div>
      {isLocked ? `Your secret is safe with us, ${name}!` : "Okay, no probs."}
    </div>
  );
};
