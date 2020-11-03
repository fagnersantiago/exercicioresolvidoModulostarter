class listCar {
  constructor() {
    this.listCarModel = [
      {
        name: "fusca",
        year: "1960",
      },
      {
        name: "celta",
        year: "2014",
      },
      {
        name: "corola",
        year: "2020",
      },
      {
        name: "jeta",
        year: "2020",
      },
    ];
  }

  // Melthod bellow to get a car by year
  getCarPerYears() {
    for (let value of this.listCarModel) {
      if (value.year === "2020") {
        console.log(value.name, value.year);
      }
    }
  }
}

// The class bellow add an new car
class AddCar extends listCar {
  constructor() {
    super();
    this.listCarModel.push({
      name: "HB20",
      year: "2018",
    });

    console.log(this.listCarModel);
  }
}

const showCarList = new AddCar();

const result = new listCar();

result.getCarPerYears();
