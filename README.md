# Scope & closures practice

## Introduction
El presente repositorio contiene mi práctica personal del curso de closures y scope en javascript de [Platzi](https://platzi.com/clases/scope/).

## Table of contents
* [Introduction](#introduction)
* [Table of contents](#table-of-contents)
* [General info](#general-info)
* [Contents](#contents)

## General info
Las funciones encontradas en los archivos de este repositorio son el resultado de la práctica para conocer los conceptos que abarca el curso mencionado. Se pueden correr directamente en la consola de nuestro navegador, o si lo prefieres, por medio de extensiones como `Code Runner` desde tu editor de texto. 

### Contents
* Scope - Alcance de una variable dento del código.
  * Global

 ```
 var hello = 'Hello' 
 let world = 'Hello World';
 const helloWorld = 'Hello World!';

 const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
 }

 anotherFunction();
 ```
 
  * Local
  
  ```
  const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
  };

  helloWorld();
  console.log(hello); // No puede acceder
  ```
  
  * Function scope

  ```
  const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope
    }
    console.log(func())
  }

  functionScope();
  console.log(scope) // No puede acceder
  ```
  
  * Block scope

  ```
  const fruits = () => {
    if(true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
  }

      console.log(fruits1) // 'apple'
      console.log(fruits2) // not accesible
      console.log(fruits3) // not acessible
  }

fruits();
```

* Closures - Una función interior puede acceder al scope de la función que la contiene. 
* Hoisting - Comportamiento por defecto de JS que permite llamar una función antes de ser declarada, pues las declaraciones tanto de funciones como variables son desplazadas al inicio del código.
* Debugging - Depuración disponible a manera de breakpoint; permite revisar paso a paso las tareas que van siendo ejecutadas en el código. 
