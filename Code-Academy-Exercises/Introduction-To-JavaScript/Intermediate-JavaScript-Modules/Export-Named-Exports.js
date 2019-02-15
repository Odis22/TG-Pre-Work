
let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
  maxSpeed: 1200,
  minSpeed: 300,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 maxSpeed: 800,
  minSpeed: 200,
 availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  let range = maxSpeed-minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
}
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export let availableAirplanes = [...];

export let flightRequirements = {...};

export function meetsStaffRequirements(){
...
};

export function meetsSpeedRangeRequirements(){
...
};

/*
Named exports are also distinct in that they can be exported as soon as they are declared
*/