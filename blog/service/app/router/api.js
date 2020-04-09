module.exports = app => {
    const { router, controller } = app
    router.get('/api/index', controller.api.home.index)
    router.get('/api/getArticleList', controller.api.home.getArticleList)
    router.get('/api/getArticleById/:id', controller.api.home.getArticleById)
}