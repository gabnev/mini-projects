function inputCaloriesByDay(day) {

  switch (day) {
    case 'monday':
      var calories = 500;
      return calories;
    case 'tuesday':
      var calories = 500;
      return calories;
    case 'wednesday':
      var calories = 500;
      return calories;
    case 'thursday':
      var calories = 2000;
      return calories;
    case 'friday':
      var calories = 1000;
      return calories;
    case 'saturday':
      var calories = 1000;
      return calories;
    case 'sunday':
      var calories = 1000;
      return calories;
  }  
}

function getTotalCalories() {  
  var totalCalories = 0;
  totalCalories += inputCaloriesByDay('monday');
  totalCalories += inputCaloriesByDay('tuesday');
  totalCalories += inputCaloriesByDay('wednesday');
  totalCalories += inputCaloriesByDay('thursday');
  totalCalories += inputCaloriesByDay('friday');
  totalCalories += inputCaloriesByDay('saturday');
  totalCalories += inputCaloriesByDay('sunday');
  return totalCalories;
}

function getIdealCalories() {
  var idealDailyCalories = 1000;
  idealDailyCalories *= 7;
  return idealDailyCalories;
}

function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  console.log('Total calories ', actualCalories)

  var idealCalories = getIdealCalories();
  console.log('Ideal calories ', actualCalories)

  if(actualCalories <= idealCalories) {
    console.log('Good')
  } else {
    console.log('Bad')
  }
}

calculateHealthPlan()