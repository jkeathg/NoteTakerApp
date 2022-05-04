// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)


// assign note list and submit button
const noteList = document.getElementById('noteList');
const noteSubmit = document.getElementById('noteSubmit');
// Allow a global variable to be modified often. Used later in click event.
let liNote = null;



noteSubmit.addEventListener('click', () => {
    // add elements,id's,classes. appened to note list
    const liDiv = document.createElement('div');
    liDiv.classList = 'noteEntry';
    liNote = document.createElement('li');
    liNote.id = 'liNote';
    liNote.classList = 'noteDetail';
    const noteTaken = document.getElementById('noteTaken').value;
    liNote.appendChild(document.createTextNode(noteTaken));
    const viewNote = document.createElement('input');
    viewNote.type = 'button';
    viewNote.value = 'View Note';
    viewNote.classList = 'viewNote';
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.classList = 'editNote';
    const clrBtn = document.createElement('input');
    clrBtn.type = 'button';
    clrBtn.value = 'Clear';
    clrBtn.classList = 'clrBtn';


    
    liDiv.appendChild(liNote);
    liDiv.appendChild(viewNote);
    liDiv.appendChild(editBtn);
    liDiv.appendChild(clrBtn);
    noteList.appendChild(liDiv);


    
});


noteList.addEventListener('click', viewNote);


function viewNote(e) {
    // select clicked target
    const item = e.target;
    // put parent element in scope
    const test = item.parentElement;
    // find the first child of parent element
    const selectFirst = test.children[0];
    // toggle the class of first child to remove style adjustments
    if (item.className === 'viewNote') {
        selectFirst.classList.toggle('noteDetail');
    }
}


// next is to create 2 new buttons. one to clear a line. one to edit

// editing: create null var, add innerHTML to that var, hide current text, create a text area and apply var value to it. Create 2 buttons, submit and cancel.
// whatever is edit will need to be applied to that line as it was before and have the same functions. Cancel should remove new tag elements and unhide the hidden element.
// that may require pushing the var back into place. 




// remove Note function
noteList.addEventListener('click', clrLine);


function clrLine(e) {
    // select clicked target
    const item = e.target;
    // find if clear btn pressed.
    if (item.className === 'clrBtn'){
        // point to parent element and assign variable, remove that element.
        const clr = item.parentElement;
        clr.remove();
    }
}


const editWindow = document.getElementById('noteList');
let windowText = null;



// Open edit window, save and cancel
noteList.addEventListener('click', editLine);


function editLine(e) {
    // select clicked target
    const item = e.target;
    // find if clear btn pressed.
    if (item.className === 'editNote'){
        // point to parent element and assign variable, remove that element.
        const noteText = item.parentElement;
        const noteValue = noteText.children[0].textContent;

        const windowDiv = document.createElement('div');
        windowDiv.classList = 'editWindow';
        windowText = document.createElement('textarea');
        windowText.classList = 'windowText';
        windowText.appendChild(document.createTextNode(noteValue));
        const saveBtn = document.createElement('input');
        saveBtn.type = 'button';
        saveBtn.value = 'Save';
        saveBtn.classList = 'saveBtn';
        const cancelBtn = document.createElement('input');
        cancelBtn.type = 'button';
        cancelBtn.value = 'Cancel';
        cancelBtn.classList = 'cancelBtn';


        windowDiv.appendChild(windowText);
        windowDiv.appendChild(saveBtn);
        windowDiv.appendChild(cancelBtn);
        editWindow.append(windowDiv);

        return windowDiv;

    }
}



// close window
editWindow.addEventListener('click', clsWindow);


function clsWindow(e) {
    // select clicked target
    const item = e.target;
    // find if clear btn pressed.
    if (item.className === 'cancelBtn'){
        // point to parent element and assign variable, remove that element.
        const clr = item.parentElement;
        clr.remove();
    }
}