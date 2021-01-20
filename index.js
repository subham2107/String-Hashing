const readLineSync = require('readline-sync');

const user_response = readLineSync.question('Welcome to String Hashing. Which string hashing technique would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n');

console.log(`You selected ${user_response}`);

logic(user_response);

function md5(url)
{
const crypto = require('crypto');
const algo = 'md5'; //could be sha1, sha256, sha512
const hash = crypto.createHash(algo).update(url).digest('hex');
console.log(hash); // 2fd1f887a229cd6781efd8fe8f00b814
}

function sha1(url)
{
  const crypto = require('crypto');
const algo = 'sha1'; //could be sha1, sha256, sha512
const hash = crypto.createHash(algo).update(url).digest('hex');
console.log(hash);
}

function sha256(url)
{
const crypto = require('crypto');
const algo = 'sha256'; //could be sha1, sha256, sha512
const hash = crypto.createHash(algo).update(url).digest('hex');
console.log(hash);
}

function sha512(url)
{
  const crypto = require('crypto');
const algo = 'sha512'; //could be sha1, sha256, sha512
const hash = crypto.createHash(algo).update(url).digest('hex');
console.log(hash);
}


function logic(user_response)
{
  if(user_response!=='1' && user_response!=='2' && user_response!=='3'&& user_response!=='4')
{
   console.log('Invalid URL');
}
else
{
const url = readLineSync.question('Please enter the url to be encoded\n');  

if(user_response==='1')
{
  md5(url);
}
else if(user_response==='2')
{
  sha1(url);
}
else if(user_response==='3')
{
  sha256(url);
}
else if(user_response==='4')
{
  sha512(url);
}
}
}
