import React, { useCallback, useContext } from 'react'
import CafeContext from "./Cafe";

export default function CafePos() {
    console.log(CafeContext);
    const 신메뉴 = useContext(CafeContext);
    console.log(신메뉴);
  return (
    <div>포스 : 신메뉴는 {신메뉴}입니다.</div>
  )
}
