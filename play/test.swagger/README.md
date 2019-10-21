# Exploring Swagger documentation

Exploring Swagger UI with OpenAPI example.

Swagger UI files are in `docs/swagger/`

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


## Notes

- SWAY Connect API for Parsing OpenAPI https://github.com/apigee-127/sway/blob/master/docs/README.md
- OpenAPI/Swagger example and docs: https://swagger.io/docs/specification/basic-structure/

- Build HTML Plugin: https://github.com/esdoc/esdoc-plugins/blob/master/esdoc-publish-html-plugin/src/Plugin.js

**TODO:**
  - [..] Combine with esdoc
    - [x] ~~Plugin to build~~
      - Config to locate openapi file then import to `docs/swagger`
    - [ ] Template with API page and header link to API
      - https://github.com/esdoc/esdoc-plugins/tree/master/esdoc-publish-html-plugin/src/Builder/template
