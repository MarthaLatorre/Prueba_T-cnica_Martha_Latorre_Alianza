class homeAlianza {

    elements = {
        usernameInput: ()=> cy.get('#email'),
        passwordInput: ()=> cy.get('#password'),
        loginBtn: ()=> cy.get('.btn'),
        errorMessage: ()=> cy.get('.alert')

    }

    enterUsername(username){
        this.elements.usernameInput().type(username)
    }

    enterPassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }
}

module.exports = new homeAlianza();