/* eslint-disable class-methods-use-this */

class UserController {
  getUser(req, res) {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      user: {
        id: '1',
        name: 'Sean Urgel',
      },
    })
  }
}

const userController = new UserController()

module.exports = userController
