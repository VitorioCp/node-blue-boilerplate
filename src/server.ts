import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger:true});

server.register(cors, {
    origin: "*"
})

const teams = [
    {
        id: 1,
        name: "Ferrari",
        base: "Itália"
    },
    {
        id: 2,
        name: "McLaren",
        base: "Reino Unido"
    },
    {
        id: 3,
        name: "Red Bull Racing",
        base: "Áustria"
    },
    {
        id: 4,
        name: "Mercedes",
        base: "Alemanha"
    },
    {
        id: 5,
        name: "Alpine",
        base: "França"
    },
    {
        id: 6,
        name: "Aston Martin",
        base: "Reino Unido"
    },
    {
        id: 7,
        name: "AlphaTauri",
        base: "Itália"
    },
    {
        id: 8,
        name: "Williams",
        base: "Reino Unido"
    },
    {
        id: 9,
        name: "Alfa Romeo",
        base: "Suíça"
    },
    {
        id: 10,
        name: "Haas",
        base: "Estados Unidos"
    }
];

const drivers = [
    {
        id: 1,
        name: "Vitorio",
        team: "Ferrari"
    },
    {
        id: 2,
        name: "Carlos",
        team: "Mercedes"
    },
    {
        id: 3,
        name: "Ana",
        team: "Red Bull"
    },
    {
        id: 4,
        name: "Lucas",
        team: "McLaren"
    },
    {
        id: 5,
        name: "Isabela",
        team: "Aston Martin"
    },
    {
        id: 6,
        name: "Ricardo",
        team: "Alpine"
    },
    {
        id: 7,
        name: "Fernanda",
        team: "AlphaTauri"
    },
    {
        id: 8,
        name: "Gabriel",
        team: "Haas"
    },
    {
        id: 9,
        name: "Marcos",
        team: "Williams"
    },
    {
        id: 10,
        name: "Bianca",
        team: "Alfa Romeo"
    }
];
interface DriverParams{
    id: string
}

const port = process.env.PORT

server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200)
    
    return teams

})

server.get("/drivers", async(request, response) =>{
    response.type("application/json").code(200)

    return[drivers]
})

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) =>{
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id == id);

    if(!driver){
    response.type("application/json").code(404)
    return {message: "Driver Not Found"}
    } else {
        response.type("application/json").code(200)
        return {driver}
    }

})

server.listen({port: 3333}, () =>{
    console.log("server is runnin in: " + port)
})