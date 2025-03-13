let ToDO =[
    {task:'Breakfast',time:'08:00'},
    {task:'Java class',time:'10:00'},
    {task:'Front-End class',time:'01:30'},
    {task:'Dinner',time:'08:00'}

];

function display()
{
   
    let returnVal = ToDO.reduce(function(acc,obj,ind)
    {
        let tr=`
        <tr>
            <td>${obj.task}</td>
            <td>${obj.time}</td>
         
            <td><button onclick="deletetask(${ind});"> Delete </button></td>
            <td><button onclick="edittask(${ind});"> edit</button></td>
        </tr>
         `
        acc=acc+tr;
        return acc;
    },"")
    let table=`
    <tr>
        <th>Task</th>
        <th>Time</th>
        
         <th>To Delete</th>
         <th>TO Edit</th>
    </tr>
    ${returnVal}
    `
    // console.log(returnVal);

    document.getElementById("details").innerHTML=table;
}
display();

function addtask()
{
    let taskEle =document.getElementById("task");
    let timeEle =document.getElementById("time");
    
    let task =taskEle.value;
    let time =timeEle.value;
    
    let obj ={
        task:task,
        time:time,
        
    }
    
    ToDO.push(obj);
    display();
}


function deletetask(ind)
{
    ToDO.splice(ind,1);
    display();
}

function edittask(ind)
{
    document.getElementById("addBtn").style.display="none"

   let taskEle = document.getElementById("task");
   let timeEle= document.getElementById("time");
  
   let indEle= document.getElementById("ind");

   indEle.innerText=ind;
   let obj=ToDO[ind];
   taskEle.value=obj.task;
   timeEle.value=obj.time;
   
}

function edit()
{
    let indEle=document.getElementById("ind");
    let ind=indEle.innerText;
    let taskEle = document.getElementById("task");
    let timeEle = document.getElementById("time");
    
    
    let task=taskEle.value;
    let time=timeEle.value;
   
    let obj={
        task,time
    }
    ToDO[Number(ind)]=obj;
    display();

}
function deleteAll() {
    ToDO=[];
    display();
}

