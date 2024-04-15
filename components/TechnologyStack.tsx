interface Props {
  stackImage: JSX.Element;
  stackName: string;
}

function TechnologyStack({ stackImage, stackName }: Props) {
  return (
    <div className='hover:shadow-stackHover h-120pxr w-120pxr gap-4pxr rounded-full border border-[#818181] !font-light text-white shadow-stack drop-shadow-stack backdrop-blur-[2px] flex-col-center font-caption1-medium mobile:h-70pxr mobile:w-70pxr'>
      {stackImage}

      <p className='mobile:hidden'>{stackName}</p>
    </div>
  );
}

export default TechnologyStack;
