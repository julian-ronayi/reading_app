const CategoryType = require('../types/CategoryType')
const Category = require('../../db/models/Category')
const {GraphQLString, GraphQLObjectType} = require('graphql')

const deleteCategory = {
  deleteCategory: {
    type: new GraphQLObjectType({
      name: 'Message',
      fields: {
        message: { type: GraphQLString }
      }
    }),
    description: 'Deletes category form database by Id',
    args: {
      id: {type: GraphQLString, description: 'Id of category to delete'}
    },
    resolve: (source, args) => {
      return new Promise((resolve, reject) => {
        Category.deleteOne({_id: args.id}, (err) => {
          if (err) reject(err)
          else resolve({message: 'success'})
        })
      })
    }
  }
}

module.exports = deleteCategory
