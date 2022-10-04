import {
    Input, FormControl, FormLabel, NumberInput, NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
    Textarea
} from "@chakra-ui/react"

export function FormInput({
    inputName,
    inputLabel,
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
                defaultValue="0"
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
    } else if (inputType == "textarea") {
        return (
            <FormControl
                key={inputName}
                isRequired={isRequired}
                onInvalid={event => event.target.setCustomValidity('Este valor es requerido')}
                onInput={event => event.target.setCustomValidity('')}
            >
                <FormLabel>{inputLabel}</FormLabel>
                <Textarea
                    name={inputName}
                    type={inputType}
                    onChange={event => setValue(event.target.value)}
                />
            </FormControl>
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
                    onChange={event => setValue(event.target.value)}
                />
            </FormControl>
        )
    }
}
