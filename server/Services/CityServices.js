class CityServices {
  constructor(models) {
    this.models = models;
  }

  async getAllCities() {
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
  async deleteCity(id) {
    console.log(1111)
    const city = await this.models.city.destroy({ where: { id } })
    return true
  }

  async changeCity(body, params) {
    const city = await this.models.city.update(
      { name: body.name },
      {
        where: {
          id: params.id,
        },
      },
    );

    return city.dataValues;
  }
}

module.exports = CityServices;
