//Template Literal "`"
var name = "egoing";
var letter = "Dear "+name+"\n\
\n\
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +name+" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+name+" Excepteur sint occaecat cupidatat non proident, "+name+" sunt in culpa qui officia deserunt mollit anim id est laborum.";

 var letter = `Dear ${name} ${1+1}
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ${name} Excepteur sint occaecat cupidatat non proident, ${name} sunt in culpa qui officia deserunt mollit anim id est laborum.`;
console.log(letter);
