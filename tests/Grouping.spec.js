import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log("This is Before All hook");
})

test.afterAll(async () => {
    console.log("This is After All hook");
})

test.beforeEach(async () => {
    console.log("This is Before Each hook");

})

test.afterEach(async () => {
    console.log("This is After Each hook");

})

test.describe('Group1', () => {
    test('Test1', async ({ page }) => {

        console.log("This is First Test");

    })

    test('Test2', async ({ page }) => {

        console.log("This is Second Test");

    })

})

test.describe('Group2', () => {
    test('Test3', async ({ page }) => {

        console.log("This is Third Test");

    })

    test('Test4', async ({ page }) => {

        console.log("This is Fourth Test");

    })
})

