import React from 'react'
import style from "../../../styles/CommonButton.module.css"
export default function CommonButton({ title }: { title: any }) {

    return (
        <button className={`${style.buttonColor} linkText`}>{title ? title : ''}</button>
    )
}
