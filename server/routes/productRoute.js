import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productController.js';
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router();

router.post('/',verifyAdmin,createProduct)

router.put('/:id',verifyAdmin,updateProduct)

router.delete('/:id',verifyAdmin,deleteProduct)

router.get('/find/:id',verifyAdmin,getProduct)

router.get('/',verifyAdmin,getAllProducts)

export default router;