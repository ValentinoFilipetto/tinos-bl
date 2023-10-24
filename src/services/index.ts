import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { parse } from "graphql";
import { gql, request } from "graphql-request";
import { postsConnection } from "../types/types";

const graphqlAPI = process.env.PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query: TypedDocumentNode<postsConnection> = parse(gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `);

  if (graphqlAPI) {
    const result = await request(graphqlAPI, query);
    return result.edges;
  }
};
