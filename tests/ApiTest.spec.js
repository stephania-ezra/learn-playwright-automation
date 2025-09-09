import { test, expect } from '@playwright/test';

var userid;

//GET
test('retrieve User', async ({ request }) => {

    const response = await request.get('https://todos.simpleapi.dev/api/todos?apikey=0153d365-f69f-4076-b483-2d56b2f7185b');
    console.log(await response.json());
    //console.log(await response.text());
    expect(response.status()).toBe(200);

})


//POST
test('create User', async ({ request }) => {

    const response = await request.post('https://todos.simpleapi.dev/api/todos?apikey=0153d365-f69f-4076-b483-2d56b2f7185b',
        {
            data: {
                "description": "eat your breakfast",
                "completed": false,
                "author": "string",
                "id": 3024
            },
            headers: { "Accept": "application/json" }
        }
    );

    console.log(await response.json());
    expect(response.status()).toBe(200);

    var res = await response.json();
    //var res = await response.text();
    userid = res.id

})


//PUT
/*test('update User', async ({ request }) => {


    const response = await request.put('https://todos.simpleapi.dev/api/todos?apikey=0153d365-f69f-4076-b483-2d56b2f7185b', + userid,
        {
            data: {
                "description": "wash your clothes",
                "completed": false,
                "author": "string",
                "id": 3021
            },
            headers: { "Accept": "application/json" }
        }
    );

    console.log(await response.json());
    expect(response.status()).toBe(200);
}) */

//DELETE
test('delete User', async ({ request }) => {
    const response = await request.delete('https://todos.simpleapi.dev/api/todos?apikey=0153d365-f69f-4076-b483-2d56b2f7185b', + userid);
    expect(response.status()).toBe(200);

})
