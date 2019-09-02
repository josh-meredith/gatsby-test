exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
        type wordpress__POST implements Node {
            yoast_meta: wordpress__POSTYoast_meta
        }
        type wordpress__POSTYoast_meta implements Node {
            content: String
        }
    `
  createTypes(typeDefs)
}
