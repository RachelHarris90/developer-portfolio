import { useState } from "react";

export const DarkModeToggle = () => {
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = ({ checked }: { checked: boolean }) => {
    setDark(checked);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch"
          type="checkbox"
          className="peer sr-only"
          onChange={(event) =>
            darkModeHandler({ checked: event.target.checked })
          }
          checked={dark}
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border border-rachel-medium bg-rachel-light after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-rachel-medium after:bg-rachel-medium after:transition-all after:content-[''] peer-checked:bg-rachel-dark peer-checked:after:translate-x-full peer-checked:after:border-rachel-medium"></div>
      </label>
      <span>Dark mode</span>
    </div>
  );
};
