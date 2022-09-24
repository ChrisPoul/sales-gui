import {
    Input, FormControl, FormLabel, Button, NumberInput, NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from "@chakra-ui/react"

export function FormInput(inputName, inputValue, setInput, inputLabel, inputType = "text") {
    if (inputType != "number") {
        return (
            <FormControl key={inputName}>
                <FormLabel>{inputLabel}</FormLabel>
                <Input
                    name={inputName}
                    type={inputType}
                    value={inputValue}
                    onChange={event => setInput(event.currentTarget.value)}
                />
            </FormControl>
        )
    } else {
        return (
            <NumberInput
                key={inputName}
                name={inputName}
                onChange={(value) => setInput(value)}
                format={(value) => `$` + value}
                value={inputValue}
                pattern="\$\d+\.?\d{0,2}"

            >
                <NumberInputField
                    onInvalid={event => { event.target.setCustomValidity('El numero debe tener un máximo de 2 decimales') }}
                />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        )
    }
}

export function Form(handleSubmit, inputFields) {
    return (
        <form onSubmit={handleSubmit}>
            {inputFields.map(field => (
                FormInput(field.inputName, field.inputValue, field.setInput, field.inputLabel, field.inputType)
            ))}
            <Button type="submit">Aceptar</Button>
        </form>
    )
}