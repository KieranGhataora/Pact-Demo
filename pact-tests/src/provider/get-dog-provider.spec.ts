const { Verifier } = require('@pact-foundation/pact');
const path = require('path');
import axios, {AxiosPromise} from "axios";

describe("Pact Verification", () => {
    it("validates the expectations of {Insert Application Here}", () => {
        let opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:3000",
            provider: "AnimalService",
            providerVersion: "1.0.0",
            pactUrls: [
                path.resolve(__dirname, '../../pacts/myconsumer-myprovider.json')
            ],
            stateHandlers: {
                null: () => {
                    // Do nothing
                },
                "Fresh Data Set": () => {
                    axios.post("http://localhost:3000/clearManipObject");
                },
                "Object Example Seeded": () => {
                    axios.post("http://localhost:3000/manipObject", {
                        "wooooooh": "Testy Testy!!!",
                        "Ayyyy": "Testy 2!"
                    });
                }
            }
        };

        return new Verifier(opts).verifyProvider().finally(() => {});
    })
});


