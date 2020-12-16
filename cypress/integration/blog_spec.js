describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.server()
    cy.route('https://student-json-api.lidemy.me/posts?_sort=id&_order=desc', {
      id : 1,
      title: 'qqq',
      body: 'aaa'
    })
    cy.visit('/')
    cy.contains('qqq')
  })
})