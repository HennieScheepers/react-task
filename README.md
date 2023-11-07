# School Administration - React

School Administration task that must be written in ReactJS.

## About
Create an application using the latest version of ReactJS with Redux.
The application should contain 3 major sections:

- Login/Register
- Students
- Teachers

Ensure you make use of HTTP requests to retrieve, create and update information,
but, mock the responses for different scenarios to mimic an actual API.

Each component should be tested with Jest.

All styling should be done using the Bootstrap framework.

## Task Workflow Structure
Create tasks on the GitHub project Board to work through the application step by step.
Make use of the Git Flow branching strategy to ensure you break up your work into
small enough chunks. (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Pickup tasks in any order from the 'Backlog' column and move it into the 'In Progress'
column.

Each task should be a feature branch prefixed with HSA- followed by the number of the task.
E.g. HSA-22

Once you have completed your changes and committed to your feature branch, create
a GitHub Pull Request that will be asking for permission to merge your changes into
the develop branch. Assign Jordan as the reviewer.

Once it has been merged, you can then move the task to completed.

## Login/Register
Create an entrypoint for your application that will allow you register/login.

### Register
The registration process should be simple. Ask for the following fields.

- First Name
- Last Name
- Email Address
- Username
- Date of Birth
- School Name
- Password

Make the school name a dropdown field of all the school names available.

### Login
Login process should be based on Username and Password only. Once logged in,
the user should only see details pertaining to the School that they are registered
to.

## Students
This should be a simple table displaying the student code, student name, student surname,
the student grade.

You should be able to page through and search through the items in the table.
Add a button to create a new student, ask the relevant information to add the
student to the school.

Each student will have an action to view the student. Selecting this action should
route you to another page displaying all the students information.

From here, you should be able to edit the details as well as delete the student.

## Teachers
This should be a simple table displaying the teacher code, teacher name, teacher surname.
You should be able to page through and search through the items in the table.

Add a button to create a new teacher, ask the relevant information to add the
teacher to the school.

Each teacher will have an action to view the teacher. Selecting this action should
route you to another page displaying all the teachers information. This information
should include a calendar displaying which days the teacher is off.

From here, you should be able to edit the details as well as delete the teacher.
