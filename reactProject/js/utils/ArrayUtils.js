
export default class ArrayUtils {
    /**
     * 更新数组,若item已存在则将其从数组中删除,若不存在则将其添加到数组
     * **/
    static updateArray(array, item) {
      for(let i=0;i<array.length;i++) {
        let temp = array[i]
        if(temp === item) {
          array.splice(i,1)
          return
        }
      }
      array.push(item)
    }
}