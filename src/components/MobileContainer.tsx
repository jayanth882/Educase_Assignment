import React from 'react';

export function MobileContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center sm:p-6 font-sans">
      <div className="w-full max-w-[375px] h-screen sm:h-[812px] bg-white sm:rounded-[40px] sm:shadow-2xl overflow-y-auto overflow-x-hidden relative flex flex-col sm:border-[8px] border-gray-900 shadow-sm">
        {children}
      </div>
    </div>
  );
}
