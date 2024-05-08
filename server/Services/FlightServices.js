class FlightServices {
  constructor(models) {
    this.models = models;
  }

  async saveFlight(body) {
    console.log(body);
    const flight = await this.models.flight.create({ ...body });
    return flight;
  }

  async getFlightByCompany(company) {
    const flight = await this.models.flight.findOne({
      where: {
        company: company
      }
    });

    return flight;
  }
}

module.exports = FlightServices;
