import { UserButton } from "@clerk/clerk-react";
import ArrowUpDown from "../icons/ArrowUpDown";

const CustomUserButton = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonBox: "hidden", // Hides the default button
        },
      }}
    >
      {({ open }) => (
        <button
          onClick={open} // Manually trigger UserButton dropdown
          className="flex items-center gap-2 px-2 py-1 border border-neutral-300 rounded-md hover:shadow-md cursor-pointer"
        >
          <ArrowUpDown /> {/* Custom trigger icon */}
        </button>
      )}
    </UserButton>
  );
};

export default CustomUserButton;
