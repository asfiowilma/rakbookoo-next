import { cn } from '@/lib/utils'
import React, { type PropsWithChildren } from 'react'

const Modal = ({
  isOpen,
  setIsOpen,
  className,
  children,
}: ModalBaseProps & PropsWithChildren & PropsWithClassName) => {
  return (
    <div
      aria-hidden
      className={cn(
        'modal modal-bottom md:modal-middle',
        isOpen && 'modal-open'
      )}
      onClick={() => setIsOpen(false)}
    >
      <div
        aria-hidden
        onClick={(e) => e.stopPropagation()}
        className={cn('modal-box bg-base-300 relative m-4 pr-0', className)}
      >
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2"
          onClick={() => setIsOpen(false)}
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
