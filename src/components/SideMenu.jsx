import {
    Accordion, AccordionItem, AccordionButton,
    AccordionPanel, AccordionIcon, Box, Button
} from "@chakra-ui/react"

export function SideMenu() {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                {MainSection("Main Section")}
                {SubSections([
                    "Subsection 1"
                ])}
            </AccordionItem>

            <AccordionItem>
                {MainSection("Main secion 2")}
                {SubSections([
                    "Subsection 1",
                    "subsection 2 22 ddd ss"
                ])}
            </AccordionItem>
        </Accordion>
    )
}

function MainSection(title) {
    return (
        <h2>
            <AccordionButton border='2px solid' minWidth="max-content">
                <Box flex='1' textAlign='left'>
                    {title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2 >
    )
}

function SubSections(subsection_titles) {
    return (<AccordionPanel minWidth="max-content">
        {subsection_titles.map(title => (
            <h2 key={title}>
                <Button variant="solid">
                    <Box flex='1'>
                        {title}
                    </Box>
                </Button>
            </h2>
        ))}
    </AccordionPanel>)
}