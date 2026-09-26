

// QUEUE USING ARRAY 

// Maximum capacity of the queue
const MAX_SIZE = 5;

// Create an array of fixed size
let queue = new Array(MAX_SIZE);

// Queue pointers
let front = -1;
let rear = -1;



// DOM ELEMENTS


const valueInput = document.getElementById("valueInput");

const insertBtn = document.getElementById("insertBtn");
const deleteBtn = document.getElementById("deleteBtn");
const searchBtn = document.getElementById("searchBtn");
const displayBtn = document.getElementById("displayBtn");

const queueContainer = document.getElementById("queueContainer");

const message = document.getElementById("message");

const frontValue = document.getElementById("frontValue");
const rearValue = document.getElementById("rearValue");

const sizeValue = document.getElementById("sizeValue");
const statusValue = document.getElementById("statusValue");


// INSERT OPERATION

function insert(value) {

    // Check whether the queue is full
    if (rear === MAX_SIZE - 1) {

        showMessage("Queue Overflow! Queue is full.");

        return;
    }


    // If queue is empty
    if (front === -1) {

        front = 0;
    }


    // Move rear forward
    rear = rear + 1;


    // Insert value into the array
    queue[rear] = value;


    showMessage(
        value + " inserted into the queue."
    );


    // Update webpage
    displayQueue();
}



// DELETE OPERATION

function deleteElement() {

    // Check whether queue is empty
    if (front === -1 || front > rear) {

        showMessage(
            "Queue Underflow! Queue is empty."
        );

        return;
    }


    // Store the element being deleted
    const deletedValue = queue[front];


    // Clear the current position
    queue[front] = undefined;


    // Move front forward
    front = front + 1;


    // If queue becomes empty
    if (front > rear) {

        front = -1;
        rear = -1;
    }


    showMessage(
        deletedValue + " deleted from the queue."
    );


    // Update webpage
    displayQueue();
}


// SEARCH OPERATION

function search(value) {

    // Check whether queue is empty
    if (front === -1) {

        showMessage(
            "Queue is empty. Nothing to search."
        );

        return;
    }


    // Search from front to rear
    for (let i = front; i <= rear; i++) {

        if (queue[i] == value) {

            showMessage(
                value +
                " found at queue index " +
                i +
                "."
            );

            return;
        }
    }


    // Value not found
    showMessage(
        value + " not found in the queue."
    );
}



// DISPLAY OPERATION

function displayQueue() {

    // Clear previous display
    queueContainer.innerHTML = "";


    // Display all array positions
    for (let i = 0; i < MAX_SIZE; i++) {

        const box = document.createElement("div");

        box.classList.add("queue-box");


        // Check whether position contains a value
        if (
            queue[i] !== undefined &&
            queue[i] !== null
        ) {

            box.textContent = queue[i];

        } else {

            box.textContent = "_";

            box.classList.add("empty-box");
        }


        queueContainer.appendChild(box);
    }


    updateInformation();
}


// UPDATE FRONT, REAR AND STATUS


function updateInformation() {

    frontValue.textContent = front;

    rearValue.textContent = rear;


    // Calculate queue size
    let size = 0;


    if (front !== -1) {

        size = rear - front + 1;
    }


    sizeValue.textContent = size;


    // Update status
    if (size === 0) {

        statusValue.textContent = "Empty";

    } else if (size === MAX_SIZE) {

        statusValue.textContent = "Full";

    } else {

        statusValue.textContent = "Available";
    }
}


// MESSAGE FUNCTION


function showMessage(text) {

    message.textContent = text;
}



// INSERT BUTTON


insertBtn.addEventListener("click", function () {

    const value = valueInput.value;


    // Validate input
    if (value === "") {

        showMessage(
            "Please enter a value."
        );

        return;
    }


    insert(value);


    // Clear input
    valueInput.value = "";

});


// DELETE BUTTON


deleteBtn.addEventListener("click", function () {

    deleteElement();

});


// SEARCH BUTTON


searchBtn.addEventListener("click", function () {

    const value = valueInput.value;


    if (value === "") {

        showMessage(
            "Please enter a value to search."
        );

        return;
    }


    search(value);

});



// DISPLAY BUTTON


displayBtn.addEventListener("click", function () {

    displayQueue();

    showMessage(
        "Current queue displayed."
    );

});


// INITIAL DISPLAY

displayQueue();

