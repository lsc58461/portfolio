interface Props {
  stackImage: JSX.Element;
  stackName: string;
}

{
  /* <div className='drop-shadow-stack h-100pxr w-100pxr !flex-col gap-4pxr rounded-full border border-[#ffffff] !font-light text-white shadow-stack backdrop-blur-sm flex-center font-caption1-medium hover:shadow-stackHover'>
        {stackImage}
        {stackName}
      </div> */
}

function TechnologyStack({ stackImage, stackName }: Props) {
  return (
    <div className='stackBounce drop-shadow-stack h-120pxr w-120pxr cursor-pointer !flex-col gap-4pxr rounded-full border border-[#818181] !font-light text-white shadow-stack backdrop-blur-[2px] flex-center font-caption1-medium hover:shadow-stackHover'>
      {stackImage}
      {stackName}
    </div>
  );
}

export default TechnologyStack;
