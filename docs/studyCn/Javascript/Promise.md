##  Promise 控制并发

:::tip TIP

设计一个函数，可以限制请求的并发，同时请求结束之后，调用callback函数
sendRequest(requestList:,limits,callback):void

:::
```javascript

sendRequest(

[()=>request('第一个'),

()=>request('第二个'),

()=>request('第三个'),

()=>request('第四个'),

()=>request('第五个')],

2, //并发数

(res)=>{

    console.log(res)

})

// 其中request 可以是： 
function request (url,time=1){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{


            // if(Math.random() > 0.5){

                resolve('成功')
                console.log(url+'请求结束👌');


            // }else{

            //     reject('错误;')

            // }

        },time*3000)

    })
}
```

## 明确概念
⚠️ 这里有几个概念需要明确一下

* `并发`：并发是多个任务同时交替的执行（因为cpu执行指令的速度非常之快，它可以不必按顺序一段代码一段代码的执行，这样效率反而更加低下），这样看起来就是一起执行的，所以叫并发。

* `并行`：可以理解为多个物理cpu或者有分布式系统，是真正的'同时'执行

* `并发控制`：意思是多个并发的任务，一旦有任务完成，就立刻开启下一个任务

* `切片控制`：将并发任务切片的分配出来，比如10个任务，切成2个片，每片有5个任务，当前一片的任务执行完毕，再开始下一个片的任务，这样明显效率没并发控制那么高了


## 思路

将关键步骤拆分出合适的函数来组织代码

1. 循环去启动能执行的任务
2. 取出任务并且推到执行器执行
3. 执行器内更新当前的并发数，并且触发捞起任务
4. 捞起任务里面可以触发最终的回调函数和调起执行器继续执行任务

## 代码

```javascript

function sendRequest(requestList,limits,callback){

    const promises = requestList.slice() // 取得请求list（浅拷贝一份）

    // 得到开始时，能执行的并发数

    const concurrentNum = Math.min(limits,requestList.length)
    console.log('任务执行并发数：',concurrentNum,"'个'+'🍏'")

    let concurrentCount = 0 // 当前并发数

    // 第一次先跑起可以并发的任务

    const runTaskNeeded = ()=>{

        let i = 0

        // 启动当前能执行的任务

        while(i<concurrentNum){

            i++

            runTask()

        }

    }

    // 取出任务并且执行任务

    const runTask = ()=>{

        const task = promises.shift()

        task && runner(task)

    }




    // 执行器

    // 执行任务，同时更新当前并发数

    const runner = async (task)=>{

        try {

            concurrentCount++
            console.log('当前task',task)
            console.log('任务开始执行==> concurrentCount++')

            await task()

        } catch (error) {
            console.error(error)
        }finally{

            // 并发数--

            concurrentCount--
            console.log('结束执行执行 ==>concurrentCount--')

            
            // 捞起下一个任务
            picker()

        }

    }

// 捞起下一个任务执行

    const picker = ()=>{
        
        console.log('捞起下一个任务执行')

        // 任务队列里还有任务并且此时还有剩余并发数的时候 执行
        if(concurrentCount < limits && promises.length > 0 ){

            runTask()

        // 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了

        }else if(promises.length ==0 && concurrentCount ==0 ){

            console.log('全部执行结束💫')
            callback && callback()

        }

    }



    // 入口执行

    runTaskNeeded()

}


```

![promise](/images/web/promise.gif)