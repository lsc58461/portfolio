'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mt-120pxr gap-80pxr flex-col-center'>
      <div className='flex flex-col gap-8pxr'>
        <h2 className='text-rainbow text-center font-h3-semibold'>
          <span className='!text-90pxr font-h1-semibold'>404</span>
          <br />
          Not Found
        </h2>
        <p className='text-red-400 font-title2-semibold'>
          페이지를 찾을 수 없어요!
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Link href='/' className='rounded-2xl bg-[#4b4b4b] p-20pxr'>
          홈으로 돌아가기
        </Link>
      </motion.div>
    </div>
  );
}
