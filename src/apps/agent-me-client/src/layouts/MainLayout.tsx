import React, { ReactNode } from 'react'
import ZoeHeader from '../components/ZoeHeader/ZoeHeader'

interface Props {
  children: ReactNode;
}

function MainLayout({children}: Props) {
  return (
    <div>
      <ZoeHeader></ZoeHeader>

      {children}
    </div>
  )
}

export default MainLayout
