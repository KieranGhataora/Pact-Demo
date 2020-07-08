/* tslint:disable:no-unused-expression object-literal-sort-keys max-classes-per-file no-empty */
import * as chai from "chai"
import * as chaiAsPromised from "chai-as-promised"
import path = require("path");
import {Pact, Interaction } from "@pact-foundation/pact"

const expect = chai.expect;
import {Animal, AnimalAPIClient} from "../animal-api/client";

chai.use(chaiAsPromised);


describe("The Dog API", () => {
    const url = "http://localhost";
    let animalService: AnimalAPIClient;

    const provider = new Pact({
        // port,
        log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
        dir: path.resolve(process.cwd(), "pacts"),
        spec: 2,
        consumer: "MyConsumer",
        provider: "MyProvider",
    });

    before(() =>
        provider.setup().then(opts => {
            animalService = new AnimalAPIClient(url, opts.port);
        })
    );

    after(() => provider.finalize());

    afterEach(() => provider.verify());

    describe("get /dogs using builder pattern", () => {
        before(() => {
            const interaction = new Interaction()
                .given("I request the definition of a dog")
                .withRequest({
                    method: "GET",
                    path: "/dog",
                    headers: {
                        Accept: "application/json",
                    },
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: {
                        Type: "Canine",
                        Legs: 4,
                        Description: "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice."
                    },
                });

            return provider.addInteraction(interaction)
        });

        it("returns the correct response", done => {
            animalService.getDefinition(Animal.Dog).then((response: any) => {
                expect(response.data).to.deep.eq({
                    Type: "Canine",
                    Legs: 4,
                    Description: "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice."
                });
                done()
            }, done)
        })
    })
})
