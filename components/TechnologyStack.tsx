interface Props {
  stackImage: JSX.Element;
  stackName: string;
}

function TechnologyStack({ stackImage, stackName }: Props) {
  return (
    <div className='hover:shadow-stackHover flex-col-center h-120pxr w-120pxr gap-4pxr rounded-full border border-[#818181] !font-light text-white shadow-stack drop-shadow-stack backdrop-blur-[2px] font-caption1-medium'>
      {stackImage}
      {stackName}
    </div>
  );
}

export default TechnologyStack;
