import { JSX } from 'react'

import { cn } from '@/lib/utils'

import { ISpinnerProps } from './spinner.props'

import './Spinner.css'

export default function Spinner({ className, ...props }: ISpinnerProps): JSX.Element {
    return <div className={cn('spinner', className)} {...props}></div>
}
