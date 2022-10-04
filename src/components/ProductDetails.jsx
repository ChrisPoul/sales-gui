import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box, Button
} from "@chakra-ui/react"
import { FormInput } from "./common/FormInput"
import * as API from "../services/products"

export function ProductDetails() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    let { productId } = useParams()
    useEffect(() => {
        API.getProduct(productId).then(product => {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.setPrice)
            console.log(product)
        })
    }, []);

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const response = API.updateProduct(
            productId,
            {
                name: name,
                price: price,
                description: description
            }
        )
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

    const handleDelete = () => {
        if (window.confirm("Estas seguro que deseas borrar")) {
            const response = API.deleteProduct(productId)
            response.then(() => {
                alert("Operación exitosa")
                navigate("/products")
            })
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                {FormInput({
                    inputName: "name",
                    inputLabel: "Nombre",
                    inputValue: name,
                    setValue: setName,
                    isRequired: true
                })}
                {FormInput({
                    inputName: "description",
                    inputLabel: "Descripción",
                    inputValue: description,
                    setValue: setDescription,
                    inputType: "textarea"
                })}
                {FormInput({
                    inputName: "price",
                    inputLabel: "Price",
                    inputValue: price,
                    setValue: setPrice,
                    inputType: "number"
                })}
                <Button type="submit">Aceptar</Button>
            </form>
            <Button colorScheme="red" onClick={handleDelete}>
                Delete
            </Button>
        </Box>
    )
}
