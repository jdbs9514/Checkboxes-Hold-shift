# Hold Shift and Check Checkboxes

This exercise show you how you can access into the checkbox properties and can hold the shift Key to select all the checkboxes in between the first and the last checks.

![](/image/checkbox.png)

## Let's Learn :

## this

The **this** keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where **this** refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

The value of **this** in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (**obj.method()**), this points to that object. When invoked as a standalone function (not attached to an object: **func()**), **this** typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.**bind()** method can create a function whose this binding doesn't change, and methods **apply()** and **call()** can also set the this value for a particular call.

Arrow functions differ in their handling of **this**: they inherit **this** from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their **this** value cannot be set by **bind()**, **apply()** or **call()** methods, nor does it point to the current object in object methods.

## MouseEvent.shiftKey

The **MouseEvent.shiftKey** read-only property is a boolean value that indicates whether the $shift$ key was pressed or not when a given mouse event occurs.

### Value

A boolean value, where true indicates that the key is pressed, and false indicates that the key is not pressed.


**Author**

👤 **Josué Benavides**

- GitHub: [@jdbs9514](https://github.com/jdbs9514)
- LinkedIn: [Josué](https://linkedin.com/in/macoin)

### Play:
[Live Demo](https://gorgeous-cranachan-fe718e.netlify.app/)

