import {
    Input, FormControl, FormLabel, Button, NumberInput, NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from "@chakra-ui/react"

export function FormInput({
    inputName,
    inputLabel,
    inputValue,
    setValue,
    inputType = "text",
    isRequired = false
} = {}) {
    if (inputType == "number") {
        return (
            <NumberInput
                key={inputName}
                name={inputName}
                onChange={(value) => setValue(value)}
                format={(value) => `$` + value}
                value={inputValue}
                pattern="\$\d+\.?\d{0,2}"
            >
                <NumberInputField
                    onInvalid={event => event.target.setCustomValidity('El numero tener un máximo de 2 decimales')}
                />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        )
    } else {
        return (
            <FormControl
                key={inputName}
                isRequired={isRequired}
                onInvalid={event => event.target.setCustomValidity('Este valor es requerido')}
                onInput={event => event.target.setCustomValidity('')}
            >
                <FormLabel>{inputLabel}</FormLabel>
                <Input
                    name={inputName}
                    type={inputType}
                    value={inputValue}
                    onChange={event => setValue(event.target.value)}
                />
            </FormControl>
        )
    }
}
