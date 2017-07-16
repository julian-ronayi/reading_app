const Book = require('../../db/models/Book')
// Types
const BookType = require('../types/BookType')
const BookInputType = require('../types/BookInputType')
// GraphQL
const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const createBook = {
  createBook: {
    type: BookType,
    args: {
      book: {type: BookInputType, description: 'Book input object'}
    },
    description: 'Creates new book in the database',
    resolve: (source, args) => {
      return new Promise((resolve, reject) => {
        const {book} = args

        Book.create(book, (err, newBook) => {
          if (err) reject(err)
          else resolve(newBook)
        })
      })
    }
  }
}

module.exports = createBook
