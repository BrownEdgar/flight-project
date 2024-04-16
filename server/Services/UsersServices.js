class UsersServices {
  constructor(models) {
    this.models = models
  }

  async saveUsers(body) {
    const users = new this.models.locals.users.create({ ...body });
    return users;
  }

  async getAllUsers() {
    const users = await this.models.users.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  }

}


module.exports = UsersServices