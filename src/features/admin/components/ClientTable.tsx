import {
  Table,
  TableHead,
  TableRow,
  TD,
  TH,
} from "../../../core/components/Table";
import { Client } from '../../client/dtos/clientDto';

interface ClientTableProps {
  clients: Client[];
}

export const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TH>Nombre</TH>
          <TH>Email</TH>
          <TH>Telefono</TH>
          <TH>Rol</TH>
        </tr>
      </TableHead>
      <tbody>
        {clients.map((client) => (
          <TableRow key={client.name}>
            <TD>{client.name}</TD>
            <TD>{client.email}</TD>
            <TD>{client.phone}</TD>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
