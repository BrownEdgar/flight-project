const {Errors,ErrorsMessages} = require("../Errors/Errors")


class FlightController{

  async getAllFlight(req, res) {
    try {
      const flight = await req.app.locals.services.flight.getAllFlight();
      res.status(200).json(flight);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)
    }
  }

  async saveFlight(req, res) {
    const {cityId,companyId} = res.locals
    const { body } = req;
    const data = Object.assign(body,{city_from:cityId.id,company:companyId.id})
    try {
      const flight = await req.app.locals.services.flight.saveFlight(data);
      res.status(201).json(flight);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)

    }
  }
}


module.exports = FlightController