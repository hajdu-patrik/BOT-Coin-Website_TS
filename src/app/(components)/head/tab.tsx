type Tabs = {
  anchor: string;
  tabname: string;
};

const Tab: React.FC<Tabs> = ({ anchor, tabname }) => {
  return (
    <li className="cursor-pointer duration-100 hover:scale-[1.05] hover:font-semibold hover:transition-all">
      <a href={anchor}>{tabname}</a>
    </li>
  );
};

export default Tab;