import React from 'react';
import CoursesSection from '../src/component/userWeb/coursesSection/CoursesSection';
import HeaderSection from '../src/component/userWeb/headerSection/HeaderSection';
import EventsSection from '../src/component/userWeb/eventsSection/EventsSection';
import MotivationSection from '../src/component/userWeb/motivationSection/MotivationSection';
import SuccessStoriesSection from '../src/component/userWeb/successStoriesSection/SuccessStoriesSection';

export default function HomePage() {
  return (
    <>
    <HeaderSection/>
    <CoursesSection/>
    <EventsSection/>
    <MotivationSection/>
    <SuccessStoriesSection/>
    </>
  )
}
