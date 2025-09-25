import { Box, Card, Container, Flex, Heading, Inset, Strong, Text } from "@radix-ui/themes";

export default function HomeBottom() {


  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{height: '180vh'}}>
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
        className="hidden sm:absolute sm:-middle sm:right-[calc(66.66%-4vw)] sm:-z-10 sm:mr-10 sm:block sm:transform-gpu" >
          <Flex direction="column" gap="3">
	          <Heading id="personal" style={{ borderBottom: '1px solid white', width: 'fit-content', alignSelf: 'center'}} color="sky" size="9">Personal</Heading>
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
                  width: "16vw",
                  height: '15vh',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Todos</Strong> This is 
              a web app that was built as a 
              place to store a list of things 
                that I needed to do. Todos was build using React TypeScript
                and Express SQLite for back-end.
                <br></br>
                <br></br>
                I learnt the foundations of
                databases and database structure
                during this project. And reinforced 
                my knowledge of REST api CRUD
                operations.
                <br></br>
              
              <a style={{color: 'maroon'}} href="https://todo-full-stack-jggn.onrender.com/">Delopyed Site </a> | 
              <a style={{color: 'green'}} href="https://github.com/abe-calder/TODO-fullstack-database"> GitHub Repo</a>
            </Text>
          </Card>
        </Box>
        <Box className="project-box" maxWidth="15vw" style={{paddingTop: '3vh'}}>
	        <Card  size="4">
            <Inset   side="top" pb="current">
              <img
                src="/images/cr-site-player-stats.png"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "16vw",
                  height: '15vh',
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Cr-Site</Strong> This is a web app that I am 
              in the process of building and 
              contains in game statistics for a 
                video game I play, using their api.
                CR-Site was build with React
                TypeScript, React router, useQuery,
                useMutation, and many more
                technologies.
                <br></br>
              
              <a style={{color: 'green'}} href="https://github.com/abe-calder/CR-Site"> GitHub Repo</a>
            </Text>
          </Card>
        </Box>
      </div>
      <div aria-hidden="true"
        className="hidden sm:absolute sm:-middle sm:left-[calc(66.66%-4vw)] sm:-z-10 sm:mr-10 sm:block sm:transform-gpu">
          <Flex direction="column" gap="3">
	          <Heading id="group" style={{borderBottom: '1px solid white', width: 'fit-content', alignSelf: 'center'}} color="sky" size="9">Group</Heading>
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
                  width: "16vw",
                  height: '15vh',
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Whats Up</Strong> Is a browser messaging 
              app that my colleagues and I 
              worked together on during our 
              final group project. It includes 
                Auth0 integrated sign-in/out.
                Whats Up was build using React 
                TypeScript, React router, Express
                server, SQLite database, tailwind
                and many more technologies.
                <br></br>
                <br></br>
                This project reinfoced my team
                and collaboration skills and
                fostered a great enviroment for me
                to learn how to implement a
                WebSocket.
                <br></br>
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
