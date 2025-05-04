import React, { useMemo } from 'react';

interface AvatarPlaceholderProps {
  name: string;
}

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ name }) => {
  const placeHolder = useMemo(()=> {
    const nameList = name.split(' ');
    const initials = nameList.slice(0, 2).map((name) => name.charAt(0).toUpperCase());
    return initials.join('');
  }, [name])

  return (
    <div className=' inline-flex items-center justify-center w-full h-full text-4xl font-bold rounded-full  bg-platinum-200 text-gray-500'>
      {placeHolder}
    </div>
  )
}