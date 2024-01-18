import React, { useEffect, useRef, ReactNode } from 'react'

type ViewMoreLessProps = {
  children: ReactNode;
  index: number;
  title?: string;
}

export const ViewMoreLess = ({ children, index, title }: ViewMoreLessProps) => {
  const flip = { transform: 'rotate(180deg)' };
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => contentRef?.current?.firstElementChild?.scrollIntoView();

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='flex flex-col flex-grow w-full h-full justify-start items-center mb-8'>
      {title && (<h2 className='text-base w-full flex justify-center underline mb-2'>{title}</h2>)}
      <input className={`view-more-less-${index} hidden`} type='checkbox' id={`view-more-less-${index}`} />
      <div ref={contentRef} className={`view-content-${index} px-4 w-full flex flex-col items-start text-start`}>
        {children}
      </div>
      <label className={`view-more-less view-more-${index} text-sm text-center w-full border-black/20 dark:border-white/20 border-t whitespace-nowrap cursor-pointer`} htmlFor={`view-more-less-${index}`} aria-label='toggle view more'>
        <div className='inline-block mr-4' style={flip}>^</div>view-more<div className='inline-block ml-4' style={flip}>^</div>
      </label>
      <label onClick={scrollToTop} className={`view-more-less view-less-${index} justify-center text-sm text-center hidden w-full border-black/20 dark:border-white/20 border-t whitespace-nowrap cursor-pointer`} htmlFor={`view-more-less-${index}`} aria-label='toggle view less'>
        <div className='mr-4'>^</div>view-less<div className='ml-4'>^</div>
      </label>
    </div>
  )
};

export default ViewMoreLess;