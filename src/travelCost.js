class TravelCost {
  static calculateCost(numTravelers, destination, tripType) {
    let baseCost = 0;

    if (destination === "Paris") {
      baseCost = 250;
    } else if (destination === "Tokyo") {
      baseCost = 450;
    } else if (destination === "Cairo") {
      baseCost = 300;
    } else {
      throw new Error("INVALID DESTINATION");
    }

    let multiplier = 0;

    if (tripType.toLowerCase() === "one-way") {
      multiplier = 1;
    } else if (tripType.toLowerCase() === "round") {
      multiplier = 2;
    } else {
      throw new Error("INVALID TRIP TYPE");
    }

    return baseCost * multiplier * numTravelers;
  }
}

module.exports = TravelCost;
