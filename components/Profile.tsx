import Image from 'next/image';
import profileImage from '../public/pngs/profile.png';
import { ProfileContent } from '.';

function Profile() {
  return (
    <div className='flex flex-col gap-80pxr'>
      <div className='flex-wrap gap-56pxr flex-row-center'>
        <div className='h-280pxr w-280pxr overflow-hidden rounded-full bg-[#568290] pt-24pxr shadow-profile flex-row-center mobile:h-200pxr mobile:w-200pxr'>
          <Image
            src={profileImage}
            width={192}
            height={256}
            quality={100}
            alt='프로필 이미지'
            priority
          />
        </div>
        <div className='flex flex-col gap-24pxr mobile:gap-22pxr'>
          <ProfileContent type='name'>이정윤</ProfileContent>
          <ProfileContent type='phoneNumber'>010-8266-3635</ProfileContent>
          <ProfileContent type='email'>lsc58461@gmail.com</ProfileContent>
          <ProfileContent type='github'>
            https://github.com/lsc58461/
          </ProfileContent>
          <ProfileContent type='blog'>
            https://velog.io/@lsc58461
          </ProfileContent>
        </div>
      </div>
      <h2 className='text-center !font-extralight font-title3-medium'>
        항상 새로운 기술을 배우고 적용하는 데에 열정을 가지고 있으며,
        <br />
        팀원들과의{' '}
        <span className='!font-medium text-[#73B8CD] font-title1-semibold'>
          원활한 커뮤니케이션
        </span>
        과{' '}
        <span className='!font-medium text-[#73B8CD] font-title1-semibold'>
          협업
        </span>
        을 중요하게 생각하는 주니어 개발자입니다.
      </h2>
    </div>
  );
}

export default Profile;
