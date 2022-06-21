import React from 'react'
import { BrowseContainer } from '../containers/browseContainer'
import useContent from '../hooks/useContent'
import selectionFilter from '../utils/selectionFilter'

const Browse = () => {
  // getting series and films
  const { series } = useContent('series')
  const { films } = useContent('films')

  // getting the slides
  const slides = selectionFilter({ series, films })

  return (
    <BrowseContainer slides={slides} />
  )
}

export default Browse