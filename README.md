# unionversity
[Codecademy](https://www.codecademy.com/learn) [TypeScript](https://www.typescriptlang.org/) project.

## Unionversity
Education has finally reached its pinnacle with the establishment of a new-wave educational institution named Unionversity. At Unionversity, learners join together and combine their knowledge to gain a higher understanding of the world around them. While it’s changing the way we think about learning, Unionversity does have one interesting requirement: all students must write a type-safe program that enrolls them in their own courses and study groups.

This program must be able to search courses and study groups from a list, enroll in them, and print a list of currently enrolled events. Let’s test our skills of TypeScript to get enrolled. As we say at Unionversity, “ts-c you in class”!

## Tasks
### Getting started
1. Welcome to your Unionversity starter code. Let’s inspect the files that currently exist:

- courses.ts: Contains a list of courses offered.
- studyGroups.ts: Contains a list of study groups offered.
- tsconfig.json: Defines the rules for TypeScript to compile code into JavaScript.
- index.ts: The file we’ll use to write a program to enroll at Unionversity.

Take a moment to look over these files, especially courses.ts and studyGroups.ts. They contain data you’ll use throughout this project.

Start by importing both courses.ts and studyGroups.ts into index.ts.

2. Now, let’s define types for the data we just imported.

Create a type named Course that matches the shape of an individual course. You can find the keys and the types of their values in courses.ts.

3. Create another type named StudyGroup that matches the shape of an individual study group. You can find the keys and the types of their values by looking at studyGroups.ts.

### Searching Through Events
4. Now that we have types, let’s start on the first requirement of our program:

- Search through lists of courses and study groups and find matching events.

As you may have noticed, we’ll call courses and study groups “events” when referring to both.

Begin by declaring a function named searchEvents().

5. Now let’s define what the searchEvents() function can accept as input.

Define a parameter named options on the searchEvents() function.

6. The options parameter will be an object that will allow us to search for courses or study groups. Here are two examples of arguments for options:
```js
{
  query: 'art',
  eventType: 'courses'
}

{
  query: 1,
  eventType: 'groups'
}
```
Declare a type named SearchEventsOptions and define its keys and values based on the examples given. Both the query and eventType keys should be unions.

7. Use the SearchEventsOptions type to type the searchEvents() function’s options parameter.

8. Move on to the body of the searchEvents() function. Inside the function we want to take a list of either courses or study groups, then filter them based on the .query property from options. Let’s start by creating a variable to store the list we’ll search through.

Declare a variable named events. If the eventType inside options is 'courses', set events to be courses. If not, set events to be studyGroups.

9. Move on to the body of the searchEvents() function. Inside the function we want to take a list of either courses or study groups, then filter them based on the .query property from options. Let’s start by creating a variable to store the list we’ll search through.

Declare a variable named events. If the eventType inside options is 'courses', set events to be courses. If not, set events to be studyGroups.

10. Now let’s start to find the courses or study groups that match the .query property from options.

Call .filter() on events. Then inside the .filter() method’s callback, name the argument event, and provide it the proper type.

For now, the body of the .filter() method should be empty.

11. Inside the .filter() you wrote in the previous task, write a conditional with a type guard that checks if the .query from options is a 'number'.

If the .query property is a 'number', then return true if the event.id is equal to the options.query. If we were to search for a course with an options object like this:
```js
{
  query: 1,
  eventType: 'courses'
}
```
We should get back courses with the id of 1.

12. Another great way to search through courses and study groups is by keyword.

Add another conditional with a type guard inside the .filter() that checks if .query from options is a 'string'.

When options.query is a 'string', return true if the event‘s keywords array .includes() the .query property.

13. Now that all of our searching logic is in place, make sure to return the result of the .filter().

14. Hover your mouse over the searchEvents() function’s name. You should see a pop-up that reads something similar to:
```js
function searchEvents(options: SearchEventsOptions): (Course | StudyGroup)[]
```
Notice that TypeScript was able to infer the return type (Course | StudyGroup)[]. It correctly identified that searchEvents() can return an array with a union of a Course or a StudyGroup. Since TypeScript inferred the return type correctly, there’s no need for you to explicitly type the return type. Continue to the next task!

15. Let’s make sure that searchEvents() works properly.

At the bottom of index.ts, call the searchEvents() function with a valid argument and store the results in a variable named searchResults.

Then use console.log() to print out searchResults. Good values for the argument’s query property include 'art' and '2'.

Run tsc then node index.js (when there aren’t any errors) to see your search results.

### Enrolling in Events
16. We can now find courses and study groups! Now it’s time to enroll in them.

Declare a function named enroll. It should have an parameter named event that can be either a Course or a StudyGroup.

17. The purpose of the enroll() function is to take an event and add it to a list of our enrolled events.

Above the enroll() function, declare a variable named enrolledEvents and set it equal to an empty array. Use let to declare enrolledEvents, since we will be altering this array shortly.

18. We will fill the enrolledEvents array with both Course and StudyGroup objects. Define the proper type on it.

19. Inside the enroll() function, we want to add the passed event to the enrolledEvents array.

Write the logic to add the passed event to enrolledEvents.

20. At the bottom of index.ts, let’s enroll in an event.

Take one of the items from searchResults and pass it to enroll().

### Taking Courses

21. Now that we’ve enrolled in an event, it’s time to print out the list of enrolledEvents. Use console.log() to print out the list of enrolled events.

Then use tsc and node index.js to see the output.

22. Congratulations! You are now enrolled at Unionversity. May your future be a combination of bright and amazing. Your collection of enrolled events are sure to include elements of rigorous study and intrigue. Once you finish all of your courses, you will surely earn the type of degree you’ve always wanted.

Interested in extra credit?

- Allow the enroll() function to take in a list of courses and add them all to enrolledEvents.
- Add another function that allows you to drop a course.
- Add another function that prints only the titles of your enrolled events.