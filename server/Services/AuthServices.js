class AuthServices {
  constructor(models) {
    this.models = models;
  }

  async signUp(body) {
    console.log(body);
    const user = new this.models.users({ ...body });
    await user.save();
    return user;
  }

  async signIn(body) {
    const user = await this.models.users.login({ ...body });
    return user;
  }
}

module.exports = AuthServices;
