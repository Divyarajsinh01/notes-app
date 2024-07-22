// const dowork = async () => {
//   return 'hello'
// }

// dowork().then((result) => {
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(a < 0 || b < 0){
                return reject('number must be positive')
            }
          resolve(a + b)
        },2000)
    })
}

const dowork = async () => {
    const sum = await add(1, -50)
    const sum2 = await add(sum, 49)
    const sum3 = await add(sum2, -50)
    return sum3
  }
  
  dowork().then((result) => {
      console.log(result)
  }).catch((e)=>{
      console.log(e)
  })