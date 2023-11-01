import React, { useEffect, useState } from 'react'
import HelpContent from './HelpContent'
import list from './json/help.json'

export type ContentType = {
    title:string;
    content : string;
}


export default function DiscordHelp() {


 return (
    <ul className="discord-help">
      {list.map(
        (listContent,index)=><HelpContent key={index} listContent={listContent}></HelpContent>)}
      {/* 사진, 제목, 내용 */}
    </ul>
  )
}
