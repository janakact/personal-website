---
title: "JavaScript: Avoid long parameter lists in method signatures"
---
[Original Article](https://janakachathuranga.medium.com/javascript-avoid-long-parameter-lists-in-method-signatures-1fe0841fdb98)

Actually I would say not to use more than 4 parameters. Okay?

## Wait What?

It was ridicules when I first heard it. Of course we normally tend to use many parameters on a method signature. In general this is not a good practice because it becomes difficult to understand the order of parameters from the other end.

For an example think if you want to add a new parameter to the method where are you gonna add it? at the end of the parameter list or at the beginning or somewhere in-between? This becomes a big hassle since you are depending on the order. If you change the order you will have to change it every location you call the function.

The better way to do this is to wrap parameters with curly brackets and convert them into a single parameter.

## But be mindful…!
> *Before moving to the description please note that whole the purpose of this approach is to get rid of the order and unnecessary complexity of parameters. Maybe sometimes having the order is a good thing. In that case you should **not** wrap them into an object. Further you should not wrap unlike parameters together. Please read **responses** for more information. Special thanks to [Richard Pringle](https://medium.com/u/692006cf7d0a?source=post_page-----9a5f397d701b----------------------) and [William J Edney](https://medium.com/u/880a80d1cd2c?source=post_page-----9a5f397d701b----------------------) for your valuable responses.*

Here comes the description of the concept.

## Instead of using this
```ts
function createPerson(firstName, lastName, height, weight, gender)
{
  // function body
}// call
const person = createPerson("Arya", "Stark", 4.6, "43kg", "female");
```

## Use this
```ts
function createPerson(parameter){ 
  // extract arguments
  const firstName = parameter.firstname, 
	  lastName = parameter.lastName, 
	  age = parameter.age, 
	  height = parameter.height, 
	  weight = parameter.weight, 
	  gender = parameter.gender ;

  // function body
}//call
const person = createPerson({
	 firstName:"Arya", 
	 lastName:"Stark", 
	 height: 4.6, 
	 weight: "43kg", 
	 gender: "female"
});
```

## Is that all?

Actually you can do better thanks to [ES6’s object destructuring syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Where you can write following to extract arguments.
```ts
const { firstName, lastName, height, weight, gender} = parameter;
```

The best thing is that you can destructure the object on the method signature itself. No need of the extra variable parameter.
```ts
function createPerson({firstName, lastName, height, weight, gender})
{
  // function body
}
```

![](https://cdn-images-1.medium.com/max/2000/0*jdjkIzYhlRxUgjrS.png)

What do you want your code to be when it grows up? Pretty. So write beautiful codes.

That’s all for today. BBye..!
