import * as firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARGjMzBmfeCd2JgPbci-L_8Eby2ZcNCXA",
    authDomain: "driver-admin-890a9.firebaseapp.com",
    databaseURL: "https://driver-admin-890a9.firebaseio.com",
    projectId: "driver-admin-890a9",
    storageBucket: "driver-admin-890a9.appspot.com",
    messagingSenderId: "576597958771",
    appId: "1:576597958771:web:eb0e994ba8c33a5a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// child_remove

// database.ref('expenses').on('child_removed' , (snapshot) => {

//     console.log(snapshot.key, snapshot.val())
// })

//child_added
// database.ref('expenses').on('child_added' , (snapshot) => {

//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description:'updaate',
//     amount: 29,
//     note:'fourth',
//     createdAt:40
// })

// child_changed

// database.ref('expenses').on('child_changed' , (snapshot) => {

//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         const value = childSnapshot.val();
//         expenses.push({
//             id:childSnapshot.key,
//             ...value
//         })      
//     });
//     console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         const value = childSnapshot.val();
//         expenses.push({
//             id:childSnapshot.key,
//             ...value
//         })      
//     });
//     console.log(expenses);
// })

// database.ref('expenses').push( {
//         description:'time',
//         amount: 29,
//         note:'first',
//         createdAt:40
//     });

 
// fetch data from datebase

// database.ref().set({
//     name: 'Mohamed Nageh',
//     job: 'Frontend develoepr',
//     age: 27,
//     company: 'Amazon',
//     location: {
//         country:'Egypt',
//         city:'Cairo'
//     }
// }).then(() => {
//     console.log('succeded')
// }).catch((e) => {
//     console.log('error: ', e)
// });



// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const {name,job,company,age} = val
//     console.log(`${name} is a ${job} at ${company} and his age is ${age}`);
// })

// database.ref().update({
//     company:'google',
//     age:'26'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('error: ', e)
// });

// setTimeout(() => {
//     database.ref('name').set('Mohamed Nageh o')
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
//     database.ref('name').set('Mohamed Mostfa')
// }, 10000);

// database.ref('location').once('value').then((snapshot) => {
//   const val =   snapshot.val();
//   console.log(val);
// }).catch((e) => {
//     console.log('error: ', e)
// })

// test you firebase work or not
// database.ref().set({
//     name: 'mohamed nageh otafy !',
//     location: {
//         city: 'Cairo',
//         country: 'Egypt'
//     }
// }).then(() => {
//     console.log('data is saved !')
// }).catch((error) => {
//     console.log('is faild: ', error)
// })

// database.ref('location/city').set('Alexandria');

// update data
// database.ref().update({
//     name:'Mostafe',
//     'location/city':'uk',
//     age:28
// })


// remove data with set
// database.ref('name').set(null);

//remove data with remove

// database.ref('location/city').remove().then(() => {
//     console.log('data removed')
// }).catch((e) => {
//     console.log('error: ' ,e)
// })