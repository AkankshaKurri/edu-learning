import React from 'react';

const NoteCard = ({title, date, content, tags, isPinned, onEdit, onDelete, onPinNotes}) => {
  return <>
    <div>
       <div>
          <h6 className="text-sm font-medium">qqqqqqqqqqqq{title}</h6>
          <span className="text-xs from-neutral-500">fffffffff</span>
       </div>
    </div>
  </>
}

export default NoteCard;