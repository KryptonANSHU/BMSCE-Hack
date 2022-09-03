import React from 'react'
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import './chaticon.css'

const Chaticon = () => {
  return (
    <div className='parentchat'>
    {/* <button className='btnchat'>
        <MarkChatReadIcon className="svg_icons"/>
    </button> */}

    <a className='btnchat' href='https://aryanpandey1507.github.io/HealthBot/' target={'_blank'}>
    <MarkChatReadIcon className="svg_icons"/>
    </a>
    </div>
  )
}

export default Chaticon