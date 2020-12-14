/**
 * 
 * Get object property value from path
 * 
 * @param {*} obj object data
 * @param {*} dataToRetrieve object property path
 */
export const GetPropertyValue = (obj, dataToRetrieve) => {
    return dataToRetrieve
      .split('.') 
      .reduce(function(o, k) {
        return o && o[k]; 
      }, obj) 
}
  