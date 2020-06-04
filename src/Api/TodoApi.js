/* eslint-disable prettier/prettier */
import firebase from 'react-native-firebase';

export function addTodoFirebase(item,callback){
   // eslint-disable-next-line prettier/prettier
   firebase.firestore().
   collection('todos')
   .add({
       name:item.name,
       country:item.country,
       favMobBrand:item.favMobBrand,
       phoneNumber:item.phoneNumber,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
   }).then((data) => {
       console.log('data =>',data);
       if(callback){
           callback();
       }
      // addComplete('firebase_data =>',data);
   }).catch(error => console.log('error =>',error));
}

export async function updateTodoFirebase(item,id,callback){
    await firebase.firestore()
      .collection('todos')
      .doc(id)
      .update({
        name:item.name,
        country:item.country,
        favMobBrand:item.favMobBrand,
        phoneNumber:item.phoneNumber
      }).then((data) => {
          console.log('data =>',data);
          if(callback){
              callback();
          }
      }).catch(error => console.log('error =>',error));
}

export async function deleteTodoFirebase(id,callback){
    await firebase.firestore()
    .collection('todos')
    .doc(id)
    .delete()
    .then((data) => {
        console.log('data =>',data);
        if(callback){
            callback();
        }
    }).catch(error => console.log('error =>',error));
}

export async function getTodosFirebase(itemsRetrieved){
   let items = [];
   let snapShot = await firebase.firestore()
                  .collection('todos')
                  .orderBy("timestamp")              
                  .get()
    snapShot.forEach((doc) => {
        let data = doc.data();
       items.push({
           id:doc.id,
           country:data.country,
           favMobBrand:data.favMobBrand,
           name:data.name,
           phoneNumber:data.phoneNumber
       })
    });  
    console.log('items =>',items);
    itemsRetrieved(items);  


// await firebase.firestore().onSnapshot((querySnapshot) => {
//     console.log(querySnapshot);
//   });

}