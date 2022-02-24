//  compara dos objetos y devuelve "true" si son iguales y "false" si son distintos, y devuelve un array con las claves que son iguales.
 export const comparadorObjetos = (objectoVacio, objectoLleno) => {
    const arraySmilitudes = []
    const keys1 = Object.keys(objectoVacio);
    const keys2 = Object.keys(objectoLleno);
    if (keys1.length == keys2.length) {
        for (let key of keys1) {
            if (objectoVacio[key] == objectoLleno[key]) {
                  
                  arraySmilitudes.push(key)
                //   console.log("error vacio",objetoSmilitudes)
            }
        
        }
        return arraySmilitudes
    }
    else return false;
  }