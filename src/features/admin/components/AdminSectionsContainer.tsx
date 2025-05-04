import React from 'react'

interface AdminSectionsContainerProps {
  children: React.ReactNode
}

export const AdminSectionsContainer: React.FC<AdminSectionsContainerProps> = ({ children }) => {
  return (
    <div className='flex-1 mx-6 my-2'>
      {children}
    </div>
  )
}