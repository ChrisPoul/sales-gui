import { extendTheme } from "@chakra-ui/react"

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
        },
        solid: {
            display: 'flex',
            width: "100%",
            bg: 'inherit'
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
}

export const theme = extendTheme({
    components: {

    }
})