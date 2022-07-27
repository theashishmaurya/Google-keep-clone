import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

export default function NoteTextArea({ expanded }: { expanded: boolean }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    setIsExpanded(expanded);
  }, []);

  // To Implemet the expand/collapse feature, we need to shift the focus to the textarea and then back to the noteAear.
  const handleExpand = () => {
    setIsExpanded(true);
  };
  const handleCollapse = () => {
    const modal = document.getElementById("text-area-modal");
    if (modal) {
      modal.classList.remove("modal-open");
    }
    setIsExpanded(false);
  };
  const handleSave = () => {
    handleCollapse();
  };
  const handlePin = () => {
    setIsPinned(!isPinned);
  };

  return (
    <div className='w-full z-1000 '>
      <div className='shadow-lg border-1 rounded-xl w-full p-4'>
        <div onClick={handleExpand}>
          {isExpanded && (
            <div className='flex justify-between items-center'>
              <textarea
                rows={1}
                placeholder='Title'
                className='textarea w-full focus:outline-none text-2xl resize-none my-2 font-bold'
              />
              <div className='mx-2' onClick={handlePin}>
                {isPinned ? (
                  <FontAwesomeIcon icon={faThumbTack} size='lg' color='red' />
                ) : (
                  <FontAwesomeIcon icon={faThumbTack} size='lg' />
                )}
              </div>
            </div>
          )}

          <textarea
            className='textarea w-full focus:outline-none text-2xl resize-none'
            placeholder={
              isExpanded ? "Write your note here" : "Start typing..."
            }
            rows={isExpanded ? 5 : 1} // 1 row for the textarea
          ></textarea>
        </div>
        {isExpanded && (
          <div className='flex justify-end'>
            <label className='btn btn-active' onClick={handleSave}>
              Save
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
