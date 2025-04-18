import React from 'react';
import { HeroComponent, AboutComponent, ProjectsComponent, ContactComponent } from '../components';


export const Home = () => {
  return (
    <main className=''>
      <HeroComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <ContactComponent/>
    </main>
  )
}
