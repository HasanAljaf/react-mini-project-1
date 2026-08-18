# Practice App

Mini React projects completed as part of my Healthcare Software Engineering curriculum.

## Skills Practiced

- Components
- JSX
- Props
- State
- Next.js
- Tailwind CSS

## Current Progress

- Working through the modules "Describing the UI" on the official React documentation.
- After completing each module, a mini project will be completed with the skills learned from that module and a commit will be pushed to this repository.

## Module: Describing the UI

Here are notes from each module learned, and skills practiced through corrosponding mini projects.

### Conditional Rendering

Rendering components based on a condition.
Learning Objectives:

- How to return different JSX depending on a condition
- How to conditionally include or exclude a piece of JSX
- Common conditional syntax shortcuts you’ll encounter in React codebases

#### Module mini project

Appointment status badge.
A reusable component that renders a different status based on props:

- upcomming
- completed
- cancelled
- anything else (error handling)

### Rendering Lists

Transforming an array of data into array of components, then rendering the list.
Learning Objectives:

- How to render components from an array using JavaScript’s map()
- How to render only specific components using JavaScript’s filter()
- When and why to use React keys

#### Skills practiced

- Javascript .map() and .filter() functions
- React <Fragment></Fragment> to render multiple nodes when mapping an array

#### Module mini project

Render medication list from an array of objects.

### Keeping components pure

A pure component in React is a component that when given the same input (props), will always return the same output (the JSX they render). They don't change objects or variables that existed before they render.

Learning Objectives:

- What purity is and how it helps you avoid bugs
- How to keep components pure by keeping changes out of the render phase
- How to use Strict Mode to find mistakes in your components

#### Module mini project

Refactor every component so it becomes a pure component.

- No duplicated code
- reusable components only

## Module: Adding Interactivity

### Responding to events

Learning objectives:

- Different ways to write an event handler
- How to pass event handling logic from a parent component
- How events propagate and how to stop them

#### Module mini project

Patient Check-In Button

The Patient can check in and check out via a button. The button will allow the patient to check in, or check out if they are already checked in.

### State: A component's memory

Learning objectives:

- How to add a state variable with the useState Hook
- What pair of values the useState Hook returns
- How to add more than one state variable
- Why state is called local

#### Module mini project

Medication counter.

UI conceptually contains:

- The medication's name
- The current number of doses taken
- A button to record another dose
- A button to remove a recorded dose

### Rendering & Snapshots

Learning objectives:

- What rendering means in React
- When and why React renders a component
- The steps involved in displaying a component on screen
- Why rendering does not always produce a DOM update

- How setting state triggers re-renders
- When and how state updates
- Why state does not update immediately after you set it
- How event handlers access a “snapshot” of the state

### Updating Objects in State

Learning objectives:

- How to correctly update an object in React state
- How to update a nested object without mutating it
- What immutability is, and how not to break it
- How to make object copying less repetitive with Immer

#### Module mini project

Patient profile editor.

A component that displays patient information such as:

- name
- age
- blood type
- allergies

The component will also have input fields for each property so the user can update the information separately.

As the user is typing, the value of the corrosponding input field updates live

Skills applied

- update object properties as state values

### Updating arrays in state

Learning objectives:

- How to add, remove, or change items in an array in React state
- How to update an object inside of an array
- How to make array copying less repetitive with Immer

#### Module mini project

Appointment manager.

My approach:

1. build the UI first
   - Two main sections; an appointment form for adding and editing appointments, and appointment list for displaying and deleting appointments

2. determine what an appointment object needs (properties)
   - name (patient)
   - doctor
   - date
   - time
   - reason for visit

3. give each object a unique identifier (id)

4. store array of appointments in state

5. implement features
   - add
   - edit
   - delete
6. test combinations of all three operations

7. Style the UI
