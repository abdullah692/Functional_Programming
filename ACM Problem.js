function acmTeam(topic) {
    let maxTopics=0;
    let maxTeams=0;


    let nums= topic.map((t)=> parseInt(t,2));
    console.log(nums,"nums");
    
    for(let i=0; i< topic.length; i++)
    {
        console.log(topic[i],"topic[i]");
        
        for(let j=i+1; j< topic.length; j++)
        {
            console.log("topic[j]",nums[i]);
            let combine = nums[i] | nums[j]
            console.log(combine,"combine");
            let known= combine.toString(2).replace(/0/g, "").length

            console.log(known,"known");
            if(known > maxTopics)
            {
                maxTopics=known
                maxTeams=1
            }
            else if(known == maxTopics)
            {
                maxTeams++
            }
            
            
        }
    }

    return [maxTopics,maxTeams]
}

const topic = [
  "10101",
  "11100",
  "11010"
];

const result=acmTeam(topic)
console.log(result);
