import React from 'react'
import './index.css'
import { playlistData } from '../../hardCodeData.js'
import { Card } from 'react-bootstrap'

const Playlist = () => {
  console.log(playlistData)
  return (
    <div className='playlist-component-container'>
      <Card className='playlist-component-card text-white' >
        <Card.Img variant="top" src={playlistData.images.url} as="img" width={playlistData.images.width} />
        <Card.Body>
          <Card.Title className='mt-'>{playlistData.name}</Card.Title>
          <Card.Text className='text-white-50'>
            Playlist • {playlistData.owner.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Playlist;