// Step 1: Import React
import { Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import * as React from 'react'
import NameBlock from '../components/NameBlock'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Text as="h1">Welcome to my Gatsby site!</Text>
      <Link to="/about" >About page</Link>
      <Text as="h2">I'm making this by following the Gatsby Tutorial.</Text>
      <NameBlock />
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage