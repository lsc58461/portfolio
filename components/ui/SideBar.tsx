interface Props {
  iconConfig: JSX.Element[];
}

function SideBar({ iconConfig = [] }: Props) {
  return (
    <div className='flex h-sidebar-full flex-col gap-32pxr border-r border-r-[#2B2B2B] px-19pxr pt-40pxr'>
      {iconConfig &&
        iconConfig.map((icon, index) => <button key={index}>{icon}</button>)}
    </div>
  );
}

export default SideBar;
