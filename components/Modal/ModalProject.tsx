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
import { Link, ProjectDescription } from '../../constants/PROJECT_CONFIG';

interface Props {
  onCloseClick: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  isButtonDisabled: boolean;
  title: string;
  projectCategory: string;
  period: string;
  projectOrder: string;
  projectDescription: ProjectDescription;
  Links: Link[];
  technologyStacks: string[];
  imageUrls: string[];
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
  imageUrls,
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
              <ModalImageList imageUrls={imageUrls} />
              <ModalLinkButtonList Links={Links} />
            </div>
            <ModalContentDescription
              projectOrder={projectOrder}
              projectIntroduce={projectDescription.projectIntroduce}
              projectTeamMembers={projectDescription.projectTeamMembers}
              projectRole={projectDescription.roles}
              ProjectTakeaway={projectDescription.takeaways}
              ProjectSolvedProblems={projectDescription.solvedProblems}
            />
          </ModalContentsSection>
          <ModalStackBadgeList technologyStacks={technologyStacks} />
        </ModalWrapper>
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalProject;
