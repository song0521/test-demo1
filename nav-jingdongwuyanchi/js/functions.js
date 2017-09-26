/**
 * Created by Administrator on 2017/9/11 0011.
 */
//位运算 异或 判断向量符号是否相同
function sameSign(a,b){
    return (a ^ b)>=0
}

//向量定义
function vector(a,b) {
    return{
        x: b.x -a.x,
        y: b.y -a.y
    }
}
function vectorProduct(v1,v2){
    return v1.x * v2.y - v1.y * v2.x
}
function isPointInTrangle(p,a,b,c){
    var pa= vector(p,a)
    var pb= vector(p,b)
    var pc= vector(p,c)

    var t1 = vectorProduct(pa,pb)
    var t2 = vectorProduct(pb,pc)
    var t3 = vectorProduct(pb,pc)

    return sameSign(t1,t2) && sameSign(t2,t3)
}


//函数检查是否需要延迟
function needDelay(elem,leftCorner,currMousePos){
    var offset=elem.offset()
    var topLeft={
        x:offset.left,
        y:offset.top
    }

    var bottomLeft={
        x:offset.left,
        y:offset.top +elem.height
    }
    return isPointInTrangle(currMousePos,leftCorner,topLeft,bottomLeft)
}