import {
  ModalContentDescription,
  ModalContentsSection,
  ModalImageList,
  ModalLinkButtonList,
  ModalOutside,
  ModalPortal,
  ModalStackBadgeList,
  ModalTitle,
  ModalWrapper,
} from '..';
import { Link } from '../../constants/PROJECT_CONFIG';

interface Props {
  onCloseClick: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  isButtonDisabled: boolean;
  title: string;
  projectCategory: string;
  period: string;
  projectOrder: string;
  projectDescription: string;
  Links: Link[];
  technologyStacks: string[];
}

function ModalProject({
  onCloseClick,
  onNextClick,
  onPrevClick,
  isButtonDisabled,
  title,
  projectCategory,
  period,
  projectOrder,
  projectDescription,
  Links,
  technologyStacks,
}: Props) {
  return (
    <ModalPortal>
      <ModalOutside onCloseClick={onCloseClick}>
        <ModalWrapper
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          isButtonDisabled={isButtonDisabled}
        >
          <ModalTitle
            title={title}
            projectCategory={projectCategory}
            period={period}
          />
          <ModalContentsSection>
            <div className='relative'>
              <ModalImageList />
              <ModalLinkButtonList Links={Links} />
            </div>
            <ModalContentDescription projectOrder={projectOrder}>
              {projectDescription}
            </ModalContentDescription>
          </ModalContentsSection>
          <ModalStackBadgeList technologyStacks={technologyStacks} />
        </ModalWrapper>
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalProject;
