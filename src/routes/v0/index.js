const express = require('express');
const User = require('../../models/user');

const router = express.Router();

/**
* @swagger
* /loginUser:
*   post:
*     tags:
*       - Users
*     name: Login
*     summary: Logs in a user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*             username:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - username
*           - password
*     responses:
*       200:
*         description: User found and logged in successfully
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Username and password don't match
*/
router.post('/loginUser', (req, res, next) => {
  res.json({ message: 'HI', User });
});

module.exports = router;
