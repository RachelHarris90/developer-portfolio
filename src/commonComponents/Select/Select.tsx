import { useState } from "react";
import { ArrowDown } from "../../icons/ArrowDown";
import { CrossIcon } from "../../icons/Cross";

export const Select = ({
  label,
  items,
  onSelect,
  selectedItem,
}: {
  label: any;
  items: string[];
  onSelect: (item: string | undefined) => void;
  selectedItem: string | undefined;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleOpenSelect = () => {
    if (selectedItem) {
      onSelect(undefined);
      setIsOpen(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block" onBlur={() => setIsOpen(false)}>
      <button
        onClick={handleOpenSelect}
        className="space-x-4 py-3 px-4 flex items-center justify-between text-left bg-rachel-light rounded w-full"
      >
        <span>{selectedItem ? `${selectedItem}` : `${label}`}</span>
        {selectedItem ? <CrossIcon /> : <ArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white shadow-lg">
          {items.map((item) => (
            <div
              key={item}
              onClick={() => handleOptionSelect(item)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
