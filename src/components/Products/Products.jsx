import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
    {id: 1, name: "Shoes", description: "Sport Shoes", price: "$5", image: "https://media.istockphoto.com/id/1346094881/photo/cropped-shot-of-an-unrecognizable-woman-tying-her-shoelaces-while-exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=MFlCV5osWA0t7r2oTP6PTzvfKoO2NUDhF40zzkomxGc="},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: "https://plus.unsplash.com/premium_photo-1681160405593-4f794e7e671d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
]

const Products = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;