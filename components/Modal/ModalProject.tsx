import {
  ModalContentDescription,
  ModalContentsSection,
  ModalImageList,
  ModalLinkButtonList,
  ModalNavigator,
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
          onCloseClick={onCloseClick}
          isButtonDisabled={isButtonDisabled}
        >
          <div className='gap-20pxr scrollbar-hide flex-col-center mobile:h-full mobile:justify-start mobile:overflow-y-scroll tablet:h-full tablet:justify-start tablet:overflow-y-scroll'>
            <ModalTitle
              title={title}
              projectCategory={projectCategory}
              period={period}
            />
            <ModalStackBadgeList technologyStacks={technologyStacks} />
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
          </div>
          <ModalNavigator
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            isButtonDisabled={isButtonDisabled}
          />
        </ModalWrapper>
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalProject;
