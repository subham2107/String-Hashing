const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to String Hashing. Which string hashing technique would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n'));

console.log(`You selected ${userResponse}`);

logic(userResponse);

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

function logic(userResponse)
{
   if(userResponse!==1 && userResponse!==2 && userResponse!==3 && userResponse!==4)
   {
   console.log('Invalid URL');
   }
   else
   {
   const url = readLineSync.question('Please enter the url to be encoded\n');  

   if(userResponse===1)
   {
   console.log(md5(url));
   }
   else if(userResponse===2)
   {
   console.log(sha1(url));
   }
   else if(userResponse===3)
   {
   console.log(sha256(url));
   }
   else if(userResponse===4)
   {
   console.log(sha512(url));
   }
   }
   }
