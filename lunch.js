/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

/* initial attempt 
const whatToDoForLunch = function(hungry, availableTime) {
  console.log("I don't know what to do!");
    if (hungry === false && availableTime >= 30) {
        console.log("Get back to work then!");
    } else if (hungry === true && availableTime >= 50 ) {
        console.log("This is an intense program, maybe you can use that time to work instead")
    } else if (hungry === true && availableTime <= 20 ) {
        console.log("Get a quick snack and eat it in the lab!");
    } else if (hungry === true && availableTime > 20 && availableTime < 30 ) {
        console.log("Try that cool cafe around the corner!");
    }
}

*/

const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry) {
    if (availableTime >= 30) {
      console.log("Get back to work then!");
    } else {
      console.log("No need to eat right now. Keep working!");
    }
  } else {
    if (availableTime >= 50) {
      console.log("This is an intense program, maybe you can use that time to work instead.");
    } else if (availableTime >= 30) {
      console.log("Try that cool cafe around the corner!");
    } else if (availableTime >= 20) {
      console.log("Get a quick snack and eat it in the lab!");
    } else {
      console.log("You're hungry, but there's not much time. Consider a snack.");
    }
  }
};


/*
 * Feedback to lunch solution above
 *const whatToDoForLunch = function(hungry, availableTime) *{
 *  if (!hungry) {
 *       console.log("No need to eat right now. Keep *working!"); // Not hungry, keep working
  *  } else {
   *     if (availableTime < 20) {
    *        console.log("You're hungry, but there's not *much time. Consider a snack."); // Less than 20 *minutes, grab a snack
     *   } else if (availableTime <= 30) {
      *      console.log("Get a quick snack and eat it in *the lab!"); // 20-30 minutes, cook a meal
       * } else {
        *    console.log("This is an intense program, *maybe you can use that time to work instead."); // More than 30 minutes, reconsider
        }
    }
};
*/



/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);


