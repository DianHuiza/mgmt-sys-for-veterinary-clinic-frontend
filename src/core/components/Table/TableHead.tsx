interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({ children, className }) => {
  return (
    <thead className={`bg-light-cyan ${className || ''}`}>
      {children}
    </thead>
  );
};