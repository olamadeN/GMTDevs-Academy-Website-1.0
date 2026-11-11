// components/ProductTabs.jsx
'use client';
import { useState } from 'react';

import styles from './tabs.module.css';
import Image from 'next/image';
import Link from 'next/link';

const frontendCourses = [
    {
        id: 1,
        category: 'Frontend',
        title: 'Frontend Foundations',
        level: 'Beginner',
        description: 'Start building for the web. Learn the building blocks of websites and create your first responsive pages.',
        list: ['How the web works','HTML structure and semantics', 'CSS, layouts and responsive design', 'JavaScript fundamentals and DOM', 'Git basics and publishing a project'],
    },
    {
        id: 2,
        category: 'Frontend',
        title: 'Modern Frontend Development',
        level: 'Intermediate',
        description: 'Move beyond static pages and build interactive interfaces with a modern component-based workflow.',
        list: ['Modern JavaScript and ES modules', 'React components, props and state', 'Routing, forms and API integration', 'Reusable components and styling systems', 'Build and deploy a multi-page application'],
    },
    {
        id: 3,
        category: 'Frontend',
        title: 'Advanced Frontend Engineering',
        level: 'Advanced',
        description: 'Develop production-minded frontend skills and learn to build maintainable, performant applications.',
        list: ['Advanced React patterns and architecture', 'TypeScript and application structure', 'Performance and accessibility', 'Testing and quality practices', 'Production deployment and optimisation'],
    }
];

const BackendCourses = [
    {
        id: 1,
        category: 'Backend',
        title: 'Backend Foundations',
        level: 'Beginner',
        description: 'Understand what happens behind the interface and learn the foundations of server-side development.',
        list: ['Client-server concepts and HTTP', 'Programming fundamentals', 'Server-side application basics', 'Relational data and SQL foundations', 'Build a simple backend service'],
    },
    {
        id: 2,
        category: 'Backend',
        title: 'API and Database Development',
        level: 'Intermediate',
        description: 'Build structured backend applications that manage data and communicate with frontend interfaces.',
        list: ['REST API design and implementation', 'Database modelling and queries', 'Authentication and authorisation', 'Validation, errors and security basics', 'Connect APIs to a frontend application'],
    },
    {
        id: 3,
        category: 'Backend',
        title: 'Advanced Backend Engineering',
        level: 'Advanced',
        description: 'Explore scalable backend design, reliability and the practices used to operate production services.',
        list: ['Application architecture and design patterns', 'Advanced data modelling and optimisation', 'Security, testing and observability', 'Background jobs and integrations', 'Deployment, scaling and reliability'],
    }
];

const UICourses = [
    {
        id: 1,
        category: 'UI/UX Design',
        title: 'Design Foundations',
        level: 'Beginner',
        description: 'Learn the principles behind useful digital interfaces and begin turning ideas into clear screen designs.',
        list: ['Introduction to UI and UX', 'Visual hierarchy, colour and typography', 'Layouts, grids and spacing', 'Wireframes and basic user flows', 'Figma fundamentals and simple prototypes'],
    },
    {
        id: 2,
        category: 'UI/UX Design',
        title: 'Product Design Practice',
        level: 'Intermediate',
        description: 'Develop a more complete design process, from understanding users to prototyping and validating solutions.',
        list: ['User research and problem definition', 'Personas, journeys and information architecture', 'Interactive prototyping', 'Responsive interface design', 'Usability testing and design iteration'],
    },
    {
        id: 3,
        category: 'UI/UX Design',
        title: 'Advanced Product Design',
        level: 'Advanced',
        description: 'Work through complex product challenges and develop systems and design decisions that scale',
        list: ['Advanced product discovery and research', 'Design systems and component libraries', 'Accessibility and inclusive design', 'Complex workflows and interaction patterns', 'Developer handoff and design governance'],
    }
];


export default function CourseTabs() {

  // Tabs state
  const [activeTab, setActiveTab] = useState('Frontend');
  const tabs = [
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Backend', label: 'Backend' },
    { key: 'UI/UX Design', label: 'UI/UX Design' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Frontend':
        return frontendCourses?.length ? ( 
            <div className={styles.grid}>
                {
                    frontendCourses.map((course) => (
                        <div key={course.id} className={styles.card}>
                            <div className={styles.topRow}>
                                <span className={styles.cat}>{course.category}</span>
                                <span className={styles.level}>{course.level}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <ul className={styles.featuresList}>
                                {course.list.map((item, index) => (
                                    <li key={index} className={styles.featuresListItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href='/courses#contact' className={styles.learnMoreBtn}>
                                Enquire about this pathway
                            </Link>
                        </div>
                    ))
                }
            </div>          
        ):(
          <p className={styles.empty}>No features available.</p>
        );

      case 'Backend':
        return BackendCourses?.length ? ( 
            <div className={styles.grid}>
                {
                    BackendCourses.map((course) => (
                        <div key={course.id} className={styles.card}>
                            <div className={styles.topRow}>
                                <span className={styles.cat}>{course.category}</span>
                                <span className={styles.level}>{course.level}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <ul className={styles.featuresList}>
                                {course.list.map((item, index) => (
                                    <li key={index} className={styles.featuresListItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href='/courses#contact' className={styles.learnMoreBtn}>
                                Enquire about this pathway
                            </Link>
                        </div>
                    ))
                }
            </div>          
        ):(
          <p className={styles.empty}>No features available.</p>
        );

      case 'UI/UX Design':
        return UICourses?.length ? ( 
            <div className={styles.grid}>
                {
                    UICourses.map((course) => (
                        <div key={course.id} className={styles.card}>
                            <div className={styles.topRow}>
                                <span className={styles.cat}>{course.category}</span>
                                <span className={styles.level}>{course.level}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <ul className={styles.featuresList}>
                                {course.list.map((item, index) => (
                                    <li key={index} className={styles.featuresListItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href='/courses#contact' className={styles.learnMoreBtn}>
                                Enquire about this pathway
                            </Link>
                        </div>
                    ))
                }
            </div>          
        ):(
          <p className={styles.empty}>No features available.</p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Pill Tabs */}
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`${styles.tab} ${
              activeTab === tab.key ? styles.active : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}