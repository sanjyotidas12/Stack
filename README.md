# Queue Using Array

This is a simple web-based project for demonstrating how a **Queue works using an Array**.

I made this project as part of my Data Structures assignment. The main purpose of the project is to understand how elements are inserted and deleted in a queue and how the `front` and `rear` positions change after each operation.

## About Queue

A Queue follows the **FIFO (First In, First Out)** rule.

For example, if I insert:

```text
10 → 20 → 30
```

the queue will look like:

```text
Front                         Rear
  ↓                             ↓
[10] → [20] → [30]
```

If I perform Delete, `10` will be removed first:

```text
Front                 Rear
  ↓                     ↓
[20] → [30]
```

So, in this project:

- Insert happens from the **rear**
- Delete happens from the **front**

## Features

The webpage supports the following operations:

- **Insert** – Adds a new element to the queue.
- **Delete** – Removes the element from the front.
- **Search** – Searches for a particular element.
- **Display** – Shows the current elements in the queue.

It also shows the current **front, rear, queue size, and queue status**.

## How I Implemented It

I used a fixed-size JavaScript array for the queue.

```javascript
const MAX_SIZE = 5;

let queue = new Array(MAX_SIZE);

let front = -1;
let rear = -1;
```

I did not use `push()` or `shift()` to implement the Queue operations. Instead, I manually manage the array using the `front` and `rear` variables.

For example, when inserting an element, the `rear` position is increased and the value is stored at that position.

When deleting, the value at the `front` position is removed and `front` is moved to the next position.

## Overflow and Underflow

The project also handles two common Queue conditions.

### Overflow

If the queue is full and I try to insert another element, the webpage displays:

```text
Queue Overflow! Queue is full.
```

### Underflow

If the queue is empty and I try to delete an element, it displays:

```text
Queue Underflow! Queue is empty.
```

## Technologies Used

I used:

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

## Project Files

```text
queue-using-array/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the webpage and the buttons for performing the Queue operations.

### `style.css`

Contains the design and styling of the webpage.

### `script.js`

Contains the Queue implementation and the functions for Insert, Delete, Search, and Display.

## Screenshot

Add the screenshot of the completed webpage below.

![Queue Using Array](screenshot.png)

## Live Website

GitHub Pages:

**[Add your GitHub Pages link here]**

## GitHub Repository

**[Add your GitHub repository link here]**

## Pull Request

I created a separate branch for one of the features and merged it into the `main` branch using a Pull Request.

**[Add your merged Pull Request link here]**

## Git Commit History

The project was developed step by step using Git. I made separate commits while adding and fixing different parts of the project instead of uploading everything in one commit.

Some of the changes include:

- Created the initial webpage
- Added Queue array
- Added Insert operation
- Added Overflow handling
- Added Delete operation
- Added Underflow handling
- Added Search operation
- Added Display operation
- Improved the webpage design
- Added project documentation

## Time Complexity

| Operation | Complexity |
|---|---|
| Insert | O(1) |
| Delete | O(1) |
| Search | O(n) |
| Display | O(n) |

## Author
Sanjyoti Das
