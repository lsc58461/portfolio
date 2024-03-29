import Image from 'next/image';
import profileImage from '../../public/pngs/profile.png';
import { ProfileContent } from '..';

function Profile() {
  return (
    <div className='flex flex-col gap-80pxr'>
      <div className='gap-56pxr flex-center'>
        <Image
          src={profileImage}
          width={280}
          height={280}
          quality={100}
          alt='프로필 이미지'
        />
        <div className='flex flex-col gap-24pxr'>
          <ProfileContent type='name'>asd</ProfileContent>
          <ProfileContent type='phoneNumber'>asd</ProfileContent>
          <ProfileContent type='email'>asd@naver.com</ProfileContent>
          <ProfileContent type='github'>asd</ProfileContent>
          <ProfileContent type='blog'>asd</ProfileContent>
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
