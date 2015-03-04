var emps=[
	{'name':'Gayari', 'team':'dev'},
	{'name':'Anoo', 'team':'ba'},
	{'name':'Siva', 'team':'dev'},
	{'name':'Sai', 'team':'ba'},
	{'name':'Dhana', 'team':'design'},
	{'name':'Kiran', 'team':'design'}
];
// console.log(_.pluck(_.dropRightWhile(emps, {'name':'Kiran', 'team':'design'}), 'name'));
console.log("Original array " + emps);
console.log(_.pluck(_.dropRightWhile(emps, {'name':'Kiran'}), 'name'));

console.log(_.pluck(_.dropRightWhile(emps, 'team', 'design'), 'name'));

console.log(_.pluck(_.dropRightWhile(emps, 'name'), 'name'));



console.log(_.pluck(_.dropWhile(emps, {'name':'Gayari', 'team':'dev'}), 'name'));



// var emps1=[
// 	{'Slno':1,'name':'Gayari'},
// 	{'Slno':2,'name':'Anoo'},
// 	{'Slno':3,'name':'Dhana'},
// 	{'Slno':4,'name':'Siva'},
// 	{'Slno':5,'name':'Sai'},
// 	{'Slno':6,'name':'Kiran'}
// ];
// console.log(_.pluck(_.dropRightWhile(emps1, {'Slno':5||6||4, 'name':'Sai'||'Kiran'||'Siva'}), 'name'));

// console.log(_.pluck(_.dropWhile(emps1, 'name', 'siva'), 'Slno'));

// console.log(_.pluck(_.dropRightWhile(emps1, 'Siva'), 'Slno'));
