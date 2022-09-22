import { useState } from "react";
import {
    Box, Input, Button, FormControl, FormLabel
} from "@chakra-ui/react"
import * as API from "../services/products"

export function AddProduct(heading) {
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
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl key="name" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        name="name"
                        value={name}
                        onChange={event => setName(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl key="description">
                    <FormLabel>Descripción</FormLabel>
                    <Input
                        name="description"
                        value={description}
                        onChange={event => setDescription(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl key="price" isRequired>
                    <FormLabel>Precio</FormLabel>
                    <Input
                        name="price"
                        type="number"
                        value={price}
                        onChange={event => setPrice(event.currentTarget.value)}
                    />
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
}