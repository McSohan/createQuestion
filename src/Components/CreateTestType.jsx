import React, {useState} from "react";
import Header from "./Header";
import AddSection from "./TestSection/AddSection";
import Section from "./TestSection/Section";

export default function TestType ()
{
    let currentDate = new Date().toISOString().slice(0, 10);

    console.log(currentDate);
    const [testType, setTestType] = useState(
        {
            testTypeId : "",
            date : currentDate,
            startTime : "00:00:01",
            duration : 1,
            course :"",
            //the duration is in minutes
            maxScore : 0,
            //automatically compute max score from the sections added so far
            sections : []
            //each section is a document
        }
    );

    function dateUpdate (event)
    {
        let d = event.target.value;
        setTestType(
            (prevdoc) =>
            {
                return {
                    ...prevdoc,
                    date: d
                }
            }
        );
    }

    //change the start time of the test
    function changeStartTime (event)
    {
        let t = event.target.value;
        setTestType((prevDoc)=>{
            return {
                ...prevDoc,
                startTime: t
            }
        });
    }
    //change the duration of the test
    function updateDuration (event)
    {
        let t = event.target.value;
        setTestType((prevDoc)=>{
            return {
                ...prevDoc,
                duration: t
            }
        });
    }


    //to add a section
    function addSection (newSection)
    {
        setTestType ((prevDoc)=>{
            return {
                ...prevDoc,
                sections: [...prevDoc.sections, newSection],
                maxScore: prevDoc.maxScore + newSection.noOfQuestions*newSection.questionScore
            }
        });
        console.log(testType.sections);
    }

    //to delete a section
    function deleteSection (id, howManyQuestions, questionScore)
    {

        setTestType(prevDoc => {
            return {
                ...prevDoc,
                maxScore: prevDoc.maxScore - howManyQuestions * questionScore
            }
        });

        // setTestType(prevDoc => {
        //     return {
        //         prevDoc.sections.filter((optionItem, index) => {
        //       return (index !== id);
        //     });
        //   });
        console.log(id);

        setTestType(prevDoc => {
            return {
                ...prevDoc,
                sections: prevDoc.sections.filter((item,index)=>(index!==id))
            }
        });
        
    }

    function updateCourse (event)
    {
        let c = event.target.value;
        setTestType((prevDoc)=>{return {
            ...prevDoc,
            course: c
        }});

    }
    

    return (
        <div>
        <Header heading="Create Test"/>
        <form name="testType">
            {/* add section */}
            {/* remove section
            be able to add question type and category 
            from a list of categories */}
            <label name="testDate">
            <label>
            Course:
            <select name="course" id="course" value={testType.course} onChange={updateCourse}>
                <option value="">--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                {/* replace this with a dynamically rendered list */}
            </select>
            </label>
            Date:
            <input 
                type="date" 
                value={testType.date} 
                onChange={dateUpdate} 
                min={currentDate} 
                required
            />
            </label>
            <label name="startTime">
            Time:
            <input 
                name="staartingTime"
                type="time" 
                value={testType.startTime}
                onChange={changeStartTime}
                />
            </label>
            <label name="duration">
            Duration:
            <input 
                name="testDuration"
                type="number" 
                value={testType.duration}
                onChange={updateDuration}
                min="1"
                />min
            </label>
            <div>
                <p>Total test score: {testType.maxScore}</p>
            </div>
            {/* add sections here */}
            <AddSection onAdd={addSection}/>
            {testType.sections.map((secItem, index) => {
                return (
                    <Section
                        key={index}
                        id={index}
                        item={secItem}
                        onDelete={deleteSection}
                    />
                );
            })}
            
        </form>
        </div>
    );
}