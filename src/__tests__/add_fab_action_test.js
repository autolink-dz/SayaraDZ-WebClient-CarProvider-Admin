
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import {addFab} from "../actions/admin/addFab";

import mockAxios from 'jest-mock-axios';



const mockStore = configureMockStore([thunk]);


describe("add fab action", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            users: {}
        });
    })

    it("dispatches addFab action and get END_GET_FABS type dispatched", async () => {
        jest.mock('axios');
        let body={
            nom:"nom_test",
            prenom:"prenom_test",
            mail :"test@gmail.com",
            mdp :"passwordtest",
            adresse :"adressetest",
            num_tlp :"0670256525",
            id_marque:"snXVki6wfhpJchYGV7X7"
        };
        localStorage.setItem("idToken","eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4MGVkMGQ3ODY2ODk1Y2E0M2MyMGRhZmM4NTlmMThjNjcwMWU3OTYiLCJ0eXAiOiJKV1QifQ.eyJhZG1pbiI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NheWFyYWR6LTc1MjQwIiwiYXVkIjoic2F5YXJhZHotNzUyNDAiLCJhdXRoX3RpbWUiOjE1NjEwNjg5ODIsInVzZXJfaWQiOiI4SmhudVN2M2U4VlJ5dDREQ3Y4RHY0bENXTWoxIiwic3ViIjoiOEpobnVTdjNlOFZSeXQ0REN2OER2NGxDV01qMSIsImlhdCI6MTU2MTA2ODk4MiwiZXhwIjoxNTYxMDcyNTgyLCJlbWFpbCI6ImFkbWluQHNheWFyYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5Ac2F5YXJhLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.s6cYPTVZc5ljAUNZijJnJbi_5Pf935dtdRM81UKsdM8yl55sEb9qAorf1O_dVFITufL66qQF7qvdtey_8R7WiX3Wku8q3R9Po50DZSWT0R6TOoR7akizAxMTzOF11gz9GEQwfM3kDj0gFJWoeBDslRH34Y6RD_lSyvBD72RexrvlTc96PtIvUS4ywBd1_vaSEMmn0E7E6Vpos66Of0zd_zeVbcWl0egv2N-qKaB1ljQQweQ3Jm3d3VwBOd4aNHDeJBLrAKuOWwNExL5VPo4YJPC87pe1zhspatnm2fg0YIa40F_UpJOGG74rDEaiwdHlSx0mqlaoW6BiFwEXOUQ3oQ")
        await store.dispatch(addFab("nom_test", "prenom_test" , "passwordtest" , "test@gmail.com", "adressetest" , "0670256525","snXVki6wfhpJchYGV7X7"));
       // expect(mockAxios.post).toHaveBeenCalledWith('/fabricants/', body);

        //   await mockFetchPromise
        const actions = store.getActions();
        // [ { type: "GET_USERS_PENDING" },
        //   { type: "GET_USERS_FULFILLED", payload: { data: [Array] } }
        // ]

        //expect.assertions(3);
        expect(actions).toContainEqual({"type": "END_GET_FABS"});

    });
});