class CityServices {
  constructor(models) {
    this.models = models;
  }

  async getAllCities(body) {
    const city = await this.models.city.findAll();
    return city;
  }

  async saveCity(body) {
    console.log(body)
    const city = await this.models.city.create({ ...body });
    return city;
  }

  async getCityByName(code) {
    const city = await this.models.city.findOne({
      where: {
        code,
      },
      attributes: ['id']
    });

    return city.dataValues;
  }
}

module.exports = CityServices;
