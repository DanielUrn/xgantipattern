import React from 'react'
import { Facebook, Telegram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div>
      <div className='footer d-flex mx-2 my-1 justify-content-between'>
        <div className=''>
          <span>XGlobal Singapore Pte Ltd. Copyright 2023. All Rights Reserved</span>
        </div>
        <div>
          <Facebook className='mx-1' width={"3vw"} height={"3vw"}></Facebook>
          <Telegram className='mx-1' width={"3vw"} height={"3vw"}></Telegram>
        </div>
      </div>
    </div>
  )
}

export default Footer
