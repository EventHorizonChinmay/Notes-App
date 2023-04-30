var btnEl = document.getElementById("btn")
var appEl = document.getElementById("app")
var noteID = 0
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app-storage") || '[]');
}

getNotes().forEach(element => {
    const noteEl = createNoteInEl(element.id, element.content)
});

function createNoteInEl(noteID, content){
    const noteObj = {
        id: noteID++,
        content: content,
        createdOn: new Date,
        updatedOn: new Date
    }
    var noteTAEl = document.createElement("textarea")
    noteTAEl.classList.add("note")
    noteTAEl.placeholder = "Empty note"
    var noteContent = content
    appEl.insertBefore(noteTAEl, btnEl)
    console.log(noteObj)




    //localStorage.setItem()

    
}

btnEl.addEventListener("click", (e)=>{
    createNoteInEl()
})