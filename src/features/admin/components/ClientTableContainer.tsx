import { useQuery } from "@tanstack/react-query";
import { getClients } from '../../client/services/getClients';
import { SquareTag, SquareTagList } from '../../../core/components/Tags';
import { SearchBar } from '../../../core/components/Forms/SearchBar';
import { Dropdown } from '../../../core/components/Dropdown/Dropdown';
import { Button } from '../../../core/components/Buttons';
import { BarsIcon } from '../../../assets/icons/BarsIcon';
import { DropdownItem } from '../../../core/components/Dropdown/DropdownItem';
import { Card } from '../../../core/components/Cards';
import { ClientTable } from './ClientTable';
import { useTableFilters } from '../../../shared/hooks/useTableFilters';

export const ClientTableContainer = () => {
  const { filters } = useTableFilters();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getClients(filters),
  });

  return (
    <>
      <div className='flex justify-between mt-8'>
        <SquareTagList className='bg-platinum-100'>
          <SquareTag
            label='Cliente 1'
            classname='bg-white text-caribbean-current'
          />
          <SquareTag
            label='Cliente 2'
            classname='bg-white text-caribbean-current'
          />
          <SquareTag
            label='Cliente 3'
            classname='bg-white text-caribbean-current'
          />
        </SquareTagList>
        <div className='flex gap-2'>
          <SearchBar onSearch={() => {}} className='bg-white w-sm' />
          <Dropdown
            trigger={
              <Button className='bg-white border border-platinum'>
                <BarsIcon />
              </Button>
            }
          >
            <DropdownItem>Agregar Cliente</DropdownItem>
          </Dropdown>
        </div>
      </div>

      <Card className='mt-4 p-4 bg-white'>
        {isError && <div>Error</div>}
        {(data && !isLoading) && <ClientTable clients={data} />}
        {isLoading && <div>Loading...</div>}
      </Card>
    </>
  );
};
