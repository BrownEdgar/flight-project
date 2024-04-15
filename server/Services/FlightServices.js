class FlightServices {
  constructor(models) {
    this.models = models;
  }
  async saveFlight(body) {
    console.log(body);
    const flight = await this.models.flight.create({ ...body });
    return flight;
  }
}

module.exports = FlightServices;
