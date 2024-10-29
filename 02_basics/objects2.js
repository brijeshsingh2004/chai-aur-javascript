// DECLARATION OF SINGLETON OBJECT


// const tinderUser = new Object();
// console.log(tinderUser);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const tinderUser = {}

// tinderUser.id = 24465777,
// tinderUser.name = "brijesh thakur",
// tinderUser.course = "BCA"




// console.log(tinderUser["course"]);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const regularUser = {





//     userName: {

//         fullName: {


//             firstName: "brijesh",
//             serNanme: "singh",




//         }


//     }






// }






// console.log(regularUser.userName.fullName);







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






const obj1 = {a:"1" , b:"2"};
const obj2 = {a:"3" , b:"4"};



// const obj3 = Object.assign({} , obj1 , obj2 )

const obj3 = {...{} ,...obj1,...obj2 };


console.log(obj3);

