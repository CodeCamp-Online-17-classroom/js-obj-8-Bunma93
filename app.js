// write code here
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

let multiplyNumeric = (obj, num) =>{
    for (let key in obj){
        if (typeof obj[key] === 'number')
        obj[key] *= num;
    }
    console.log(menu);
}

multiplyNumeric(menu, 3);