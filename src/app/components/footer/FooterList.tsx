interface FooterListProps {
  title: string;
  children: React.ReactNode;
}

const FooterList = ({ title, children }: FooterListProps) => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{title}</h4>
      <ul className="space-y-1 text-sm text-gray-400">{children}</ul>
    </div>
  );
};

export default FooterList;
