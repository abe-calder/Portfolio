import { Box, Card, Container, Flex, Heading, Inset, Strong, Text } from "@radix-ui/themes";

export default function HomeBottom() {


  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{height: '80vh'}}>
        <img
          alt=""
          src="/images/second-blue-gradient-background.jpg"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <Heading style={{textAlign: 'center'}} color="plum" size="9">Projects</Heading>
        <div>
          <Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
            <Container size="2">
              <Box>
                <Box py="9" />
              </Box>
            </Container>
          </Box>
        </div>
      <div aria-hidden="true"
        className="hidden sm:absolute sm:-middle sm:right-2/3 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu" >
          <Flex direction="column" gap="3">
	          <Heading style={{ borderBottom: '1px solid white', width: 'fit-content', alignSelf: 'center'}} color="sky" size="9">Personal</Heading>
          </Flex>
        <Box className="project-box" maxWidth="15vw" style={{paddingTop: '3vh'}}>
	        <Card  size="4">
            <Inset   side="top" pb="current">
              <img
                src="/images/Screenshot 2025-09-23 205726.png"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 175,
                  // backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Todos</Strong> This is 
              a web app that was built as a 
              place to store a list of things 
              that I needed to do.<br></br>
              
              <a style={{color: 'maroon'}} href="https://todo-full-stack-jggn.onrender.com/">Delopyed Site </a> | 
              <a style={{color: 'green'}} href="https://github.com/abe-calder/TODO-fullstack-database"> GitHub Repo</a>
            </Text>
          </Card>
        </Box>
      </div>
      <div aria-hidden="true"
        className="hidden sm:absolute sm:-middle sm:left-2/3 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu">
          <Flex direction="column" gap="3">
	          <Heading style={{borderBottom: '1px solid white', width: 'fit-content', alignSelf: 'center'}} color="sky" size="9">Group</Heading>
          </Flex>
        <Box maxWidth="15vw" style={{paddingTop: '3vh'}}>
	        <Card size="4">
            <Inset  side="top" pb="current">
              <img
                src="/images/Screenshot 2025-09-23 214342.png"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 175,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Whats Up</Strong> Is a browser messaging 
              app that my colleagues and I 
              worked together on during our 
              final group project. It includes 
              Auth0 integrated sign-in/out <br></br>
              <a style={{color: 'maroon'}} href="https://whats-up-zh1w.onrender.com/">Delopyed Site </a> | 
              <a style={{color: 'green'}} href="https://github.com/hotoke-2025/whats-up"> GitHub Repo</a>
            </Text>
          </Card>
        </Box>
      </div>
    </div>
    </>
  )
}