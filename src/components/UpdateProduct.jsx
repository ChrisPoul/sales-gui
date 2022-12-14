import { useState } from "react";
import {
    Box, Button
} from "@chakra-ui/react"
import { FormInput } from "./common/FormInput"
import { useNavigate } from "react-router-dom";
import * as API from "../services/products"

export function UpdateProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    let { productId } = useParams()
    useEffect(() => {
        API.getProduct(productId).then(product => {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.setPrice)
        })
    }, [productId]);

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

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                {FormInput({
                    inputName: "name",
                    inputLabel: "Nombre",
                    setValue: setName,
                    isRequired: true
                })}
                {FormInput({
                    inputName: "description",
                    inputLabel: "Descripción",
                    setValue: setDescription,
                    inputType: "textarea"
                })}
                {FormInput({
                    inputName: "price",
                    inputLabel: "Price",
                    setValue: setPrice,
                    inputType: "number"
                })}
                <Button type="submit">Aceptar</Button>
            </form>
        </Box>
    )
}
