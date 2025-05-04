import { AdminSectionsContainer } from "../components/AdminSectionsContainer";
import { ClientTableContainer } from '../components/ClientTableContainer';

export const ClientPanelPage = () => {
  return (
    <AdminSectionsContainer>
      <h2 className='text-2xl font-semibold'>Clientes</h2>
      <ClientTableContainer />
    </AdminSectionsContainer>
  );
};
