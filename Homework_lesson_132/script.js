const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

let str2 = str.substring(18, 21);
console.log(str2);

let str3 = str.substr(6, 5);
console.log(str3);

let str4 = str.slice(12, 17);
console.log(str4);

let str5 = str.split(' ', 1);
console.log(str5);

console.log(str6 = str5 + ' ' + str3 + ' ' + str4 + ' ' + str2);
console.log(str2.concat(' ',str3, ' ', str4, ' ', str5));
console.log([str5, str3, str4,str2].join(' '));
