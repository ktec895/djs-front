import { gql } from 'apollo-boost'

export default gql`
    extend type Query {
        sidebarOpen: Boolean
        showId: ID
    }
`