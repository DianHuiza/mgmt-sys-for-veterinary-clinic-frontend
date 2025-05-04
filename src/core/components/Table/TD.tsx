interface TDProps {
  children: React.ReactNode;
  className?: string;
}

export const TD: React.FC<TDProps> = ({ children, className }) => {
  return (
    <td className={`p-3 ${className || ''}`}>
      {children}
    </td>
  );
};