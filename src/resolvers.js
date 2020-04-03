import { gql } from 'apollo-boost'

export default {
    Mutation: {
        toggleOpen: (_, vars, { cache }) => {
            const data = cache.readQuery({ query: gql`
                {
                    sidebarOpen @client
                }
            `})

            cache.writeData({ data: { sidebarOpen: !data.sidebarOpen}})
        },
        setShow: (_, {showId}, { cache }) => {
            cache.writeData({ data: { showId }})
        }
    }
}