const cardContainer = document.getElementById("card-container");
const filter = document.querySelector(".filter");
const count = document.getElementById("count");
const resetButton = document.querySelector('button[type="reset"]');

// List of cars and all details
const usedCars = [
  {
    //image: "./img/carimg.png",//
    image: "./img/camry.jfif",
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: "$18,000",
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    // //image: "./img/carimg.png",//
    image: "./img/civic.jfif",
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: "$14,000",
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/fusion.jfif",
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: "$16,000",
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/altima.jfif",
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: "$17,000",
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/malibu.jfif",
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: "$12,000",
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/passat.jfif",
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: "$15,000",
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/elantra.jfif",
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: "$16,000",
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/outback.jfif",
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: "$14,000",
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/cx5.jfif",
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: "$19,000",
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/kia.jfif",
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: "$17,000",
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/dodge.jfif",
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: "$24,000",
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/XT5.jfif",
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: "$32,000",
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/fpace.jfif",
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: "$38,000",
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/tesla.jfif",
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: "$55,000",
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/porshe.jfif",
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: "$68,000",
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/lexux.jfif",
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: "$26,000",
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/bmw.jfif",
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: "$27,000",
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/camry.jfif",
    year: 2017,
    make: "Toyota",
    model: "Corolla",
    mileage: 55000,
    price: "$22,000",
    color: "Green",
    gasMileage: "43 mpg city, 43 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/civic.jfif",
    year: 2016,
    make: "Honda",
    model: "CR-V",
    mileage: 47000,
    price: "$22,000",
    color: "Red",
    gasMileage: "26 mpg city, 37 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/fusion.jfif",
    year: 2017,
    make: "Ford",
    model: "F-150",
    mileage: 52000,
    price: "$56,000",
    color: "Silver",
    gasMileage: "20 mpg city, 23 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/altima.jfif",
    year: 2020,
    make: "Nissan",
    model: "Altima",
    mileage: 20000,
    price: "$30,000",
    color: "Black",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    year: 2015,
    image: "./img/malibu.jfif",
    make: "Chevrolet",
    model: "Trailblaze",
    mileage: 30000,
    price: "$20,000",
    color: "Red",
    gasMileage: "23 mpg city, 32 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    year: 2016,
    image: "./img/passat.jfif",
    make: "Volkswagen",
    model: "Jetta",
    mileage: 45000,
    price: "$20,000",
    color: "Silver",
    gasMileage: "29 mpg city, 42 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/elantra.jfif",
    year: 2018,
    make: "Hyundai",
    model: "SanteFe",
    mileage: 40000,
    price: "$22,000",
    color: "Silver",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/outback.jfif",
    year: 2014,
    make: "Subaru",
    model: "WRX",
    mileage: 39000,
    price: "$43,000",
    color: "Blue",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/cx5.jfif",
    year: 2017,
    make: "Mazda",
    model: "Miata",
    mileage: 20000,
    price: "$69,000",
    color: "Red",
    gasMileage: "20 mpg city, 29 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/kia.jfif",
    year: 2018,
    make: "Kia",
    model: "Soul",
    mileage: 28000,
    price: "$16,000",
    color: "Green",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/dodge.jfif",
    year: 2020,
    make: "Dodge",
    model: "Charger",
    mileage: 30000,
    price: "$24,000",
    color: "Silver",
    gasMileage: "29 mpg city, 33 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/XT5.jfif",
    year: 2015,
    make: "Cadillac",
    model: "Escalade",
    mileage: 28000,
    price: "$50,000",
    color: "Black",
    gasMileage: "19 mpg city, 24 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/fpace.jfif",
    year: 2018,
    make: "Jaguar",
    model: "XK",
    mileage: 40000,
    price: "$40,000",
    color: "Black",
    gasMileage: "18 mpg city, 20 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/tesla.jfif",
    year: 2019,
    make: "Tesla",
    model: "Model Y",
    mileage: 10000,
    price: "$70,000",
    color: "White",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/porshe.jfif",
    year: 2014,
    make: "Porsche",
    model: "911",
    mileage: 22000,
    price: "$68,000",
    color: "White",
    gasMileage: "19 mpg city, 23 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/lexux.jfif",
    year: 2019,
    make: "Lexus",
    model: "GX",
    mileage: 70000,
    price: "$44,000",
    color: "Red",
    gasMileage: "26 mpg city, 30 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/bmw.jfif",
    year: 2015,
    make: "BMW",
    model: "X Series",
    mileage: 65000,
    price: "$70,000",
    color: "Blue",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
  {
    //image: "./img/carimg.png",//
    image: "./img/camry.jfif",
    year: 2014,
    make: "Toyota",
    model: "4-Runner",
    mileage: 102030,
    price: "$8,000",
    color: "Gray",
    gasMileage: "23 mpg city, 26 mpg highway",
  },
];

let carFilter = usedCars;
showCar(carFilter);

//Adding the car details using DOM Manipulation
function showCar(carFilter) {
  count.innerText = carFilter.length;
  cardContainer.innerHTML = "";
  carFilter.forEach((item) => {
    let newItem = document.createElement("div");
    newItem.classList.add("item");

    let newImage = new Image();
    newImage.src = item.image;
    newItem.appendChild(newImage);

    let labels = [
      "Year: ",
      "Make: ",
      "Model: ",
      "Mileage: ",
      "Price: ",
      "Color: ",
      "Gas Mileage: ",
    ];
    let values = [
      item.year,
      item.make,
      item.model,
      item.mileage,
      item.price,
      item.color,
      item.gasMileage,
    ];

    for (let i = 0; i < labels.length; i++) {
      let labelElement = document.createElement("div");
      labelElement.classList.add("label");
      labelElement.innerText = labels[i];

      let valueElement = document.createElement("div");
      valueElement.classList.add("value");
      valueElement.innerText = values[i];

      newItem.appendChild(labelElement);
      newItem.appendChild(valueElement);
    }

    cardContainer.appendChild(newItem);
  });

  // Check if count is zero so that it displays an alert
  if (carFilter.length === 0) {
    alert("No results found. Reset Filters and Try Again");
  }
}

filter.addEventListener("submit", (e) => {
  e.preventDefault();

  let valueFilter = e.target.elements;
  carFilter = usedCars.filter((item) => {
    let selectedMakes = Array.from(valueFilter.make.selectedOptions).map(
      (option) => option.value
    );
    let selectedColors = Array.from(valueFilter.color.selectedOptions).map(
      (option) => option.value
    );
    // Filter Make

    if (selectedMakes.length > 0 && !selectedMakes.includes(item.make)) {
      return false;
    }
    // Filter Color
    if (selectedColors.length > 0 && !selectedColors.includes(item.color)) {
      return false;
    }
    //Filter Min year
    if (valueFilter.minYear.value != "") {
      if (item.year < parseInt(valueFilter.minYear.value)) {
        return false;
      }
    }
    //Filter Max price
    if (valueFilter.maxYear.value != "") {
      if (item.year > parseInt(valueFilter.maxYear.value)) {
        return false;
      }
    }
    // Filter mileage
    if (valueFilter.maxMileage.value != "") {
      if (item.mileage > parseInt(valueFilter.maxMileage.value)) {
        return false;
      }
    }
    //Filter Min price
    if (valueFilter.minPrice.value != "") {
      if (
        parseInt(item.price.slice(1).replace(/,/g, "")) <
        parseInt(valueFilter.minPrice.value)
      ) {
        return false;
      }
    }
    //Filter Max price
    if (valueFilter.maxPrice.value != "") {
      if (
        parseInt(item.price.slice(1).replace(/,/g, "")) >
        parseInt(valueFilter.maxPrice.value)
      ) {
        return false;
      }
    }
    return true;
  });
  showCar(carFilter);
});

resetButton.addEventListener("click", () => {
  filter.reset(); // Reset the form
  carFilter = usedCars; // Reset the filtered data to the original dataset
  showCar(carFilter); // Update the displayed cars
});
