// import {MessageProviderPact, Verifier} from "@pact-foundation/pact";
import {Animal, AnimalAPIClient} from "../animal-api/client";

/*
describe("Dog API Provider Tests", () => {

    const animalAPI = new AnimalAPIClient("localhost", 3000);

    const p = new MessageProviderPact({
        messageProviders: {
            'the definition of a dog': () => { return animalAPI.getDefinition(Animal.Dog) }
        },
        provider: "MyProvider",
        providerVersion: "1.0.0",
        pactUrls: [
            "D:\\dev\\proof-of-concepts\\pact-poc\\pact-tests\\pacts\\myconsumer-myprovider.json"
        ],
    });

    describe("Animal API Client", () => {
        it("sends me the definition of a dog", () => {
            p.verify();
        })
    })
});*/

const { Verifier } = require('@pact-foundation/pact');
const path = require('path');

describe("Pact Verification", () => {
    it("validates the expectations of ProductService", () => {
        let opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:3000",
            provider: "ProductService",
            providerVersion: "1.0.0",
            pactUrls: [
                path.resolve(__dirname, '../../pacts/myconsumer-myprovider.json')
            ]
        };

        return new Verifier(opts).verifyProvider().finally(() => {
        });
    })
});


