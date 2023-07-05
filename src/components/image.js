'use client';
import Image from 'next/image';
import { useState } from 'react';

import styles from '@/styles/Hero.module.css'

const BootstrapImage = ({ className, src, alt, size, handleLoadComplete }) => {
    const [ratio, setRatio] = useState(16 / 9);
    return (
        <>
            <Image className={className} src={src} alt={alt} width={size} height={size / ratio} fixed="true" onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                if (handleLoadComplete) handleLoadComplete();
                setRatio(naturalWidth / naturalHeight);
            }} />
        </>
    );
};

export default BootstrapImage;