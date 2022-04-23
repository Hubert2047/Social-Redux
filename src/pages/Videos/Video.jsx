import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function Video() {
    const videoSrc='https://www.youtube.com/watch?v=lVJLNsLNnWs'
    const poster='https://img.freepik.com/free-vector/cute-girl-thailand-traditional-standing-cartoon-character-hand-draw-art-illustration_56104-1324.jpg?size=626&ext=jpg&ga=GA1.1.1756276514.1650036172'
  return (
    <div>
        <ReactPlayer
            url={videoSrc}
            controls={true}
            />
    </div>
  )
}
