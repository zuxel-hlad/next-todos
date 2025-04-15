import React, { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

export interface IConfirmDialogProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    confirm: () => void
    cancel: () => void
    children: React.ReactNode
}
