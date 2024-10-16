"use client";
import { CustomButtonProps } from '@/types';
import React from 'react'
import Image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <button 
        disabled={false}
        type={btnType || 'button'}
        className={containerStyles}
        onClick={handleClick}>
            <span className={textStyles}>
                {title}
            </span>
            {rightIcon && (
              <div className='relative w-6 h-6'>
                  <Image
                    src={rightIcon}
                    alt="right icon"
                    fill
                    className='object-contain justify-end'
                  />
              </div>
            )
            }
    </button>
  )
}

export default CustomButton