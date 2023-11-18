import courses from './courses'
import studyGroups from './studyGroups'

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
}

let enrolledEvents: (Course | StudyGroup)[] = []

function searchEvents(options: SearchEventsOptions) {
  let events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return options.query === event.id
    }
    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query)
    }
  })
}

let searchResults = searchEvents({ query: 'art', eventType: 'courses' })

console.log(searchResults)

function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event)
}

enroll(searchResults[0])

console.log(enrolledEvents)