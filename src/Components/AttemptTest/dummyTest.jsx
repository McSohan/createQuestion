import React, {useState} from "react";


//this will be a list of questions which will resemble a test 
const dummyTest = [
    {questionType: "MCQ", score:1, questionBody: "Who is the father of the nation1", choices: ["Hello World", "SVP", "JN"]},
    {questionType: "FIB", score:2, questionBody: "Who is the father of the nation1"},
    {questionType: "MCQ", score:1, questionBody: "Who is the father of the nation2", choices: ["Msadfsd", "SsdfP", "JN"]},
    {questionType: "MCQ", score:1, questionBody: "Who is the father of the nation3", choices: ["MG", "SVP"]},
    {questionType: "FIB", score:2, questionBody: "Who is the father of the nation2"},
    {questionType: "FIB", score:4, questionBody: "Who is the father of the nation3"},
    {questionType: "Sub", score:5, questionBody: "Who is the father of the nation1"},
    {questionType: "Sub", score:10, questionBody: "Who is the father of the nation2"},
    {questionType: "MCQ", score:1, questionBody: "Who is the father of the nation4", choices: ["MG", "SVP", "JN"]}
];



export default dummyTest;