import Mock from 'mockjs';
import {articleTemplate} from './mock';
const Random = Mock.Random;

const produceNewsData = function () {
    let articles = []
    for (let i = 0; i < 7; i++) {
      let newArticleObject = {
        articleId: 1,
        articleTitle: Random.csentence(5, 15), //  Random.csentence( min, max )
        articleCreateTime: Random.date(),
        articleUpdateTime: Random.date(),
        articleCategory: {categoryId: Random.natural(1,30),categoryName: Random.cword(4,7)},
        articleExcerpts: Random.cparagraph(3),
      }
      articles.push(newArticleObject)
    }
    return {
      articles
    }
}

Mock.mock('http://127.0.0.1:8080/api/cards?pageNum=1', 'get', produceNewsData);
Mock.mock('http://127.0.0.1:8080/api/article/1', 'get',articleTemplate )
Mock.mock('http://127.0.0.1:8080/api/infos/category/1?pageNum=1', 'get', produceNewsData);
Mock.mock('http://127.0.0.1:8080/api/infos/search?pageNum=1&keywords=zy', 'get', produceNewsData);