var btnEl = document.getElementById("btn");
var appEl = document.getElementById("app");

// ****** Retrive notes from Local Storage LS ******
getNotesFromLS().forEach((note)=>{
    const noteEl = createNoteEl(note.id, note.content)
    appEl.insertBefore(noteEl, btnEl)
})

function getNotesFromLS(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}



// ****** CREATE , DELETE, UPDATE notes ******

function createNoteEl(id, content){
    //console.log(id,content)
    const element = document.createElement("textarea")
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content

    element.addEventListener("dblclick", ()=>{
        console.log('delete clicked')
        const warning = confirm("Do you want to delete the note?");
        if (warning){
            deleteNote(id, element);
        };
    })

    element.addEventListener("input", ()=>{
        updateNote(id, element.value)
    })
    return element;
}


function deleteNote(id, element){
    console.log('id', id)
    const notes =getNotesFromLS().filter((note) => note.id != id)
    console.log(notes)
    saveNoteLocalStorage(notes)
    appEl.removeChild(element)

    return notes
}

function updateNote(id, content){
    const notes = getNotesFromLS()
    const target = notes.filter((note) => note.id==id)[0];
    target.content = content;
    saveNoteLocalStorage(notes)

}

// *****SAVE notes to local storage ******

function saveNoteLocalStorage(notesArr){
    localStorage.setItem("note-app", JSON.stringify(notesArr))
}



function addNote(){
    const notesArr = getNotesFromLS();
    console.log("clicked")

    const noteObj = {
        id: Math.floor(Math.random()*100000),
        content: '',
    }
    //console.log(noteObj)
    // **** Add note before the + btn ****
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    notesArr.push(noteObj)

    saveNoteLocalStorage(notesArr)

}

// ****** + BUTTON click ******

btnEl.addEventListener("click", addNote)