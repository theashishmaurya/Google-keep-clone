import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PinIcon({
  isPinned = false,
  onClick,
  className,
}: {
  isPinned?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div className={className} onClick={onClick}>
      {isPinned ? (
        <FontAwesomeIcon icon={faThumbTack} size='lg' color='red' />
      ) : (
        <FontAwesomeIcon icon={faThumbTack} size='lg' />
      )}
    </div>
  );
}
