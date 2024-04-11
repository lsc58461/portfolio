interface Props {
  order: number;
  customStyle?: string;
  name: string;
  type: string;
}

function ProjectAnimationCard({ order, customStyle, name, type }: Props) {
  const orderByClassName = () => {
    switch (order) {
      case 1:
        return '-z-10 top-61pxr';

      case 2:
        return '-z-20 top-70pxr';

      case 3:
        return '-z-30 top-79pxr';
    }
  };

  return (
    <div
      className={`${orderByClassName()} ${customStyle} absolute left-18pxr flex h-352pxr w-264pxr flex-col items-center justify-start gap-60pxr rounded-[14px] border border-[rgba(248,248,248,0.30)] bg-[rgba(181,181,181,0.50)] p-35pxr shadow-projectCards backdrop-blur-[5px]`}
    >
      <div className='firstBox h-124pxr w-194pxr rounded-[14px] bg-white' />
      <div className='w-220pxr text-center'>
        <h2 className='secondBox truncate text-32pxr font-body1' title={name}>
          {name}
        </h2>
        <p className='font-body2'>{type}</p>
      </div>
    </div>
  );
}

export default ProjectAnimationCard;
