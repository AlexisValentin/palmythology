import { MODAL_IDS } from '../../types/consts/modal'
import { MODAL_WORDING } from '../../wording/fr/modal'
import Button from './Button'

interface ModalProps {
  modalId: MODAL_IDS
  onClick: () => void
}

const Modal: React.FC<ModalProps> = ({ modalId, onClick }) => {
  const { title, description, button } = MODAL_WORDING[modalId]
  const { label, color } = button

  return (
    <div className="fixed bg-white border-t-2 border-slate-300 bottom-0 w-full md:border-0 md:w-auto md:bottom-auto md:top-1/2 md:left-1/2 z-50 md:-translate-x-1/2 md:-translate-y-1/2 shadow-2xl rounded-lg">
      <div className="m-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm mb-4">{description}</div>
        <Button label={label} color={color} onClick={onClick} />
      </div>
    </div>
  )
}

export default Modal
