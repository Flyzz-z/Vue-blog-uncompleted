
import {instance} from "./http";

export function getArticle({articleId}) {
    return new Promise((resolve,reject)=>{
        instance({
        url: "article/" + articleId,
        method: "get",
        }).then((res)=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function getArticleCards({pageNum}) {
    return new Promise((resolve,reject)=>{
        instance({
        url: "cards", 
        method: "get",
        params:{
            "pageNum": pageNum,
        },
        }).then((res)=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function getArticleByCategory({pageNum,categoryId}) {
    return new Promise((resolve,reject)=>{
        instance({
        url: "infos/category/" + categoryId, 
        method: "get",
        params:{
            "pageNum": pageNum,
        },
        }).then((res)=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export function getArticleByKeywords({pageNum,keywords}) {
    return new Promise((resolve,reject)=>{
        instance({
        url: "infos/search", 
        method: "get",
        params:{
            "pageNum": pageNum,
            "keywords": keywords
        },
        }).then((res)=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
