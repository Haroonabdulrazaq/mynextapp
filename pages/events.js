import React, {useState} from 'react'
import List from 'next/link'
import { useRouter } from 'next/router'

const EventList = ({eventList, queryString}) => {
  const router = useRouter()
  const [event, setEvent] = useState(eventList)

  const fetchSportEvent = async() =>{
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvent(data)

    router.push(`/events?category=sports`, undefined, {shallow: true})
  }

  return (
    <>
      <button onClick={fetchSportEvent}>Sport Event</button>
      <h2>List of Events</h2>
      {event.map((event)=>(
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

export async function getServerSideProps(context){
  const {query} = context
  const {category} = query
  const queryString = category? 'category=sports' : ''

  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data,
      queryString
    }
  }
}