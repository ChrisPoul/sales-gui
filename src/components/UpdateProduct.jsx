import { useState } from "react";
import {
    Box, Button
} from "@chakra-ui/react"
import { FormInput } from "./common/FormInput"
import { useNavigate } from "react-router-dom";
import * as API from "../services/products"
import { ProductForm } from "./ProductForm";

export function UpdateProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const response = API.updateProduct({
            name: name,
            price: price,
            description: description
        })
        response.then(data => {
            if (data == null) {
                alert("Operación exitosa")
                setName("")
                setPrice(0)
                setDescription("")
            } else {
                for (const key in data) {
                    alert(data[key])
                }
            }
            navigate("/products")
        })
    }

    return ProductForm(handleSubmit)
}
