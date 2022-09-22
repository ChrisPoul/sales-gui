import { useState } from "react";
import {
    Box, Input, Button, FormControl, FormLabel
} from "@chakra-ui/react"
import * as API from "../services/products"

export function AddItem(heading) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)


    const handleSubmit = event => {
        event.preventDefault()
        API.addProduct({
            name: name,
            price: price
        })
        alert("El producto fue añadido")
    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl key="name" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input name="name" onChange={event => setName(event.currentTarget.value)} />
                </FormControl>
                <FormControl key="price" isRequired>
                    <FormLabel>Precio</FormLabel>
                    <Input name="price" type="number" onChange={event => setPrice(event.currentTarget.value)} />
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
}