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


    
    liDiv.appendChild(liNote);
    liDiv.appendChild(viewNote);
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



