class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="cars__container">
    <div class="cars__container-img">
      <img src="${this.image}" alt="${this.manufacture}">
    </div>
    <div class="cars__container-desc">
      <p class="second__txt">${this.manufacture} ${this.model}</p>
      <p class="second__txt-bold fw-bolder">Rp ${this.rentPerDay} / hari</p>
      <p class="second__txt">${this.description}</p>
    </div>
    <ul class="cars__container-spec">
      <li>
        <img src="./icon/fi_users.png" alt="${this.capacity}">
        <p class="second__txt">${this.capacity} orang</p>
      </li>
      <li>
        <img src="./icon/fi_settings.png" alt="${this.transmission}">
        <p class="second__txt">${this.transmission}</p>
      </li>
      <li>
        <img src="./icon/fi_calendar.png" alt="${this.year}">
        <p class="second__txt">Tahun ${this.year}</p>
      </li>
    </ul>
    <div class="cars__container-btn">
      <button class="btn nav__btn" type="submit">Pilih Mobil</button>
    </div>
  </div>
    `;
  }
}
