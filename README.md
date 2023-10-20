# typescript-crud

# How to start application
1. yarn install
2. your local environment have to a database that application can connect it (currently, i'm using POSTGRES)
3. you have to create a <b>.env</b> file, you can clonne .env_example into repository and then config base on your database connection
4. yarn start-dev

# Guide to use application
1. Use to postman or curl to run application
    - Path API: /api/v1/
    - List endpoint:
        1. Endpoint: article
        + Description: Create new article
        + Method: <b>POST</b>
        + Request body:
            • name
            • decription
            => EX: 
                    {
                        "name": "top trending",
                        "description": "new technique"
                    }
        2. Endpoint: article
        + Description: Get articles
        + Method: <b>GET</b>
        + Request body:
            • filters
                + name (in case that want to filter , you need to set value. in case no need filter you can set is empty)
            => EX: 
                    {
                        "filters": {
                            "name": "google"
                        }
                    }

        3. Endpoint: article/{id}
        + Description: Get article detail
        + Method: <b>GET</b>
        + Request body: NONE

        4. Endpoint: article/{id}
        + Description: Update article
        + Method: <b>PATCH</b>
        + Request body:
            • name
            • decription
            => EX: 
                    {
                        "name": "top trending",
                        "description": "new technique"
                    }

        5. Endpoint: article/{id}
        + Description: Delete article
        + Method: <b>DELETE</b>
        + Request body: NONE