import { Button } from '../../../core/components/Buttons';
import { Input } from '../../../core/components/Forms';
import { useState } from 'react';
import { ClientList } from './ClientList';

export const ClientSideBar = () => {
  const [search, setSearch] = useState('');

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newSearch = formData.get('search')?.toString() 
    if (!newSearch) return 
    setSearch(newSearch)    
  }

  return (
    <div className='bg-white h-full'>
      <div className='border-b border-platinum-200 p-4'>
        <form action="" className='flex gap-4' onSubmit={onSubmitHandler}>
          <Input type='text' placeholder='Buscar por cliente...' name='search'/>
          <Button className='bg-caribbean-current text-white'>Buscar</Button>
        </form>
      </div>
      <ClientList search={search} />
    </div>
  );
};