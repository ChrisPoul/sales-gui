import {
    Box, Button
} from "@chakra-ui/react"
import { FormInput } from "./common/FormInput"

export function ProductForm(handleSubmit) {
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
                    setValue: setDescription
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