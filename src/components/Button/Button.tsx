import React, { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {extraClasses?: string}

export default function Button(props: IButton) {
    return(
        <button className={`bg-red-600 text-white px-5 py-2 shadow-md rounded-sm ${props.extraClasses}`} {...props}>{props.children}</button>
    )
}