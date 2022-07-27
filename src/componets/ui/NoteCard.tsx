import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
export default function NoteCard() {
  return (
    <label
      className='card w-96 glass bg-gray-400 p-4 modal-button'
      htmlFor='my-modal-4'
    >
      <div className='flex w-full justify-end'>
        <FontAwesomeIcon icon={faThumbTack} size='lg' color='red' />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className='card-actions justify-center'>
          {/* <FontAwesomeIcon icon={} />
          <FontAwesomeIcon icon={} />
          <FontAwesomeIcon icon={} /> */}
        </div>
      </div>
    </label>
  );
}
