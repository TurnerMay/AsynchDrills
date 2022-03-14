// let msgFunc = function (message) {
//   console.log(message);
// };

// msgFunc("This works");

// setTimeout(() => {
//   msgFunc("This be working too!");
// }, 2000);

// let getWords = function (word) {
//   console.log(word);
// };

// setTimeout(() => {
//   getWords("Word1");
//   setTimeout(() => {
//     getWords("Word2");
//     setTimeout(() => {
//       getWords("Word3");
//       setTimeout(() => {
//         getWords("Word4");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }, 0);

// let done = function () {
//   console.log("Job's Done!");
// };

// let countdown = function (num, callback) {
//   setTimeout(() => {
//     if (num > 0) {
//       console.log(num);
//       countdown(num - 1, callback);
//     } else {
//       callback();
//     }
//   }, 1000);
// };

// const done = function () {
//   console.log("Done-ion Rings!");
// };
// countdown(5, done);

const lunchTime = true;

const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    if (lunchTime === true) {
      const lunch = { food: "Jambalaya", drink: "Topo Chico" };
      resolve(lunch);
    } else {
      const err = new Error("Sorry, we ain't got none!");
      reject(err)
    }
  });
};

orderMeSomeFood().then(function(lunch){
    console.log(lunch)
}).catch(function(err){
    console.log(err)
})


