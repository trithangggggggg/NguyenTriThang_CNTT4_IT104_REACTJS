"use strict";
let firstName = "donal";
let lastName = "trump";
if (!(firstName.charAt(0) == firstName.charAt(0).toUpperCase())) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
if (!(lastName.charAt(0) == lastName.charAt(0).toUpperCase())) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
let array = [firstName, lastName];
let fullName = array.join(" ");
console.log(fullName);
