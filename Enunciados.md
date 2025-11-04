## PROGRAMACIÓN FUNCIONAL

#### 1. Crea una función pura llamada descuento que reciba un precio y devuelva el precio con un 10% de descuento.

#### 2. Dada una persona: `{nombre: "Lucia", edad: 30}`,crea una nueva persona llamada nuevaLucia que tenga la misma edad pero cambie su nombre a "Lucía Pérez", sin modificar el objeto original.

#### 3. Usa una función de orden superior `(operar)` para multiplicar dos números.

#### 4. Define dos funciones, `doble e incrementar`, y compónlas (como en `compose`) para crear una nueva función que primero duplique un número y luego le sume 1.

## CLASES Y POO

#### 5. Crea una clase `Coche` con un constructor que reciba `marca` y `modelo`. Añade un método `arrancar()` que devuelva `"El coche <marca> ha arrancado"`.

#### 6. Añade un método estático `tipos()` a la clase `Coche` que devuelva `"Vehículo terrestre"`.

#### 7. Crea una clase `CocheElectrico` que herede de `Coche` y tenga un campo adicional `bateria`. Sobrescribe el método `arrancar()` para incluir ese dato.

#### 8 . Añade un getter `info` a la clase `Coche` que devuelva una cadena con la marca y el modelo.

#### 9 . Crea una clase `CajaFuerte` con un campo privado `#codigo` inicializado en `4321`. Añade un getter `codigo` para acceder al valor.

#### 10. Implementa una función `crearSuperMascota(nombre)` que combine las capacidades de un objeto `volador` y un objeto `nadador`, y pruébala.

## OBJETOS Y PROTOTIPOS

#### 11. Crea un objeto `animal` con un método `sonido()` que muestre `"Hace un sonido"`. Luego crea otro objeto `gato` con `Object.create(animal)` y añade un método `maullar()` que diga `"Miau"`.

#### 12. Usa `Object.assign` para combinar tres objetos (`a`, `b`, `c`) en uno solo.

#### 13. Crea un objeto `caja` con dos propiedades, séllalo con `Object.seal()` e intenta añadir una nueva propiedad. ¿Qué ocurre?.

#### 14 . Comprueba con `hasOwnProperty` si el objeto `gato` tiene su propio método `maullar` y si hereda `sonido`.

## ESTRUCTURAS DE DATOS

#### 15 . Crea un `Set` con los valores `[1, 2, 2, 3, 4]`, elimina el número 3 y comprueba si el número 4 está presente.

#### 16 . Añade al `Set` anterior el número 5 y muestra todos los valores como un array.

#### 17 . Crea un `WeakSet` y añade dentro dos objetos diferentes (`{nombre: "A"} y {nombre: "B"}`).

#### 18 . Crea un `Map` que relacione nombres de animales con su tipo (por ejemplo "perro" → "mamífero"), y muestra el tamaño del `Map`.

#### 19 . Crea un `Map` donde las claves sean objetos (por ejemplo `{ id: 1 }`) y los valores sean nombres.

#### 20 . Usa un `WeakMap` para asociar un objeto usuario con un token `"abc123"`.

#### 21 . Combina con spread los arrays `[1, 2], [3, 4] y [5, 6]` en uno solo.

#### 22 . Usa rest para extraer el primer y segundo elemento de `[10, 20, 30, 40]` y guardar el resto en otra variable.

#### 23 . Usa `flat()` sobre `[1, [2, [3, [4]]]]` para obtener `[1, 2, 3, 4]`.

#### 24 . Usa `flatMap()` sobre `[2, 4, 6]` para crear un nuevo array que contenga el número original y su mitad.

#### 25 . Crea un `Map` y recórrelo con un bucle `for...of` mostrando cada `clave` y `valor`.