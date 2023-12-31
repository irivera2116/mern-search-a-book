import gql from 'graphql-tag';

export const GET_ME = gql`
query me {
    me{
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            link
            image
            description
            title
        }
    }
}
`;
