'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {

    async index() {
        //获取用户表的数据
        let result = await this.app.mysql.get("blog_content", {})
        this.ctx.body = result
    }

    // 获取类别名称和编号
    async getTypeInfo() {
        const result = await this.app.mysql.select('article_type')
        this.ctx.body = {
            data: result
        }
    }

    // 获取文章列表
    async getArticleList() {
        let sql = 'SELECT ' +
            'article.id AS id,' +
            'article.title AS title,' +
            'article.introduce AS introduce,' +
            "FROM_UNIXTIME(article.publishTime,'%Y-%m-%d %H:%i:%s' ) as publishTime," +
            'article.view_count AS viewCount,' +
            'article_type.typeName AS typeName ' +
            'FROM ' +
            'article ' +
            'LEFT JOIN article_type ON article.type_id = article_type.id'

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }

    // 获取指定id的文章详情
    async getArticleById() {
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.article_content as articleContent,' +
            "FROM_UNIXTIME(article.publishTime,'%Y-%m-%d %H:%i:%s' ) as publishTime," +
            'article.view_count as viewCount ,' +
            'article_type.typeName as typeName ,' +
            'article_type.id as typeId ' +
            'FROM article LEFT JOIN article_type ON article.type_id = article_type.Id ' +
            'WHERE article.id=' + id

        const result = await this.app.mysql.query(sql)

        this.ctx.body = { data: result }
    }

    // 获取指定type的文章列表
    async getListById() {
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT ' +
            'article.id AS id,' +
            'article.title AS title,' +
            'article.introduce AS introduce,' +
            "FROM_UNIXTIME(article.publishTime,'%Y-%m-%d %H:%i:%s' ) as publishTime," +
            'article.view_count AS viewCount,' +
            'article_type.typeName AS typeName ' +
            'FROM ' +
            'article ' +
            'LEFT JOIN article_type ON article.type_id = article_type.id ' +
            'WHERE type_id=' + id

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }

}

module.exports = HomeController