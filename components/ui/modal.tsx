import { cn } from '@/lib/utils'
import React, { type PropsWithChildren } from 'react'

const Modal = ({
  isOpen,
  setIsOpen,
  children,
}: ModalBaseProps & PropsWithChildren) => {
  const closeModal = () => setIsOpen(false)

  return (
    <div
      aria-hidden
      className={cn(
        'modal modal-bottom md:modal-middle',
        isOpen && 'modal-open'
      )}
      onClick={closeModal}
    >
      <div
        aria-hidden
        onClick={(e) => e.stopPropagation()}
        className="modal-box relative m-4 max-w-screen-md pr-0"
      >
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>

        <div className="rak-scrollbar rounded-box mr-2 max-h-[calc(100vh-8em)] overflow-y-auto pr-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
