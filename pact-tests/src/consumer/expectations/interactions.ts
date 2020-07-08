import {Interaction} from "@pact-foundation/pact";
import {basicCatObject, basicDogObject, basicHorseObject, basicHumanObject, manipulatedObject} from "./objects";

let basicDogObjectRequestInteraction = new Interaction()
    .uponReceiving("A request for the basic dog object")
    .given("Fresh Data Set")
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
            body: basicDogObject,
        }
    );

let basicCatObjectRequestInteraction = new Interaction()
    .uponReceiving("A request for the basic cat object")
    .given("Fresh Data Set")
    .withRequest({
        method: "GET",
        path: "/cat",
        headers: {
            Accept: "application/json",
        },
    })
    .willRespondWith({
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: basicCatObject,
        }
    );

let basicHorseObjectRequestInteraction = new Interaction()
    .uponReceiving("A request for the basic horse object")
    .given("Fresh Data Set")
    .withRequest({
        method: "GET",
        path: "/horse",
        headers: {
            Accept: "application/json",
        },
    })
    .willRespondWith({
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: basicHorseObject,
        }
    );

let basicHumanObjectRequestInteraction = new Interaction()
    .uponReceiving("A request for the basic human object")
    .given("Fresh Data Set")
    .withRequest({
        method: "GET",
        path: "/human",
    })
    .willRespondWith({
            status: 200,
            body: basicHumanObject,
        }
    );

let objectManipulatedExampleInteraction = new Interaction()
    .uponReceiving("A request for the Example Manipulated Object")
    .given("Object Example Seeded")
    .withRequest({
        method: "GET",
        path: "/manipObject",
    })
    .willRespondWith({
            status: 200,
            body: manipulatedObject,
        }
    );


export { basicDogObjectRequestInteraction, basicCatObjectRequestInteraction, basicHorseObjectRequestInteraction, basicHumanObjectRequestInteraction, objectManipulatedExampleInteraction }