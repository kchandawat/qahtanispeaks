import firebase from "../firebase";

const databaseRef = firebase.database().ref();
const contactRef = databaseRef.child("contact");

export const pushContact = newContact => async dispatch => {
  contactRef.push(newContact, function(error) {
    if (error) console.log("Error has occured during saving process");
    else console.log("Data hss been saved succesfully");
  });
};
