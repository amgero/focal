//rehashing LoopyLighthouse
//Write a program that prints the numbers from 100 to 200 to the console, with three exceptions: - If the number is a multiple of 3, print the String "Loopy". - If the number is a multiple of 4, print the String "Lighthouse". - If the number is a multiple of both 3 and 4, print the String "LoopyLighthouse".
//range 100 to 200
//strings "Loopy", "Lighthouse", "LoopyLighthouse"
//multiples 3 and 4


//Pseudocode:

//loop from 100 to 200:
  //  let num = the current step in the loop;
    //if num % 3 === 0 && num % 4 === 0:
      //  print "LoopyLighthouse"; 
    //else if num % 4 === 0:
      //  print "Lighthouse";
    //else if num % 3 === 0:
      //  print "Loopy";
    //else
      //  print num;
    //end if;    
//end loop;


//Real code time

for (let num = 100; num <= 400; num++) {
    if (num % 3 ===0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
    } else if (num % 3 === 0) {
    console.log("Loopy");
    } else if (num % 4 === 0) {
    console.log("Lighthouse")
    } else {
    console.log(num);
    }
}

//Re-imagining the code

//for (const num of nums) {
  //  let output ="";
    
  //  if (num % 3 === 0) {
    //output += "Loopy";
    //}
    //if (num % 4 === 0) {
    //output += "Lighthouse";
    //}
    //console.log(output === "" ? num : output);
//}