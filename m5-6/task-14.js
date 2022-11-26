console.log('M 5-6: 14');

// 14.
// Напиши клас Notes який управляє колекцією нотаток у
// властивості items.
// Нотатка це об'єкт із властивостями: text, priority

// Додай класу статичну властивість: Priopity,
// У якому зберігатиметься об'єкт із пріоритетами.
/*
    {
      HIGHT: "hight",
      LOW: "low",
    }
*/

// Додай методи:
//   addNote(note),
//   removeNote(text)
//   updatePriority(text, newPriority)

// code below
class Notes {
  constructor() {}

  addNote() {}

  removeNote() {}

  updatePriority() {}
}


// code for check
const note1 = new Notes();

note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW });
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW });
// note1.addNote({ text: 'Note3', priority: Notes.Priority().LOW });
// note1.removeNote('Note2');
// note1.updatePriority({ text: 'Note3', newPriority: Notes.Priority().HIGHT });
console.table(note1.items);
