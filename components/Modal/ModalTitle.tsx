interface Props {
  title: string;
  projectCategory: string;
  period: string;
}

function ModalTitle({ title, projectCategory, period }: Props) {
  return (
    <div className='gap-8pxr flex-col-center'>
      <div className='text-center'>
        <h2 className='font-h2-semibold'>{title}</h2>
        <p className='font-light font-body2'>{projectCategory}</p>
      </div>
      <p className='font-light font-body2'>{period}</p>
    </div>
  );
}

export default ModalTitle;
