import React from 'react'
import noticeImg from './img/notice.svg'
import { ContentType } from './DiscordHelp'

type HelpContentProps = {
    listContent : ContentType;
}

export default function HelpContent({listContent}:HelpContentProps) {

    const { title, content } = listContent;

  return (
    <li className="help-content">
        <a href="#">
          <figure>
            <img src={noticeImg} alt="확성기" />
          </figure>
          <h3>{title}</h3>
          <p>{content}</p>
        </a>
    </li>
  )
}
