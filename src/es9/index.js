//Operador de reposo puede extraer las propiedades de un objeto que aún no se ha construido. ...all

const obj3= {
    name:'Alejandro', 
    nick: 'Alejandro-sin'
}

let{name, ...all}=obj3;
console.log(name,all); // Si quito el argumento name, me trae todo menos el nombre.


// Utilizando propiedades de propagación se pueden añadir multiples objetos a otros objetos mediante ...nombre_objeto
const obj= {
    name:'Alejandro', 
    nick: 'Alejandro-sin'
}
const obj1= {
    ...obj,
    alter:'Etrx', 
    alternick: 'n-etrx'
}
const obj2= {
    ...obj1,
    loveone:'Anny', 
    nickloveone: 'Animadversion'
}

console.log(obj2);

//Promise.finally podemos saber cuando ha terminado el llamado para realizar una lógica.

const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? resolve('helloWorld')
        : reject(new Error ('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizo'))
