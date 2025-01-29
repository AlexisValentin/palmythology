import Link from 'next/link'
import { MODAL_IDS } from '../../types/consts/modal'
import { MODAL_WORDING } from '../../wording/fr/modal'
import Button from './Button'

interface ModalProps {
  modalId: MODAL_IDS
  onClick: () => void
  options?: {
    additionalUrl: string
    additionalLabel: string
  }
}

const Modal: React.FC<ModalProps> = ({ modalId, onClick, options }) => {
  const { title, description, button } = MODAL_WORDING[modalId]
  const { label, color } = button

  return (
    <>
      <div className="fixed top-0 left-0 bg-slate-300 opacity-75 w-full h-full z-40" />
      <div className="fixed bg-white border-t-2 border-slate-300 bottom-0 w-full md:border-0 md:w-auto md:bottom-auto md:top-1/2 md:left-1/2 z-50 md:-translate-x-1/2 md:-translate-y-1/2 shadow-2xl rounded-lg opacity-100">
        <div className="m-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="text-sm mb-4">{description}</div>
          <Button label={label} color={color} onClick={onClick} />
          {options?.additionalUrl && options?.additionalLabel && (
            <Link
              className="ml-4 text-sm md:text-base md:ml-8 underline hover:text-pink-500 hover:decoration-sky-500 underline-offset-8"
              href={options?.additionalUrl}
              target="_blank"
            >
              {options?.additionalLabel}
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Modal
