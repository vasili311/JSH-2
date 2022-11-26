//TASK1























// Task 2
const user1 = {
    name: "Vasili",
    lastname: "Vakhtangishvili",
  };
  const copyNewUser = function (user) {
    const newUser = { ...user };
    return newUser;
  };
  const copiedUser = copyNewUser(user1);
  console.log(copiedUser); //{name: 'Vasili', lastname: 'Vakhtangishvili'}
  


//Task 3 
while (true) {
    const firstplayer = Math.floor(Math.random() * 6 + 1);
    const secondplayer = Math.floor(Math.random() * 6 + 1);
    console.log(firstplayer);
    console.log(secondplayer);
    if (firstplayer === 3 && secondplayer === 3) {
      console.log("Draw!");
      break;
    } else if (firstplayer === 3) {
      console.log("FirstPlayer  won the game");
      break;
    } else if (secondplayer === 3) {
      console.log("SecondPlayer won the game");
      break;
    }
  }
