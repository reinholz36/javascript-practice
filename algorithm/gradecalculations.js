// const grades = [100, 95, 97, 98];

// finalGradeCalculator(90);

// What fifth grade would I have to make in order to have a "90" in the class?

// The average of an array number value is equal to avg

// (100 + 95 + 97 + 98 + x)/length + 1 = y

// solve for x where y = 90

const grades = [100, 95, 97, 98]

// Total points available in the class = 500 
// How do we calculate how many points we need to get a 90? .90 * 500 = 450
// Sum up the points we already got and subtract it from the number needed for the goal
let target = 95;
gradecalc = function(target){
    let sum = 0;
    let totalpoints = (grades.length + 1) * 100;
    let targetPoints =(target/100) * totalpoints;
    
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i] 
    }
    let finaltestscore = targetPoints - sum;
    
    console.log(`You would need at least a ${finaltestscore} if you want to get a ${target} in class.`);
}

gradecalc(target);
