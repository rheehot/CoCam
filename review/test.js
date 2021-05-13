function solution(array, commands) {
  let boul = [];
   var answer = [];
  for(let i = 0 ; i < commands.length ; i++){
      boul = commands[i].slice(commands[i][0],commands[i][1])
      boul.sort(function(a,b){
          return a-b;
      })
      answer.push(boul[commands[i][2]]);
  }
  console.log(answer);
  return answer;
}