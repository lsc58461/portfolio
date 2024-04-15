interface Props {
  name: string;
  type: string;
  animationClassName?: string;
}

function ProjectCard({ name, type, animationClassName }: Props) {
  return (
    <div
      className={`${animationClassName} relative flex h-404pxr w-300pxr flex-col items-center gap-50pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(124,124,124,0.60)] px-38pxr py-40pxr shadow-projectCard backdrop-blur-[5px] mobile:h-280pxr mobile:w-200pxr mobile:gap-30pxr mobile:px-18pxr mobile:py-20pxr`}
    >
      <div className='h-154pxr w-full rounded-[14px] bg-white mobile:h-100pxr'></div>
      <div className='w-220pxr text-center'>
        <h2 className='truncate !text-32pxr font-body1' title={name}>
          {name}
        </h2>
        <p className='font-body2'>{type}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
