import React from 'react'
import useContent from '../hooks/useContent'

const Browse = () => {
  // getting series and films
  const { series } = useContent('series')
  const { films } = useContent('films')
  console.log(series)
  console.log(films)

  return (
    <div>Browse</div>
  )
}

export default Browse