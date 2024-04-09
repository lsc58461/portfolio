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
    <section className='h-487pxr w-501pxr flex-[1_0_0%] overflow-hidden overflow-y-scroll'>
      <div className='flex min-h-487pxr w-full flex-col gap-20pxr border border-[#4d4d4d] p-20pxr'>
        <h3 className='leading-[79%] font-h1-semibold'>{projectOrder}</h3>
        <div className='flex flex-col gap-24pxr !font-light leading-6 font-body2'>
          <div>
            <h4 className='pb-8pxr !font-title1-semibold'>프로젝트 소개</h4>
            <p className='whitespace-pre-wrap pl-4pxr'>{projectIntroduce}</p>
          </div>
          <div>
            <h4 className='pb-8pxr !font-title1-semibold'>팀원 소개</h4>
            <ul className='pl-4pxr'>
              {projectTeamMembers.frontend && (
                <li>frontend : {projectTeamMembers.frontend.join(', ')}</li>
              )}
              {projectTeamMembers.backend && (
                <li>backend : {projectTeamMembers.backend.join(', ')}</li>
              )}
              {projectTeamMembers.designer && (
                <li>designer : {projectTeamMembers.designer.join(', ')}</li>
              )}
            </ul>
          </div>
          <div>
            <h4 className='pb-8pxr !font-title1-semibold'>역할</h4>
            <ul className='pl-4pxr'>
              {projectRole.map((role, index) => (
                <li key={index}>- {role}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='pb-8pxr !font-title1-semibold'>
              프로젝트에서 얻은 것
            </h4>
            <p className='whitespace-pre-wrap pl-4pxr'>{ProjectTakeaway}</p>
          </div>
          {ProjectSolvedProblems && (
            <div>
              <h4 className='pb-8pxr !font-title1-semibold'>문제 해결</h4>
              <ul className='pl-4pxr'>
                {ProjectSolvedProblems.map((problem, index) => (
                  <li key={index}>
                    <h5 className='pb-4pxr !font-title2-semibold'>
                      {problem.problem}
                    </h5>
                    <p className='pl-4pxr'>{problem.solution}</p>
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
