const defaultRouterController={
    routerNotFound:(req,res)=>{
        res.status(404).json({
            error:"Not Found"
        })
    }
}

export default defaultRouterController