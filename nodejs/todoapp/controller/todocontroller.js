module.exports = function(app) {
    app.get('/todo', function (req,res){
        res.send("您所访问的页面地址是：" + req.url);
    })

    app.post('/todo', function (req,res){

    })

    app.delete('/todo', function(req,res){
        
    })
}