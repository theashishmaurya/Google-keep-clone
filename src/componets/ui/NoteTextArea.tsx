import { useEffect, useState } from "react";
import { Note } from "../../context/Note.Context";
import PinIcon from "./PinIcon";

export interface NoteTextAreaProps {
  expanded?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: Note;
  isEditing?: boolean;
  onSave?: () => void;
  handlePin?: () => void;
  modalClose?: () => void;
  onCancel?: () => void;
}

export default function NoteTextArea(props: NoteTextAreaProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    props?.expanded || false
  );

  useEffect(() => {
    if (props.expanded) setIsExpanded(props.expanded);
  }, [props.expanded]);

  // To Implemet the expand/collapse feature, we need to shift the focus to the textarea and then back to the noteAear.
  const handleExpand = () => {
    setIsExpanded(true);
  };
  const handleCollapse = () => {
    if (props.modalClose) {
      props.modalClose?.();
      return;
    }
    setIsExpanded(false);
  };
  const handleSave = () => {
    props.onSave?.();
    handleCollapse();
  };

  const handelCancel = () => {
    handleCollapse();
    props.onCancel?.();
  };

  return (
    <div className='w-full z-1000 '>
      <div className='shadow-lg border-1 rounded-xl w-full p-4'>
        <div onClick={handleExpand}>
          {isExpanded && (
            <div>
              <div className='flex justify-between items-center'>
                <textarea
                  value={props.value?.title}
                  rows={1}
                  placeholder='Title'
                  name='title'
                  onChange={(e) => {
                    props.onChange?.(e);
                  }}
                  className='textarea w-full focus:outline-none text-2xl resize-none my-2 font-bold'
                />
                <PinIcon
                  className='mx-2 cursor-pointer'
                  isPinned={props.value?.isPinned}
                  onClick={props.handlePin}
                />
              </div>
              <textarea
                value={props.value?.tagline}
                rows={1}
                placeholder="What's the tagline? (Optional)"
                name='tagline'
                onChange={(e) => {
                  props.onChange?.(e);
                }}
                className='textarea w-full focus:outline-none text-lg resize-none my-2 font-light'
              />
            </div>
          )}

          <textarea
            className='textarea w-full focus:outline-none text-2xl resize-none'
            name='description'
            value={props.value?.description}
            placeholder={
              isExpanded ? "Write your note here" : "Start typing..."
            }
            onChange={(e) => {
              props.onChange?.(e);
            }}
            rows={isExpanded ? 5 : 1} // 1 row for the textarea
          ></textarea>
        </div>
        {isExpanded && (
          <div className='flex justify-end'>
            {props.isEditing !== undefined && props.isEditing ? (
              <label
                htmlFor='my-modal-4'
                className='btn btn-active'
                onClick={handleSave}
              >
                Update
              </label>
            ) : (
              <div>
                <label className='btn btn-active mx-4' onClick={handleSave}>
                  Add
                </label>
                <label
                  className='btn bg-white text-black hover:text-white'
                  onClick={handelCancel}
                >
                  Cancel
                </label>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
