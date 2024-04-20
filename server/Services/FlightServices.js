class FlightServices {
  constructor(models) {
    this.models = models;
  }

  async getAllFlight() {
    const flight = await this.models.flight.findAll();
    return flight;
  }

  async saveFlight(body) {
    console.log(body);
    const flight = await this.models.flight.create({ ...body });
    return flight;
  }
}

module.exports = FlightServices;
