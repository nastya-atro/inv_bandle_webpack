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

const analytics = createAnalytics()
console.log(analytics.decrement())
