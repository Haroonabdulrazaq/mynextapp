import React from 'react'
import List from 'next/link'

const EventList = ({eventList}) => {
  return (
    <>
      <h2>List of Events</h2>
      {eventList.map((event)=>(
          <List key={event.id} href={`/events/${event.id}`}>
            <div>
              <h2> {event.id}. {event.title} - {event.date} | {event.category} </h2>
              <p> {event.description} </p>
              <hr />
            </div>
          </List>
      ))}
    </>
  )
}

export default EventList

export async function getServerSideProps(){
  const response = await fetch('http://localhost:4000/events')
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}