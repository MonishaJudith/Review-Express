const express=require('express')

const app=express()

const {products}=require('./data')
//console.log(products)
app.get('/api/v1/products/:id/review/:rid',(req,res)=>
{
    const {id,rid}=req.params
   // console.log("id:",id,"r_id",rid)
    const singleProduct=products.find((product)=>product.id ===Number(id))
    console.log(singleProduct)
    if(!singleProduct){
                res.send('product not found')
            }
           
            else {
                const singleReview=singleProduct.review.find((rev)=>rev.rid ===Number(rid))
                if(!singleReview)
                {
                    res.send('No Review')
                }

                console.log(singleReview)
                res.status(200).send(singleReview)}

})
app.listen(3200)