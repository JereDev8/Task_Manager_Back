import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager API',
            version: '1.0.0',
            description: 'API for managing Tasks',
            contact: {
                name: 'Jeremias Quinteros'
            },
            servers: [
                {
                    url: 'http://localhost:5000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);
export default specs;