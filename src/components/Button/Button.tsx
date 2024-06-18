import React, { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {extraclasses?: string}

export default function Button(props: IButton) {
    return(
        <button className={`bg-red-600 text-white px-5 py-2 shadow-md rounded-sm ${props.extraclasses}`} {...props}>{props.children}</button>
    )
}