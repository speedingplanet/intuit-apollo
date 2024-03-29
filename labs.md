# Intermediate Apollo Labs

## Lab 1: Get and render a List of students

1. Query for the students from the schema (`allStudents`)
1. Fields: firstName, lastName, city, province, country
1. What runs the query for us? `useQuery`
1. Map over the results to generate either an unordered list or a table
1. [Bootstrap Tables](https://getbootstrap.com/docs/5.2/content/tables/#overview)

## Lab 2: Sort the list

1. Add event handlers for sorting (table headers, maybe buttons if you used an unordered list)
1. Write a graphql statement for sorting
1. Add a parameter to change the sortField (later the sort direction)
1. Run the sort when the user clicks on the column headers (or similar)

## Server Lab 1: Implement students

1. Load the students from 'all-data.cjs'
2. Implement a Student type
3. Implement queries for `students` and `studentById`
4. Implement resolvers for `students` and `studentById`

## Lab 3: Filter the list

## Lab 4: Get a student by their ID

## Lab 5: Drop-down to Detail view

## Lab 6: Create a List/Detail view

## Lab 7: Search screen to Results view

## Lab 8: Add a student

## Lab 9: Edit a student

1. Look up the student to be edited by their studentId
1. Populate the editing form with the details for the student
1. Edit the student
1. Run a mutation to update the student when the form is submitted
1. Display a message about a successful (or failed!) update when complete

## Lab 10: Other Mutations?

## Lab 11: Paginate through a set of students
