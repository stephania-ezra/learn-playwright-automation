import { test, expect } from '@playwright/test';

test('Tag Test@sanity', async ({ page }) => {

    console.log("this is my first test");

});
test('Tag Test2@sanity', async ({ page }) => {

    console.log("this is my second test");

});
test('Tag Test3@reg', async ({ page }) => {

    console.log("this is my third test");

});
test('Tag Test4@reg', async ({ page }) => {

    console.log("this is my fourth test");

});
test('Tag Test5@reg@sanity', async ({ page }) => {

    console.log("this is my fifth test");

});


