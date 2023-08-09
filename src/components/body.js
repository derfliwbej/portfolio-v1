"use client"

import { Ubuntu_Mono } from 'next/font/google'
import { useContext } from 'react';
import { DrawerContext } from '@/context/DrawerContext';

const ubuntu_mono = Ubuntu_Mono({ 
    subsets: ['latin'],
    weight: '400'
  });

export default function BodyWrapper({ children }) {
    const { open } = useContext(DrawerContext)
  
    return (
      <body className={`${ubuntu_mono.className} ${open ? 'overflow-hidden' : 'overflow-auto' }`}>{children}</body>
    )
}