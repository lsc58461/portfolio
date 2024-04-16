'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useScrollRefStore } from '../hooks';
import { ContactForm, Profile, ProjectCardList, TechnologyStackList } from '.';

function Sections() {
  const { setRef } = useScrollRefStore();

  const sections = useMemo(
    () => [
      { id: 'profile-section', component: <Profile /> },
      { id: 'technology-section', component: <TechnologyStackList /> },
      { id: 'project-section', component: <ProjectCardList /> },
      { id: 'contact-section', component: <ContactForm /> },
    ],
    [],
  );

  const sectionClassName = (id: string) => {
    switch (id) {
      case 'technology-section':
        return 'pb-120pxr pt-80pxr';

      case 'contact-section':
        return 'w-full max-w-767pxr py-120pxr';

      default:
        return 'py-120pxr';
    }
  };

  const setSectionRefs = useCallback(() => {
    sections.forEach(({ id }, index) => {
      const sectionRef = document.getElementById(id);
      setRef({ index, ref: sectionRef });
    });
  }, [sections, setRef]);

  useEffect(() => {
    setSectionRefs();
  }, [setSectionRefs]);

  return sections.map(({ id, component }) => (
    <section key={id} id={id} className={sectionClassName(id)}>
      {component}
    </section>
  ));
}

export default Sections;
