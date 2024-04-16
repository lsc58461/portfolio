import { ModalContentDescriptionTitle } from '..';
import {
  ProjectTeamMembers,
  SolvedProblems,
} from '../../constants/PROJECT_CONFIG';

interface Props {
  projectOrder: string;
  projectIntroduce: string;
  projectTeamMembers: ProjectTeamMembers;
  projectRole: string[];
  ProjectTakeaway: string;
  ProjectSolvedProblems: SolvedProblems[] | null;
}

function ModalContentDescription({
  projectOrder,
  projectIntroduce,
  projectTeamMembers,
  projectRole,
  ProjectTakeaway,
  ProjectSolvedProblems,
}: Props) {
  return (
    <section className='h-487pxr w-full max-w-501pxr overflow-hidden overflow-y-scroll mobile:h-800pxr mobile:max-w-600pxr mobile:pb-40pxr tablet:max-w-600pxr'>
      <div className='flex min-h-487pxr w-full flex-col gap-20pxr border border-[#4d4d4d] p-20pxr'>
        <h3 className='leading-[79%] font-h1-semibold'>{projectOrder}</h3>
        <div className='flex flex-col gap-24pxr leading-6 font-body2'>
          <div>
            <ModalContentDescriptionTitle>
              프로젝트 소개
            </ModalContentDescriptionTitle>
            <p className='whitespace-pre-wrap pl-4pxr'>{projectIntroduce}</p>
          </div>
          <div>
            <ModalContentDescriptionTitle>
              팀원 소개
            </ModalContentDescriptionTitle>
            <ul className='pl-4pxr'>
              {projectTeamMembers.frontend && (
                <li>
                  frontend : {projectTeamMembers.frontend.length}명 (
                  {projectTeamMembers.frontend.join(', ')})
                </li>
              )}
              {projectTeamMembers.backend && (
                <li>
                  backend : {projectTeamMembers.backend.length}명 (
                  {projectTeamMembers.backend.join(', ')})
                </li>
              )}
              {projectTeamMembers.designer && (
                <li>
                  designer : {projectTeamMembers.designer.length}명 (
                  {projectTeamMembers.designer.join(', ')})
                </li>
              )}
            </ul>
          </div>
          <div>
            <ModalContentDescriptionTitle>역할</ModalContentDescriptionTitle>
            <ul className='pl-4pxr'>
              {projectRole.map((role, index) => (
                <li key={index}>- {role}</li>
              ))}
            </ul>
          </div>
          <div>
            <ModalContentDescriptionTitle>
              프로젝트에서 얻은 것
            </ModalContentDescriptionTitle>
            <p className='whitespace-pre-wrap pl-4pxr'>{ProjectTakeaway}</p>
          </div>
          {ProjectSolvedProblems && (
            <div>
              <ModalContentDescriptionTitle>
                문제 해결
              </ModalContentDescriptionTitle>
              <ul className='pl-4pxr'>
                {ProjectSolvedProblems.map((problem, index) => (
                  <li key={index}>
                    <p className='pb-4pxr'>
                      <span className='font-semibold'>문제 : </span>
                      {problem.problem}
                    </p>
                    <p className='pl-6pxr'>
                      <span className='font-semibold'>해결 : </span>
                      {problem.solution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ModalContentDescription;
