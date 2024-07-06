import { MODAL_IDS } from '../../types/consts/modal'
import { MODAL_WORDING } from '../../wording/fr/modal'
import Button from './Button'

interface ModalProps {
  modalId: MODAL_IDS
}

const Modal: React.FC<ModalProps> = ({ modalId }) => {
  const { title, description, button } = MODAL_WORDING[modalId]
  const { label, color } = button

  return (
    <div className="fixed bg-white top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-lg">
      <div className="m-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm mb-4">{description}</div>
        <Button label={label} color={color} />
      </div>
    </div>
  )
}

export default Modal
