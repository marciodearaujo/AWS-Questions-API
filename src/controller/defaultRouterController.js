const defaultRouterController={

    routerNotFound:(req,res)=>{
        res.status(404).json({
            error:"Route not Found"
        })
  }
  
}

export default defaultRouterController