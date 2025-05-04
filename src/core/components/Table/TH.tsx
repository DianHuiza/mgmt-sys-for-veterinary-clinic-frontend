interface THProps {
  children: React.ReactNode;
  className?: string;
}

export const TH: React.FC<THProps> = ({ children, className }) => {
  return (
    <th scope="col" className={`p-3 font-semibold first:rounded-tl-lg last:rounded-tr-lg ${className || ''}`}>
      {children}
    </th>
  );
};