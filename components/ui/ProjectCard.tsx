interface Props {
  animationClassName?: string;
}

function ProjectCard({ animationClassName }: Props) {
  return (
    <div
      className={`${animationClassName} shadow-projectCard flex h-404pxr w-300pxr flex-col items-center gap-50pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(124,124,124,0.60)] px-38pxr py-40pxr backdrop-blur-[5px]`}
    >
      <div className='h-154pxr w-220pxr rounded-[14px] bg-white'></div>
      <div className='text-center'>
        <h2 className='!text-40pxr font-body1'>CamPro</h2>
        <p className='font-body2'>팀 프로젝트</p>
      </div>
    </div>
  );
}

export default ProjectCard;
