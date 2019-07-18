/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       first_name:
 *         type: string
 *       last_name:
 *         type: integer
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *       resetPasswordToken:
 *         type: string
 *       resetPasswordExpires:
 *         type: string
 *         format: date-time
 *       required:
 *         - email
 *         - username
 *         - password
 */

module.exports = {
  id: {
    type: 'integer'
  },
  first_name: {
    type: 'string'
  },
  email: {
    type: 'string'
  },
  username: {
    type: 'string'
  },
  password: {
    type: 'string'
  }
};
