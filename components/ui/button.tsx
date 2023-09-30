import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: 'btn-primary',
      destructive: 'btn-error',
      outline: 'btn-outline',
      secondary: 'btn-neutral',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    size: {
      default: 'btn-md',
      sm: 'btn-sm',
      lg: 'btn-lg',
    },
    shape: {
      square: 'btn-square',
      circle: 'btn-circle',
    },
    state: {
      default: '',
      active: 'btn-active',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    state: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, state, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, state, className }),
          props?.disabled ? 'btn-disabled' : ''
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
