
import mongoose from "mongoose";
const Product = mongoose.model("Product", {name: String});
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc san pham",
        })
    }
}


export const list = (req, res) => {
    res.json(data);
}
export const get = (req, res) => {
    res.json(data.find(item => item.id == req.params.id));
}
export const remove = (req, res) => {
    res.json(data.filter(item => item.id != req.params.id));
}
export const update = (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result);
}