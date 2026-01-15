/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/

/* Write your code below. Good luck! 🙂 */



const score1Dolphins=96;
const score2Dolphins=108;
const score3Dolphins=89;


const score1Koalas=88;
const score2Koalas=91;
const score3Koalas=110;

const scoreDolphins=(score1Dolphins+score2Dolphins+score3Dolphins)/3;

const scoreKoalas=(score1Koalas+score2Koalas+score3Koalas)/3;

if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreDolphins===scoreKoalas){
    console.log("Both win the trophy");
}else{
    console.log("Both win the trophy");
}







