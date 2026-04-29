import {writeFileSync} from 'node:fs'

writeFileSync('openapi.json', JSON.stringify({
  "openapi": "3.0.0",
  "info": {
    "title": "Simple User API",
    "version": "1.0.0",
    "description": "A basic API to retrieve a list of users."
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "A JSON array of user names",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "number"
                  }
                },
                "example": [1, 2, 3]
              }
            }
          }
        }
      }
    }
  }
}
))
console.log('updated')