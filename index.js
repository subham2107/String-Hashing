const readLineSync = require('readline-sync');

const user_response = parseInt(readLineSync.question('Welcome to String Hashing. Which string hashing technique would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n'));

console.log(`You selected ${user_response}`);

logic(user_response);

function md5(url)
{
const crypto = require('crypto');
const algo = 'md5'; 
const hash = crypto.createHash(algo).update(url).digest('hex');
return hash; 
}

function sha1(url)
{
  const crypto = require('crypto');
const algo = 'sha1'; 
const hash = crypto.createHash(algo).update(url).digest('hex');
return hash;
}

function sha256(url)
{
const crypto = require('crypto');
const algo = 'sha256'; 
const hash = crypto.createHash(algo).update(url).digest('hex');
return hash;
}

function sha512(url)
{
  const crypto = require('crypto');
const algo = 'sha512'; 
const hash = crypto.createHash(algo).update(url).digest('hex');
return hash;
}


function logic(user_response)
{
  if(user_response!==1 && user_response!==2 && user_response!==3 && user_response!==4)
{
   console.log('Invalid URL');
}
else
{
const url = readLineSync.question('Please enter the url to be encoded\n');  

if(user_response===1)
{
  console.log(md5(url));
}
else if(user_response===2)
{
  console.log(sha1(url));
}
else if(user_response===3)
{
  console.log(sha256(url));
}
else if(user_response===4)
{
  console.log(sha512(url));
}
}
}
