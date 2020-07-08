import * as chai from "chai"
import * as chaiAsPromised from "chai-as-promised"
import path = require("path");
import { Pact } from "@pact-foundation/pact"
const expect = chai.expect;
import {Animal, AnimalAPIClient} from "../animal-api/client";
import axios, {AxiosPromise} from "axios";

import {
    basicCatObjectRequestInteraction,
    basicDogObjectRequestInteraction,
    basicHorseObjectRequestInteraction,
    basicHumanObjectRequestInteraction, objectManipulatedExampleInteraction
} from "./expectations/interactions";

import {
    basicCatObject,
    basicDogObject,
    basicHorseObject,
    basicHumanObject,
    manipulatedObject
} from "./expectations/objects";

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

    describe("get basic Dog object from the API", () => {
        before(() => {
            provider.addInteraction(basicDogObjectRequestInteraction);
            return provider;
        });

        it("returns the correct response when Dog is requested", done => {
            animalService.getDefinition(Animal.Dog).then((response: any) => {
                expect(response.data).to.deep.eq(basicDogObject);
                done()
            }, done)
        });
    });

    describe("get basic Cat object from the API", () => {
        before(() => {
            provider.addInteraction(basicCatObjectRequestInteraction);
            return provider;
        });

        it("returns the correct response when Cat is requested", done => {
            animalService.getDefinition(Animal.Cat).then((response: any) => {
                expect(response.data).to.deep.eq(basicCatObject);
                done()
            }, done)
        });
    });

    describe("get basic Horse object from the API", () => {
        before(() => {
            provider.addInteraction(basicHorseObjectRequestInteraction);
            return provider;
        });

        it("returns the correct response when Horse is requested", done => {
            animalService.getDefinition(Animal.Horse).then((response: any) => {
                expect(response.data).to.deep.eq(basicHorseObject);
                done()
            }, done)
        });
    });

    describe("get basic Human object from the API", () => {
        before(() => {
            provider.addInteraction(basicHumanObjectRequestInteraction);
            return provider;
        });

        it("returns the correct response when Human is requested", done => {
            animalService.getDefinition(Animal.Human).then((response: any) => {
                expect(response.data).to.deep.eq(basicHumanObject);
                done()
            }, done)
        });
    });

    describe("get the manipulated object", () => {
        before(() => {
            provider.addInteraction(objectManipulatedExampleInteraction);
            return provider;
        });

        it("returns the object post manipulation using the state handler", done => {
            animalService.getManipulatedObject().then((response: any) => {
                expect(response.data).to.deep.eq(manipulatedObject);
                done()
            }, done)
        });
    });
});
