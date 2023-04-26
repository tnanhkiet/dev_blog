export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `
    query MyQuery {
        repository(name: "dev_blog", owner: "tnanhkiet") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
                nodes {
                    title
                    url
                    bodyHTML
                    bodyText
                    createdAt
                    lastEditedAt
                    number
                    author {
                        login
                        url
                        avatarUrl
                    }
                    labels(first: 100) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
  `
}

// Single post
export function discussionDetailGql(postId: number | undefined) {
    return `
        query MyQuery {
            repository(name: "dev_blog", owner: "tnanhkiet") {
                discussion(number: ${postId}) {
                    title
                    bodyHTML
                    createdAt
                    author {
                        login
                        url
                        avatarUrl
                    }
                }
            }
        }
    `
}