interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return (
    <tr className={`border-b border-platinum-100 last:border-b-0 ${className || ''}`}>
      {children}
    </tr>
  );
};