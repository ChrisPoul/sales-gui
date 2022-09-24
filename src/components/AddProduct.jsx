import { useState } from "react";
import {
    Box, Button
} from "@chakra-ui/react"
import * as API from "../services/products"
import { FormInput, Form } from "./common/FormInput"

export function AddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

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
            } else {
                for (const key in data) {
                    alert(data[key])
                }
            }
        })
    }
    const inputFields = [
        {
            inputName: "name",
            inputValue: name,
            setInput: setName,
            inputLabel: "Nombre",
            inputType: "text"
        },
        {
            inputName: "description",
            inputValue: description,
            setInput: setDescription,
            inputLabel: "Descripción",
            inputType: "text"
        },
        {
            inputName: "price",
            inputValue: price,
            setInput: setPrice,
            inputLabel: "Price",
            inputType: "number"
        }
    ]
    return (
        <Box>
            {Form(handleSubmit, inputFields)}
        </Box>
    )
}
