function createAnalytics (){
  let  count = 0;
  return{
      increment(){
        return count + 1
      },
      decrement(){
          return count - 1
      }
  }
}

import ('lodash').then(_=>{
    console.log('Lodash', _)
})

const analytics = createAnalytics()
console.log(analytics)

