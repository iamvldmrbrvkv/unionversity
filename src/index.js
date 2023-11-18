"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let enrolledEvents = [];
function searchEvents(options) {
    let events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
let searchResults = searchEvents({ query: 'art', eventType: 'courses' });
console.log(searchResults);
function enroll(event) {
    enrolledEvents.push(event);
}
enroll(searchResults[0]);
console.log(enrolledEvents);
