import { useState } from "react";

export interface DropdownProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsOpen((curr) => !curr);
  };
  return (
    <div onClick={onClickHandler} className='relative inline-block text-left'>
      <div>
        {trigger}
      </div>

      { isOpen &&
        <div
          className='absolute right-0 z-10 mt-2 w-56 divide-y min-w-max divide-platinum origin-top-right rounded-md bg-white shadow-lg border border-platinum focus:outline-hidden'
        >
          {children}
        </div>
      }
    </div>
  );
};
