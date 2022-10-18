import { useState } from "react";
import {
    Box, Button
} from "@chakra-ui/react"
import { FormInput } from "./common/FormInput"
import { useNavigate } from "react-router-dom";
import * as API from "../services/products"

export function AddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const response = API.addProduct({
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
                navigate("/products")
            } else {
                for (const key in data) {
                    alert(data[key])
                }
            }
        })
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
        </Box>
    )
}
