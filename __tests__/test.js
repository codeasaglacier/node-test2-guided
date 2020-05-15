// 5) install and import supertest as dev dependency
const supertest = require( "supertest" )
//  6) import server
// our server won't start when it's imported due to the if statement
const server = require( "../index" )

// 7) get rid of placeholder test
// 2) write a placeholder test and make sure jest is running ( g2 index.js )
// test( "a placeholder test", () => {
//   expect( 2 + 2 ).toBe( 4 )
// } )

// 8) write first integration test
test( "GET /", async () => {
  // 9) arrange the test data we need ( ARRANGE, Act, Assert )
  const endpoint = "/"
  const status = 200
  // 
  // makes a real HTTP request to the endpoint ( part of #8 ), acting on what we are testing ( Arrange, ACT, Assert )
  const res = await supertest( server ).get( endpoint )
  // console.log( res )

  // 10) assert the response data ( Arrange, Act, ASSERT ) ( g2 index.js )
  expect( res.statusCode ).toBe( status )
  expect( res.type ).toBe( "application/json" ) // res.type is shorthand for res.headers[ "content-type" ]
  expect( res.body.message ).toBe( "Welcome to our API" )
  // expect( res.body.message ).toHave( /welcome/i ) <--- a more flexible version of: expect( res.body.message ).toBe( "Welcome to our API" )
} )

// Three questions to assert
  // 1) Does it return the expected status code?
  // 2) Does it return the expected data format?
  // 3) Does it return the expected data?