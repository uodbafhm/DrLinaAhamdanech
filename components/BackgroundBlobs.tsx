
import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BackgroundBlobs;
