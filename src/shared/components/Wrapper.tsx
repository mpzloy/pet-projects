"use client"

import React from 'react';

interface WrapperProps {
  wrapperClass?: string;
  children?: React.ReactNode;
}

function Wrapper({wrapperClass, children}: WrapperProps) {
  return (
    <div className={`wrapper ${wrapperClass ?? ''}`}>
      {children}
    </div>
  );
}

export default Wrapper;