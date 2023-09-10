class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.rentalDates = document.getElementById("rentalDates");
    this.rentalTimes = document.getElementById("rentalTimes");
    this.passangersInput = document.getElementById("passangersInput");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = async () => {
    this.clear();
    const tanggal = this.rentalDates.value;
    const waktu = this.rentalTimes.value;
    const penumpang = this.passangersInput.value;

    const dateAndTime = new Date(`${tanggal} ${waktu}`);

    const condition = (i) => i.available && i.capacity >= penumpang && new Date(i.availableAt).getTime() >= dateAndTime;
    const cars = await Binar.listCars(condition);

    if (cars.length === 0) {
      const node = document.createElement("div");
      node.innerHTML = '<div class="notFound"><p>Hasil tidak ditemukan</p></div>';
      this.carContainerElement.appendChild(node);
      return;
    }

    Car.init(cars);

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
