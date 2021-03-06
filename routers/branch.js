var express = require('express')

var branchRouter = express.Router()
var branchController = require('../controllers').branchController

branchRouter.route('/')
.all(function(req,res,next) {
    console.log(' inside branch router call')
    next();
})
.get(branchController.getBranchList)
//.delete(branchController.deleteAllBranch)

branchRouter.route('/:id')
.all(function(req,res,next) {
    console.log(' inside branch router with branch id param')
    next();
})
.get(branchController.getBranchById)
//.delete(branchController.deleteBranchById)
//.put(branchController.updateBranchById)


branchRouter.route('/:id/teachers')
.all(function(req,res,next) {
    console.log(' inside branch router with branch id param to get teachers')
    next();
})
.get(branchController.getTeachersByBranchId);


branchRouter.route('/:id/products')
.all(function(req,res,next) {
    console.log(' inside branch router with branch id param to get products')
    next();
})
.get(branchController.getProductsByBranchId);

branchRouter.route('/:id/products')
.all(function(req,res,next) {
    console.log(' inside branch router with branch id param to insert products')
    next();
})
.post(branchController.createProductsByBranchId);

branchRouter.route('/:id/targets')
.all(function(req,res,next) {
    console.log(' inside branch router with branch id param to insert targets')
    next();
})
.post(branchController.createTargetsByBranchId);


module.exports = branchRouter;