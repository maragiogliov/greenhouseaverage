const countryFactors = {
    Denmark: {
      flag_icon:'🇩🇰',
      electricity_factor: 0.1908,
      naturalGasUnits: {
        therms: {naturalGas_factor: 1},
        kWh: {naturalGas_factor: 0.18},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
        litres: {heatingOil_factor: 2.35},
        metricTons: {heatingOil_factor: 1000},
        USGallons: {heatingOil_factor: 42}
      },
      coalUnits: {
        kWh: {coal_factor: 113},
        metricTons: {coal_factor: 132.35},
        x10kgBags: {coal_factor: 19900},
        x20kgBags: {coal_factor: 142},
        x25kgBags: {coal_factor: 124},
        x50kgBags: {coal_factor: 1242}
      },
      LPGUnits: {
        kWh: {LPG_factor: 1},
        litres: {LPG_factor: 2.35},
        therms: {LPG_factor: 1000},
        USGallons: {LPG_factor: 42}
      },
      propaneUnits: {
        litres: {propane_factor: 2.35},
        gallons: {propane_factor: 1},
      },
      woodenPelletsUnits: {
        metricTons: {woodenPellets_factor: 0.10},
      },
      foodDrinksRange: {
        year: {foodDrinks_factor: 10},
        month: {foodDrinks_factor: 20},
        week: {foodDrinks_factor: 30}
      },
      pharmaceuticalsRange: {
        year: {pharmaceuticals_factor: 1},
        month: {pharmaceuticals_factor: 2},
        week: {pharmaceuticals_factor: 3}
      },
      textilesRange: {
        year: {textiles_factor: 1},
        month: {textiles_factor: 2},
        week: {textiles_factor: 3}
      },
      paperRange: {
        year: {paper_factor: 1},
        month: {paper_factor: 2},
        week: {paper_factor: 3}
      },
      electronicsRange: {
        year: {electronics_factor: 1},
        month: {electronics_factor: 2},
        week: {electronics_factor: 3}
      },
      furnitureRange: {
        year: {furniture_factor: 10},
        month: {furniture_factor: 20},
        week: {furniture_factor: 30}
      },
      hotelsRange: {
        year: {hotels_factor: 10},
        month: {hotels_factor: 20},
        week: {hotels_factor: 30}
      },
      busUnits: {
        km: {bus_factor: 103},
        miles: {bus_factor: 230},
      },
      coachUnits: {
        km: {coach_factor: 140},
        miles: {coach_factor: 240},
      },
      localTrainUnits: {
        km: {localTrain_factor: 106},
        miles: {localTrain_factor: 260},
      },
      longTrainUnits: {
        km: {longTrain_factor: 180},
        miles: {longTrain_factor: 280},
      },
      tramUnits: {
        km: {tram_factor: 10},
        miles: {tram_factor: 20},
      },
      subwayUnits: {
        km: {subway_factor: 10},
        miles: {subway_factor: 20},
      },
      taxiUnits: {
        km: {taxi_factor: 10},
        miles: {taxi_factor: 20},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 90},
        miles: {motorbikeMileage_factor: 88.89},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 10,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 20,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 30,
          description: " motorbike over 500cc"
        },
      },
      motorbikeEfficiencyUnits: {
        gkm: {motorbikeEfficiency_factor: 10},
        L100km: {motorbikeEfficiency_factor: 20},
        mpguk: {motorbikeEfficiency_factor: 30},
        mpgus: {motorbikeEfficiency_factor: 40},
      },
      carMileageUnits: {
        km: {car_mileage_factor: 10},
        miles: {car_mileage_factor: 20},
      },
      carType: {
        electric: {
          carType_factor: 10,
          description: "average battery"
        },
        hybrid: {
          carType_factor: 20,
          description: "(full hybrid), average battery"
        },
        petrol: {
          carType_factor: 30,
          description: ""
        },
        diesel: {
          carType_factor: 40,
          description: " average battery"
        },
      },
      carSize: {
        small: {car_size_factor: 10},
        medium: {car_size_factor: 20},
        large: {car_size_factor: 20},
      },
    },
    Finland: {
      flag_icon:'🇫🇮',
      electricity_factor: 0.2108,
      naturalGasUnits: {
        therms: {naturalGas_factor: 4},
        kWh: {naturalGas_factor: 5},
        Euro: {naturalGas_factor: 6}
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 12},
        litres: {heatingOil_factor: 22.35},
        metricTons: {heatingOil_factor: 21000},
        USGallons: {heatingOil_factor: 242}
      },
      coalUnits: {
        kWh: {coal_factor: 931},
        metricTons: {coal_factor: 1552.35},
        x10kgBags: {coal_factor: 1700},
        x20kgBags: {coal_factor: 177},
        x25kgBags: {coal_factor: 1442},
        x50kgBags: {coal_factor: 3452}
      },
      LPGUnits: {
        kWh: {LPG_factor: 12},
        litres: {LPG_factor: 22.35},
        therms: {LPG_factor: 12000},
        USGallons: {LPG_factor: 422}
      },
      propaneUnits: {
        litres: {propane_factor: 6.35},
        gallons: {propane_factor: 10},
      },
      woodenPelletsUnits: {
        metricTons: {woodenPellets_factor: 0.20},
      },
      foodDrinksRange: {
        year: {foodDrinks_factor: 50},
        month: {foodDrinks_factor: 60},
        week: {foodDrinks_factor: 70}
      },
      pharmaceuticalsRange: {
        year: {pharmaceuticals_factor: 1},
        month: {pharmaceuticals_factor: 2},
        week: {pharmaceuticals_factor: 3}
      },
      textilesRange: {
        year: {textiles_factor: 1},
        month: {textiles_factor: 2},
        week: {textiles_factor: 3}
      },
      paperRange: {
        year: {paper_factor: 1},
        month: {paper_factor: 2},
        week: {paper_factor: 3}
      },
      electronicsRange: {
        year: {electronics_factor: 1},
        month: {electronics_factor: 2},
        week: {electronics_factor: 3}
      },
      furnitureRange: {
        year: {furniture_factor: 1},
        month: {furniture_factor: 2},
        week: {furniture_factor: 3}
      },
      hotelsRange: {
        year: {hotels_factor: 10},
        month: {hotels_factor: 20},
        week: {hotels_factor: 30}
      },
      busUnits: {
        km: {bus_factor: 15},
        miles: {bus_factor: 200},
      },
      coachUnits: {
        km: {coach_factor: 10},
        miles: {coach_factor: 20},
      },
      localTrainUnits: {
        km: {localTrain_factor: 10},
        miles: {localTrain_factor: 20},
      },
      longTrainUnits: {
        km: {longTrain_factor: 10},
        miles: {longTrain_factor: 20},
      },
      tramUnits: {
        km: {tram_factor: 10},
        miles: {tram_factor: 20},
      },
      subwayUnits: {
        km: {subway_factor: 10},
        miles: {subway_factor: 20},
      },
      taxiUnits: {
        km: {taxi_factor: 10},
        miles: {taxi_factor: 20},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
        miles: {motorbikeMileage_factor: 28},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 10,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 20,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 30,
          description: " motorbike over 500cc"
        },
      },
      motorbikeEfficiencyUnits: {
        gkm: {motorbikeEfficiency_factor: 10},
        L100km: {motorbikeEfficiency_factor: 20},
        mpguk: {motorbikeEfficiency_factor: 30},
        mpgus: {motorbikeEfficiency_factor: 40},
      },
      carMileageUnits: {
        km: {car_mileage_factor: 10},
        miles: {car_mileage_factor: 20},
      },
      carType: {
        electric: {
          carType_factor: 10,
          description: "average battery"
        },
        hybrid: {
          carType_factor: 20,
          description: "(full hybrid), average battery"
        },
        petrol: {
          carType_factor: 30,
          description: " average battery"
        },
        diesel: {
          carType_factor: 40,
          description: " average battery"
        },
      },
      carSize: {
        small: {car_size_factor: 10},
        medium: {car_size_factor: 20},
        large: {car_size_factor: 20},
      },
    },
    Iceland: {
      flag_icon:'🇮🇸',
      electricity_factor: 0.1708,
      naturalGasUnits: {
        therms: {naturalGas_factor: 7},
        kWh: {naturalGas_factor: 8},
        krone: {naturalGas_factor: 9}
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 31},
        litres: {heatingOil_factor: 32.35},
        metricTons: {heatingOil_factor: 31000},
        USGallons: {heatingOil_factor: 342}
      },
      coalUnits: {
        kWh: {coal_factor: 1431},
        metricTons: {coal_factor: 12555},
        x10kgBags: {coal_factor: 1120},
        x20kgBags: {coal_factor: 10042},
        x25kgBags: {coal_factor: 14242},
        x50kgBags: {coal_factor: 42}
      },
      LPGUnits: {
        kWh: {LPG_factor: 3},
        litres: {LPG_factor: 23.35},
        therms: {LPG_factor: 13000},
        USGallons: {LPG_factor: 432}
      },
      propaneUnits: {
        litres: {propane_factor: 3.35},
        gallons: {propane_factor: 4},
      },
      woodenPelletsUnits: {
        metricTons: {woodenPellets_factor: 0.30},
      },
      foodDrinksRange: {
        year: {foodDrinks_factor: 1},
        month: {foodDrinks_factor: 2},
        week: {foodDrinks_factor: 3}
      },
      pharmaceuticalsRange: {
        year: {pharmaceuticals_factor: 1},
        month: {pharmaceuticals_factor: 2},
        week: {pharmaceuticals_factor: 3}
      },
      textilesRange: {
        year: {textiles_factor: 1},
        month: {textiles_factor: 2},
        week: {textiles_factor: 3}
      },
      paperRange: {
        year: {paper_factor: 1},
        month: {paper_factor: 2},
        week: {paper_factor: 3}
      },
      electronicsRange: {
        year: {electronics_factor: 1},
        month: {electronics_factor: 2},
        week: {electronics_factor: 3}
      },
      furnitureRange: {
        year: {furniture_factor: 1},
        month: {furniture_factor: 2},
        week: {furniture_factor: 3}
      },
      hotelsRange: {
        year: {hotels_factor: 10},
        month: {hotels_factor: 20},
        week: {hotels_factor: 30}
      },
      busUnits: {
        km: {bus_factor: 10},
        miles: {bus_factor: 20},
      },
      coachUnits: {
        km: {coach_factor: 10},
        miles: {coach_factor: 20},
      },
      localTrainUnits: {
        km: {localTrain_factor: 10},
        miles: {localTrain_factor: 20},
      },
      longTrainUnits: {
        km: {longTrain_factor: 10},
        miles: {longTrain_factor: 20},
      },
      tramUnits: {
        km: {tram_factor: 10},
        miles: {tram_factor: 20},
      },
      subwayUnits: {
        km: {subway_factor: 10},
        miles: {subway_factor: 20},
      },
      taxiUnits: {
        km: {taxi_factor: 10},
        miles: {taxi_factor: 20},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 9},
        miles: {motorbikeMileage_factor: 88.89},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 10,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 20,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 30,
          description: " motorbike over 500cc"
        },
      },
      motorbikeEfficiencyUnits: {
        gkm: {motorbikeEfficiency_factor: 10},
        L100km: {motorbikeEfficiency_factor: 20},
        mpguk: {motorbikeEfficiency_factor: 30},
        mpgus: {motorbikeEfficiency_factor: 40},
      },
      carMileageUnits: {
        km: {car_mileage_factor: 10},
        miles: {car_mileage_factor: 20},
      },
      carType: {
        electric: {
          carType_factor: 10,
          description: "average battery"
        },
        hybrid: {
          carType_factor: 20,
          description: "(full hybrid), average battery"
        },
        petrol: {
          carType_factor: 30,
          description: " average battery"
        },
        diesel: {
          carType_factor: 30,
          description: " average battery"
        },
      },
      carSize: {
        small: {car_size_factor: 10},
        medium: {car_size_factor: 20},
        large: {car_size_factor: 20},
      },
    },
    Norway: {
      flag_icon:'🇳🇴',
      electricity_factor: 0.1508,
      naturalGasUnits: {
        therms: {naturalGas_factor: 10},
        kWh: {naturalGas_factor: 11},
        krone: {naturalGas_factor: 12}
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 14},
        litres: {heatingOil_factor: 42.35},
        metricTons: {heatingOil_factor: 41000},
        USGallons: {heatingOil_factor: 442}
      },
      coalUnits: {
        kWh: {coal_factor: 31},
        metricTons: {coal_factor: 1.35},
        x10kgBags: {coal_factor: 100},
        x20kgBags: {coal_factor: 14222},
        x25kgBags: {coal_factor: 124772},
        x50kgBags: {coal_factor: 13242}
      },
      LPGUnits: {
        kWh: {LPG_factor: 34},
        litres: {LPG_factor: 243.35},
        therms: {LPG_factor: 134000},
        USGallons: {LPG_factor: 4432}
      },
      propaneUnits: {
        litres: {propane_factor: 24.35},
        gallons: {propane_factor: 51},
      },
      woodenPelletsUnits: {
        metricTons: {woodenPellets_factor: 0.40},
      },
      foodDrinksRange: {
        year: {foodDrinks_factor: 1},
        month: {foodDrinks_factor: 2},
        week: {foodDrinks_factor: 3}
      },
      pharmaceuticalsRange: {
        year: {pharmaceuticals_factor: 1},
        month: {pharmaceuticals_factor: 2},
        week: {pharmaceuticals_factor: 3}
      },
      textilesRange: {
        year: {textiles_factor: 1},
        month: {textiles_factor: 2},
        week: {textiles_factor: 3}
      },
      paperRange: {
        year: {paper_factor: 1},
        month: {paper_factor: 2},
        week: {paper_factor: 3}
      },
      electronicsRange: {
        year: {electronics_factor: 1},
        month: {electronics_factor: 2},
        week: {electronics_factor: 3}
      },
      furnitureRange: {
        year: {furniture_factor: 1},
        month: {furniture_factor: 2},
        week: {furniture_factor: 3}
      },
      hotelsRange: {
        year: {hotels_factor: 10},
        month: {hotels_factor: 20},
        week: {hotels_factor: 30}
      },
      busUnits: {
        km: {bus_factor: 10},
        miles: {bus_factor: 20},
      },
      coachUnits: {
        km: {coach_factor: 10},
        miles: {coach_factor: 20},
      },
      localTrainUnits: {
        km: {localTrain_factor: 10},
        miles: {localTrain_factor: 20},
      },
      longTrainUnits: {
        km: {longTrain_factor: 10},
        miles: {longTrain_factor: 20},
      },
      tramUnits: {
        km: {tram_factor: 10},
        miles: {tram_factor: 20},
      },
      subwayUnits: {
        km: {subway_factor: 10},
        miles: {subway_factor: 20},
      },
      taxiUnits: {
        km: {taxi_factor: 10},
        miles: {taxi_factor: 20},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 9},
        miles: {motorbikeMileage_factor: 88.89},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 10,
          description: "Small motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 20,
          description: "Medium motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 30,
          description: "large motorbike over 500cc"
        },
      },
      motorbikeEfficiencyUnits: {
        gkm: {motorbikeEfficiency_factor: 10},
        L100km: {motorbikeEfficiency_factor: 20},
        mpguk: {motorbikeEfficiency_factor: 30},
        mpgus: {motorbikeEfficiency_factor: 40},
      },
      carMileageUnits: {
        km: {car_mileage_factor: 10},
        miles: {car_mileage_factor: 20},
      },
      carType: {
        electric: {
          carType_factor: 10,
          description: "average battery"
        },
        hybrid: {
          carType_factor: 20,
          description: "(full hybrid), average battery"
        },
        petrol: {
          carType_factor: 30,
          description: " average battery"
        },
        diesel: {
          carType_factor: 30,
          description: " average battery"
        },
      },
      carSize: {
        small: {car_size_factor: 10},
        medium: {car_size_factor: 20},
        large: {car_size_factor: 20},
      },
    },
    Sweden: {
      flag_icon:'🇸🇪',
      electricity_factor: 0.2568,
      naturalGasUnits: {
        therms: {naturalGas_factor: 13},
        kWh: {naturalGas_factor: 14},
        krone: {naturalGas_factor: 15}
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 51},
        litres: {heatingOil_factor: 52.35},
        metricTons: {heatingOil_factor: 51000},
        USGallons: {heatingOil_factor: 452}
      },
       coalUnits: {
        kWh: {coal_factor: 3144},
        metricTons: {coal_factor: 8.435},
        x10kgBags: {coal_factor: 67},
        x20kgBags: {coal_factor: 492},
        x25kgBags: {coal_factor: 842},
        x50kgBags: {coal_factor: 9342}
      },
      LPGUnits: {
        kWh: {LPG_factor: 35},
        litres: {LPG_factor: 253.35},
        therms: {LPG_factor: 135000},
        USGallons: {LPG_factor: 4352}
      },
      propaneUnits: {
        litres: {propane_factor: 135},
        gallons: {propane_factor: 10},
      },
      woodenPelletsUnits: {
        metricTons: {woodenPellets_factor: 0.50},
      },
      foodDrinksRange: {
        year: {foodDrinks_factor: 1},
        month: {foodDrinks_factor: 2},
        week: {foodDrinks_factor: 3}
      },
      pharmaceuticalsRange: {
        year: {pharmaceuticals_factor: 1},
        month: {pharmaceuticals_factor: 2},
        week: {pharmaceuticals_factor: 3}
      },
      textilesRange: {
        year: {textiles_factor: 1},
        month: {textiles_factor: 2},
        week: {textiles_factor: 3}
      },
      paperRange: {
        year: {paper_factor: 1},
        month: {paper_factor: 2},
        week: {paper_factor: 3}
      },
      electronicsRange: {
        year: {electronics_factor: 1},
        month: {electronics_factor: 2},
        week: {electronics_factor: 3}
      },
      furnitureRange: {
        year: {furniture_factor: 1},
        month: {furniture_factor: 2},
        week: {furniture_factor: 3}
      },
      hotelsRange: {
        year: {hotels_factor: 10},
        month: {hotels_factor: 20},
        week: {hotels_factor: 30}
      },
      busUnits: {
        km: {bus_factor: 10},
        miles: {bus_factor: 20},
      },
      coachUnits: {
        km: {coach_factor: 10},
        miles: {coach_factor: 20},
      },
      localTrainUnits: {
        km: {localTrain_factor: 10},
        miles: {localTrain_factor: 20},
      },
      longTrainUnits: {
        km: {longTrain_factor: 10},
        miles: {longTrain_factor: 20},
      },
      tramUnits: {
        km: {tram_factor: 10},
        miles: {tram_factor: 20},
      },
      subwayUnits: {
        km: {subway_factor: 10},
        miles: {subway_factor: 20},
      },
      taxiUnits: {
        km: {taxi_factor: 10},
        miles: {taxi_factor: 20},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 9},
        miles: {motorbikeMileage_factor: 88.89},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 10,
          description: "Small motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 20,
          description: "Medium motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 30,
          description: "large motorbike over 500cc"
        },
      },
      motorbikeEfficiencyUnits: {
        gkm: {motorbikeEfficiency_factor: 10},
        L100km: {motorbikeEfficiency_factor: 20},
        mpguk: {motorbikeEfficiency_factor: 30},
        mpgus: {motorbikeEfficiency_factor: 40},
      },
      carMileageUnits: {
        km: {car_mileage_factor: 10},
        miles: {car_mileage_factor: 20},
      },
      carType: {
        electric: {
          carType_factor: 10,
          description: "average battery"
        },
        hybrid: {
          carType_factor: 20,
          description: "(full hybrid), average battery"
        },
        petrol: {
          carType_factor: 30,
          description: "average battery"
        },
        diesel: {
          carType_factor: 40,
          description: "average battery"
        },
      },
      carSize: {
        small: {car_size_factor: 10},
        medium: {car_size_factor: 20},
        large: {car_size_factor: 20},
      },
    }
  };
  
  export default countryFactors;
  