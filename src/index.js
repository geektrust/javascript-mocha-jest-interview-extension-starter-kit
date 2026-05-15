const TravelCost = require("./travelCost");

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    throw new Error("No command line arguments passed");
  }

  const input = args[0];
  handle(input);
}

function handle(input) {
  const inputList = input.trim().split(" ");

  const numTravelers = parseInt(inputList[0]);
  const destination = inputList[1];
  const tripType = inputList[2];

  try {
    const totalCost = TravelCost.calculateCost(
      numTravelers,
      destination,
      tripType,
    );

    console.log("Total Flight Cost: " + totalCost);
  } catch (error) {
    console.log(error.message);
  }
}

main();

module.exports = { handle };
