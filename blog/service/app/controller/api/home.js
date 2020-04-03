'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {

    async index() {
        //获取用户表的数据
        let result = await this.app.mysql.get("blog_content", {})
        this.ctx.body = result
    }

    async getArticleList() {
        let sql = 'SELECT ' +
            'article.id AS id,' +
            'article.title AS title,' +
            'article.introduce AS introduce,' +
            'article.publishTime AS publishTime,' +
            'article.view_count AS view_count,' +
            'article_type.typeName AS typeName ' +
            'FROM ' +
            'article ' +
            'LEFT JOIN article_type ON article.type_id = article_type.id'

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }
}

module.exports = HomeController