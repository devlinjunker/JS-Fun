# Exploring Swagger documentation

Exploring Swagger UI with OpenAPI example.

## Dependencies:
  - Node v8
  - Babel v7
  - Webpack v4


## Development

Start the webpack dev server and open localhost:8080 to swagger-ui with `npm run dev-server`

Update esdoc documentation with `npm run doc`
  - If you do this, you will need to update the esdoc html page's so the header contains a link to the Swagger UI:
  `<a href="swagger">API</a>`
  - Make sure you update this in `docs/class/src` html files alsos



## TODO
  - [..] Combine with esdoc
    - [ ] Plugin to build API page and add to header
      - Config to locate openapi file then import to `docs/swagger`
    
