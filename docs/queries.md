---
layout: page
title: Queries
permalink: /queries/
---

## Query example

To is example of query which extract data from Strapi to frontend

```

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug,
          name,
          movies {
            data {
              attributes {
                slug
                title,
                year,
                description,
                thumbnail,
                categories{
                  data{
                    attributes{name}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
```


[Components](https://vkoutsky.github.io/vk/components)


